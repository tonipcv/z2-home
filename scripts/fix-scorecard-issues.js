const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function fixScoreCardIssues() {
  console.log('🔧 Iniciando correções do sistema...\n');

  try {
    // 1. Verificar e corrigir tipos enum
    console.log('1️⃣ Verificando e corrigindo tipos enum...');
    
    // Source enum
    await prisma.$executeRawUnsafe(`
      DO $$ BEGIN
        CREATE TYPE "Source" AS ENUM ('website', 'email', 'phone', 'referral', 'other');
      EXCEPTION
        WHEN duplicate_object THEN
          -- Tipo já existe, tentar adicionar valores faltantes
          ALTER TYPE "Source" ADD VALUE IF NOT EXISTS 'website';
          ALTER TYPE "Source" ADD VALUE IF NOT EXISTS 'email';
          ALTER TYPE "Source" ADD VALUE IF NOT EXISTS 'phone';
          ALTER TYPE "Source" ADD VALUE IF NOT EXISTS 'referral';
          ALTER TYPE "Source" ADD VALUE IF NOT EXISTS 'other';
      END $$;
    `);

    // SubmissionStatus enum
    await prisma.$executeRawUnsafe(`
      DO $$ BEGIN
        CREATE TYPE "SubmissionStatus" AS ENUM ('pending', 'contacted', 'scheduled', 'completed', 'archived');
      EXCEPTION
        WHEN duplicate_object THEN
          -- Tipo já existe, tentar adicionar valores faltantes
          ALTER TYPE "SubmissionStatus" ADD VALUE IF NOT EXISTS 'pending';
          ALTER TYPE "SubmissionStatus" ADD VALUE IF NOT EXISTS 'contacted';
          ALTER TYPE "SubmissionStatus" ADD VALUE IF NOT EXISTS 'scheduled';
          ALTER TYPE "SubmissionStatus" ADD VALUE IF NOT EXISTS 'completed';
          ALTER TYPE "SubmissionStatus" ADD VALUE IF NOT EXISTS 'archived';
      END $$;
    `);
    
    console.log('✅ Tipos enum verificados e corrigidos');

    // 2. Verificar e corrigir estrutura da tabela
    console.log('\n2️⃣ Verificando e corrigindo estrutura da tabela...');
    
    // Criar tabela temporária com a estrutura correta
    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS "ScorecardSubmission_new" (
        "id" SERIAL PRIMARY KEY,
        "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "name" VARCHAR(255) NOT NULL,
        "email" VARCHAR(255) NOT NULL,
        "phone" VARCHAR(50) NOT NULL,
        "clinicName" VARCHAR(255) NOT NULL,
        "role" VARCHAR(100) NOT NULL,
        "numberOfDoctors" INTEGER NOT NULL,
        "city" VARCHAR(100) NOT NULL,
        "state" VARCHAR(100) NOT NULL,
        "firstImpression" INTEGER NOT NULL,
        "patientJourney" INTEGER NOT NULL,
        "followUp" INTEGER NOT NULL,
        "reviews" INTEGER NOT NULL,
        "branding" INTEGER NOT NULL,
        "totalScore" INTEGER NOT NULL,
        "source" "Source" NOT NULL DEFAULT 'website',
        "utmSource" VARCHAR(100),
        "utmMedium" VARCHAR(100),
        "utmCampaign" VARCHAR(100),
        "ipAddress" VARCHAR(100) NOT NULL,
        "userAgent" TEXT NOT NULL,
        "status" "SubmissionStatus" NOT NULL DEFAULT 'pending',
        "notes" TEXT
      )
    `);

    // 3. Criar funções auxiliares
    console.log('\n3️⃣ Criando funções auxiliares...');
    
    // Função convert_score
    await prisma.$executeRawUnsafe(`
      CREATE OR REPLACE FUNCTION convert_score(score text) RETURNS integer AS $$
      BEGIN
        RETURN CASE score
          WHEN 'Poor' THEN 1
          WHEN 'Basic' THEN 2
          WHEN 'Good' THEN 3
          WHEN 'Professional' THEN 4
          WHEN 'Excellent' THEN 5
          ELSE 3  -- Default para 'Good'
        END;
      END;
      $$ LANGUAGE plpgsql;
    `);

    // Função is_number
    await prisma.$executeRawUnsafe(`
      CREATE OR REPLACE FUNCTION is_number(text) RETURNS boolean AS $$
      BEGIN
        RETURN $1 ~ '^[0-9]+$';
      EXCEPTION WHEN OTHERS THEN
        RETURN false;
      END;
      $$ LANGUAGE plpgsql;
    `);

    // Função safe_to_int
    await prisma.$executeRawUnsafe(`
      CREATE OR REPLACE FUNCTION safe_to_int(v text) RETURNS integer AS $$
      BEGIN
        IF v IS NULL THEN
          RETURN 0;
        END IF;
        RETURN CASE 
          WHEN is_number(v) THEN v::integer
          ELSE 0
        END;
      END;
      $$ LANGUAGE plpgsql;
    `);

    // 4. Migrar dados se necessário
    console.log('\n4️⃣ Verificando necessidade de migração de dados...');
    const oldTableExists = await prisma.$queryRaw`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_name = 'ScorecardSubmission'
      );
    `;

    if (oldTableExists[0].exists) {
      console.log('Migrando dados da tabela antiga...');
      
      // Converter e migrar dados
      await prisma.$executeRawUnsafe(`
        INSERT INTO "ScorecardSubmission_new" (
          "name", "email", "phone", "clinicName", "role", "numberOfDoctors",
          "city", "state", "firstImpression", "patientJourney", "followUp",
          "reviews", "branding", "totalScore", "source", "ipAddress",
          "userAgent", "status"
        )
        SELECT 
          "name",
          "email",
          "phone",
          "clinicName",
          "role",
          COALESCE(safe_to_int("numberOfDoctors"::text), 1),
          "city",
          "state",
          convert_score("firstImpression"::text),
          convert_score("patientJourney"::text),
          convert_score("followUp"::text),
          convert_score("reviews"::text),
          convert_score("branding"::text),
          COALESCE(
            safe_to_int("totalScore"::text),
            convert_score("firstImpression"::text) + 
            convert_score("patientJourney"::text) + 
            convert_score("followUp"::text) + 
            convert_score("reviews"::text) + 
            convert_score("branding"::text)
          ),
          COALESCE("source"::Source, 'website'),
          COALESCE("ipAddress", '127.0.0.1'),
          COALESCE("userAgent", 'Unknown'),
          COALESCE("status"::SubmissionStatus, 'pending')
        FROM "ScorecardSubmission"
      `);

      // Trocar as tabelas
      await prisma.$executeRawUnsafe(`DROP TABLE "ScorecardSubmission"`);
      await prisma.$executeRawUnsafe(`ALTER TABLE "ScorecardSubmission_new" RENAME TO "ScorecardSubmission"`);
      console.log('✅ Dados migrados com sucesso');
    }

    // 5. Criar índices
    console.log('\n5️⃣ Criando índices...');
    await prisma.$executeRawUnsafe(`
      CREATE INDEX IF NOT EXISTS "ScorecardSubmission_email_idx" ON "ScorecardSubmission"("email");
      CREATE INDEX IF NOT EXISTS "ScorecardSubmission_status_idx" ON "ScorecardSubmission"("status");
    `);

    // 6. Verificar integridade
    console.log('\n6️⃣ Verificando integridade dos dados...');
    const validation = await prisma.$queryRaw`
      SELECT 
        COUNT(*) as total,
        COUNT(*) FILTER (WHERE "firstImpression" BETWEEN 1 AND 5) as valid_first_impression,
        COUNT(*) FILTER (WHERE "patientJourney" BETWEEN 1 AND 5) as valid_patient_journey,
        COUNT(*) FILTER (WHERE "followUp" BETWEEN 1 AND 5) as valid_follow_up,
        COUNT(*) FILTER (WHERE "reviews" BETWEEN 1 AND 5) as valid_reviews,
        COUNT(*) FILTER (WHERE "branding" BETWEEN 1 AND 5) as valid_branding,
        COUNT(*) FILTER (WHERE "source"::text = 'website') as valid_source,
        COUNT(*) FILTER (WHERE "status"::text = 'pending') as valid_status
      FROM "ScorecardSubmission"
    `;
    console.log('Resultados da validação:');
    console.table(validation);

    // 7. Limpar funções auxiliares
    await prisma.$executeRawUnsafe(`DROP FUNCTION IF EXISTS convert_score(text)`);
    await prisma.$executeRawUnsafe(`DROP FUNCTION IF EXISTS is_number(text)`);
    await prisma.$executeRawUnsafe(`DROP FUNCTION IF EXISTS safe_to_int(text)`);

    console.log('\n✅ Correções concluídas com sucesso!');
  } catch (error) {
    console.error('\n❌ Erro durante as correções:', {
      message: error.message,
      code: error.code,
      meta: error.meta
    });
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Executar correções
fixScoreCardIssues()
  .then(() => {
    console.log('\n🎉 Processo de correção finalizado!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n💥 Erro fatal durante correções:', error);
    process.exit(1);
  }); 