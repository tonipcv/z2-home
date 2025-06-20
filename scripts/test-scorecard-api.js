const fetch = require('node-fetch');

async function testScorecardApi() {
  try {
    const testData = {
      // Contact Information
      name: 'Test User',
      email: 'test@example.com',
      phone: '(555) 123-4567',
      clinicName: 'Test Clinic',
      role: 'Owner',
      numberOfDoctors: '3',
      city: 'Test City',
      state: 'TS',

      // Scorecard Ratings
      firstImpression: 'Professional',
      patientJourney: 'Excellent',
      followUp: 'Professional',
      reviews: 'Basic',
      branding: 'Professional',
      totalScore: 80
    };

    console.log('🚀 Sending test data:', JSON.stringify(testData, null, 2));

    const response = await fetch('http://localhost:3000/api/scorecard', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Test Script',
        'X-Real-IP': '127.0.0.1'
      },
      body: JSON.stringify(testData)
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(`API request failed: ${result.error}`);
    }

    console.log('✅ Test successful!');
    console.log('Response:', JSON.stringify(result, null, 2));
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    process.exit(1);
  }
}

testScorecardApi(); 