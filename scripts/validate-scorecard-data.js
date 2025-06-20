const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Funções de validação
const validators = {
  isValidEmail: (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  isValidPhone: (phone) => {
    const phoneRegex = /^\+?[\d\s-()]{8,}$/;
    return phoneRegex.test(phone);
  },

  isValidScore: (score) => {
    return Number.isInteger(score) && score >= 1 && score <= 5;
  },

  isValidEnum: (value, enumType) => {
    const validSources = ['website', 'email', 'phone', 'referral', 'other'];
    const validStatuses = ['pending', 'contacted', 'scheduled', 'completed', 'archived'];
    
    if (enumType === 'Source') {
      return validSources.includes(value);
    } else if (enumType === 'SubmissionStatus') {
      return validStatuses.includes(value);
    }
    return false;
  }
};

async function validateTestData() {
  console.log('🔍 Validando dados de teste...\n');

  const testData = {
    name: "Test User",
    email: "test@example.com",
    phone: "+1234567890",
    clinicName: "Test Clinic",
    role: "Owner",
    numberOfDoctors: 5,
    city: "Test City",
    state: "Test State",
    firstImpression: "Professional",
    patientJourney: "Professional",
    followUp: "Professional",
    reviews: "Professional",
    branding: "Professional",
    totalScore: 20,
    source: "website",
    status: "pending",
    ipAddress: "127.0.0.1",
    userAgent: "Test Script"
  };

  const scoreMap = {
    'Poor': 1,
    'Basic': 2,
    'Good': 3,
    'Professional': 4,
    'Excellent': 5
  };

  const validationResults = {
    basic: {},
    converted: {},
    final: {}
  };

  // 1. Validação básica
  console.log('1️⃣ Realizando validação básica...');
  validationResults.basic = {
    email: validators.isValidEmail(testData.email),
    phone: validators.isValidPhone(testData.phone),
    source: validators.isValidEnum(testData.source, 'Source'),
    status: validators.isValidEnum(testData.status, 'SubmissionStatus')
  };
  console.log('Resultados da validação básica:');
  console.table(validationResults.basic);

  // 2. Conversão de scores
  console.log('\n2️⃣ Validando conversão de scores...');
  const convertedData = {
    ...testData,
    firstImpression: scoreMap[testData.firstImpression] || 0,
    patientJourney: scoreMap[testData.patientJourney] || 0,
    followUp: scoreMap[testData.followUp] || 0,
    reviews: scoreMap[testData.reviews] || 0,
    branding: scoreMap[testData.branding] || 0
  };

  validationResults.converted = {
    firstImpression: validators.isValidScore(convertedData.firstImpression),
    patientJourney: validators.isValidScore(convertedData.patientJourney),
    followUp: validators.isValidScore(convertedData.followUp),
    reviews: validators.isValidScore(convertedData.reviews),
    branding: validators.isValidScore(convertedData.branding)
  };
  console.log('Scores convertidos:');
  console.table(validationResults.converted);

  // 3. Validação final dos dados
  console.log('\n3️⃣ Realizando validação final...');
  const expectedTotal = Object.values(scoreMap).reduce((sum, score) => sum + score, 0);
  validationResults.final = {
    allScoresValid: Object.values(validationResults.converted).every(v => v),
    totalScoreMatch: convertedData.totalScore === expectedTotal,
    allEnumsValid: validationResults.basic.source && validationResults.basic.status,
    allContactValid: validationResults.basic.email && validationResults.basic.phone
  };
  console.log('Resultados da validação final:');
  console.table(validationResults.final);

  // 4. Gerar dados corrigidos
  console.log('\n4️⃣ Gerando dados corrigidos...');
  const correctedData = {
    ...convertedData,
    totalScore: expectedTotal
  };
  console.log('Dados corrigidos para uso:');
  console.log(JSON.stringify(correctedData, null, 2));

  return {
    validationResults,
    correctedData
  };
}

// Executar validação
validateTestData()
  .then((results) => {
    console.log('\n✅ Validação concluída!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n❌ Erro durante validação:', error);
    process.exit(1);
  }); 