const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function fixScorecard() {
  try {
    console.log('🔧 Iniciando correção...');

    // 1. Remover tabela duplicada
    await prisma.$executeRawUnsafe(`DROP TABLE IF EXISTS "ScorecardSubmission_new"`);
    console.log('✅ Tabela duplicada removida');

    // 2. Atualizar dados existentes
    const result = await prisma.$executeRawUnsafe(`
      UPDATE "ScorecardSubmission"
      SET 
        "firstImpression" = CASE "firstImpression"
          WHEN 1 THEN 1
          WHEN 2 THEN 2
          WHEN 3 THEN 3
          WHEN 4 THEN 4
          WHEN 5 THEN 5
          ELSE 3
        END,
        "patientJourney" = CASE "patientJourney"
          WHEN 1 THEN 1
          WHEN 2 THEN 2
          WHEN 3 THEN 3
          WHEN 4 THEN 4
          WHEN 5 THEN 5
          ELSE 3
        END,
        "followUp" = CASE "followUp"
          WHEN 1 THEN 1
          WHEN 2 THEN 2
          WHEN 3 THEN 3
          WHEN 4 THEN 4
          WHEN 5 THEN 5
          ELSE 3
        END,
        "reviews" = CASE "reviews"
          WHEN 1 THEN 1
          WHEN 2 THEN 2
          WHEN 3 THEN 3
          WHEN 4 THEN 4
          WHEN 5 THEN 5
          ELSE 3
        END,
        "branding" = CASE "branding"
          WHEN 1 THEN 1
          WHEN 2 THEN 2
          WHEN 3 THEN 3
          WHEN 4 THEN 4
          WHEN 5 THEN 5
          ELSE 3
        END,
        "totalScore" = (
          CASE "firstImpression" WHEN 1 THEN 1 WHEN 2 THEN 2 WHEN 3 THEN 3 WHEN 4 THEN 4 WHEN 5 THEN 5 ELSE 3 END +
          CASE "patientJourney" WHEN 1 THEN 1 WHEN 2 THEN 2 WHEN 3 THEN 3 WHEN 4 THEN 4 WHEN 5 THEN 5 ELSE 3 END +
          CASE "followUp" WHEN 1 THEN 1 WHEN 2 THEN 2 WHEN 3 THEN 3 WHEN 4 THEN 4 WHEN 5 THEN 5 ELSE 3 END +
          CASE "reviews" WHEN 1 THEN 1 WHEN 2 THEN 2 WHEN 3 THEN 3 WHEN 4 THEN 4 WHEN 5 THEN 5 ELSE 3 END +
          CASE "branding" WHEN 1 THEN 1 WHEN 2 THEN 2 WHEN 3 THEN 3 WHEN 4 THEN 4 WHEN 5 THEN 5 ELSE 3 END
        )
    `);
    console.log('✅ Dados atualizados');

    // 3. Verificar integridade
    const validation = await prisma.$queryRaw`
      SELECT 
        COUNT(*) as total,
        COUNT(*) FILTER (WHERE "firstImpression" BETWEEN 1 AND 5) as valid_scores,
        COUNT(*) FILTER (WHERE "totalScore" = (
          "firstImpression" + "patientJourney" + "followUp" + "reviews" + "branding"
        )) as valid_totals
      FROM "ScorecardSubmission"
    `;
    console.log('\nValidação:');
    console.table(validation);

    console.log('\n✅ Correção concluída!');
  } catch (error) {
    console.error('\n❌ Erro:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

fixScorecard()
  .then(() => process.exit(0))
  .catch(() => process.exit(1)); 