const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function updateSchema() {
  try {
    console.log('Iniciando atualização do schema...');

    // 1. Backup dos dados existentes
    const existingData = await prisma.$queryRaw`
      SELECT * FROM "ScorecardSubmission";
    `;
    console.log(`Encontrados ${existingData.length} registros para backup`);

    // 2. Criar os tipos enum primeiro
    await prisma.$executeRawUnsafe(`
      DO $$ BEGIN
        CREATE TYPE "Source" AS ENUM ('website', 'email', 'phone', 'referral', 'other');
      EXCEPTION
        WHEN duplicate_object THEN null;
      END $$;
    `);

    await prisma.$executeRawUnsafe(`
      DO $$ BEGIN
        CREATE TYPE "SubmissionStatus" AS ENUM ('pending', 'contacted', 'scheduled', 'completed', 'archived');
      EXCEPTION
        WHEN duplicate_object THEN null;
      END $$;
    `);

    // 3. Criar tabela temporária com a nova estrutura
    await prisma.$executeRawUnsafe(`
      CREATE TABLE "ScorecardSubmission_new" (
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
    console.log('Tabela temporária criada');

    // 4. Migrar dados existentes com conversão de tipos
    if (existingData.length > 0) {
      for (const record of existingData) {
        // Função para converter string em número
        const scoreToNumber = (score) => {
          const scoreMap = {
            'Poor': 1,
            'Basic': 2,
            'Good': 3,
            'Professional': 4,
            'Excellent': 5
          };
          return scoreMap[score] || 3; // Default para 3 (Good) se não encontrar
        };

        await prisma.$executeRawUnsafe(`
          INSERT INTO "ScorecardSubmission_new" (
            "id", "createdAt", "updatedAt", "name", "email", "phone",
            "clinicName", "role", "numberOfDoctors", "city", "state",
            "firstImpression", "patientJourney", "followUp", "reviews",
            "branding", "totalScore", "source", "utmSource", "utmMedium",
            "utmCampaign", "ipAddress", "userAgent", "status", "notes"
          ) VALUES (
            ${record.id},
            '${record.createdAt.toISOString()}',
            '${record.updatedAt.toISOString()}',
            '${record.name}',
            '${record.email}',
            '${record.phone}',
            '${record.clinicName}',
            '${record.role}',
            ${record.numberOfDoctors},
            '${record.city}',
            '${record.state}',
            ${scoreToNumber(record.firstImpression)},
            ${scoreToNumber(record.patientJourney)},
            ${scoreToNumber(record.followUp)},
            ${scoreToNumber(record.reviews)},
            ${scoreToNumber(record.branding)},
            ${record.totalScore},
            '${record.source || 'website'}'::Source,
            ${record.utmSource ? `'${record.utmSource}'` : 'NULL'},
            ${record.utmMedium ? `'${record.utmMedium}'` : 'NULL'},
            ${record.utmCampaign ? `'${record.utmCampaign}'` : 'NULL'},
            '${record.ipAddress}',
            '${record.userAgent}',
            '${record.status || 'pending'}'::SubmissionStatus,
            ${record.notes ? `'${record.notes}'` : 'NULL'}
          )
        `);
      }
      console.log(`${existingData.length} registros migrados`);
    }

    // 5. Trocar as tabelas
    await prisma.$executeRawUnsafe(`DROP TABLE IF EXISTS "ScorecardSubmission"`);
    await prisma.$executeRawUnsafe(`ALTER TABLE "ScorecardSubmission_new" RENAME TO "ScorecardSubmission"`);
    console.log('Tabela antiga substituída pela nova');

    // 6. Recriar índices e constraints
    await prisma.$executeRawUnsafe(`CREATE INDEX "ScorecardSubmission_email_idx" ON "ScorecardSubmission"("email")`);
    await prisma.$executeRawUnsafe(`CREATE INDEX "ScorecardSubmission_status_idx" ON "ScorecardSubmission"("status")`);
    console.log('Índices recriados');

    console.log('✅ Atualização do schema concluída com sucesso!');
  } catch (error) {
    console.error('❌ Erro durante a atualização:', error);
    
    // Tentar reverter para a tabela original em caso de erro
    try {
      await prisma.$executeRawUnsafe(`DROP TABLE IF EXISTS "ScorecardSubmission_new"`);
      console.log('Alterações revertidas');
    } catch (rollbackError) {
      console.error('Erro ao reverter alterações:', rollbackError);
    }
    
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

updateSchema()
  .then(() => {
    console.log('Script finalizado.');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Erro inesperado:', error);
    process.exit(1);
  }); 