const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function diagnoseSystem() {
  console.log('🔍 Iniciando diagnóstico do sistema...\n');
  
  try {
    // 1. Verificar conexão com o banco
    console.log('1️⃣ Testando conexão com o banco de dados...');
    await prisma.$queryRaw`SELECT 1`;
    console.log('✅ Conexão com o banco OK\n');

    // 2. Verificar estrutura da tabela
    console.log('2️⃣ Verificando estrutura da tabela...');
    const tableInfo = await prisma.$queryRaw`
      SELECT 
        column_name, 
        data_type, 
        character_maximum_length,
        column_default,
        is_nullable
      FROM information_schema.columns 
      WHERE table_name = 'ScorecardSubmission'
      ORDER BY ordinal_position;
    `;
    console.log('Estrutura atual da tabela:');
    console.table(tableInfo);

    // 3. Verificar tipos enum
    console.log('\n3️⃣ Verificando tipos enum...');
    const enumTypes = await prisma.$queryRaw`
      SELECT t.typname, e.enumlabel
      FROM pg_type t 
      JOIN pg_enum e ON t.oid = e.enumtypid  
      JOIN pg_catalog.pg_namespace n ON n.oid = t.typnamespace
      WHERE n.nspname = 'public'
      AND (t.typname = 'Source' OR t.typname = 'SubmissionStatus')
      ORDER BY t.typname, e.enumsortorder;
    `;
    console.log('Tipos enum definidos:');
    console.table(enumTypes);

    // 4. Verificar índices
    console.log('\n4️⃣ Verificando índices...');
    const indices = await prisma.$queryRaw`
      SELECT 
        tablename,
        indexname,
        indexdef
      FROM pg_indexes 
      WHERE tablename = 'ScorecardSubmission';
    `;
    console.log('Índices existentes:');
    console.table(indices);

    // 5. Tentar inserir um registro de teste
    console.log('\n5️⃣ Tentando inserir registro de teste...');
    const testRecord = await prisma.scorecardSubmission.create({
      data: {
        name: "Test Diagnostic",
        email: "test@diagnostic.com",
        phone: "+1234567890",
        clinicName: "Diagnostic Clinic",
        role: "Tester",
        numberOfDoctors: 1,
        city: "Test City",
        state: "Test State",
        firstImpression: 4,
        patientJourney: 4,
        followUp: 4,
        reviews: 4,
        branding: 4,
        totalScore: 20,
        source: "website",
        ipAddress: "127.0.0.1",
        userAgent: "Diagnostic Script",
        status: "pending"
      }
    });
    console.log('✅ Inserção de teste bem-sucedida:', testRecord);

    // 6. Limpar registro de teste
    console.log('\n6️⃣ Limpando registro de teste...');
    await prisma.scorecardSubmission.delete({
      where: { id: testRecord.id }
    });
    console.log('✅ Registro de teste removido');

  } catch (error) {
    console.error('\n❌ Erro durante o diagnóstico:', {
      step: error.step || 'Desconhecido',
      message: error.message,
      code: error.code,
      meta: error.meta
    });
  } finally {
    await prisma.$disconnect();
  }
}

// Executar diagnóstico
diagnoseSystem()
  .then(() => {
    console.log('\n🏁 Diagnóstico concluído!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n💥 Erro fatal:', error);
    process.exit(1);
  }); 