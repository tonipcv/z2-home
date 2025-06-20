const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function migrateSafely() {
  try {
    console.log('Starting database migration...');
    
    // 1. Backup existing data
    const existingData = await prisma.$queryRaw`
      SELECT * FROM "ScorecardSubmission";
    `;
    console.log(`Found ${existingData.length} existing records`);

    // 2. Drop existing table
    await prisma.$executeRawUnsafe(`
      DROP TABLE IF EXISTS "ScorecardSubmission";
    `);
    console.log('Dropped existing table');

    // 3. Create table with correct structure
    await prisma.$executeRawUnsafe(`
      CREATE TABLE "ScorecardSubmission" (
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
        "firstImpression" VARCHAR(100) NOT NULL,
        "patientJourney" VARCHAR(100) NOT NULL,
        "followUp" VARCHAR(100) NOT NULL,
        "reviews" VARCHAR(100) NOT NULL,
        "branding" VARCHAR(100) NOT NULL,
        "totalScore" INTEGER NOT NULL,
        "source" VARCHAR(50) NOT NULL DEFAULT 'website',
        "utmSource" VARCHAR(100),
        "utmMedium" VARCHAR(100),
        "utmCampaign" VARCHAR(100),
        "ipAddress" VARCHAR(100) NOT NULL,
        "userAgent" TEXT NOT NULL,
        "status" VARCHAR(50) NOT NULL DEFAULT 'pending',
        "notes" TEXT
      );
    `);
    console.log('Created new table with correct structure');

    // 4. Restore existing data with type conversion
    if (existingData.length > 0) {
      for (const record of existingData) {
        await prisma.scorecardSubmission.create({
          data: {
            name: record.name,
            email: record.email,
            phone: record.phone,
            clinicName: record.clinicName,
            role: record.role,
            numberOfDoctors: record.numberOfDoctors,
            city: record.city,
            state: record.state,
            firstImpression: String(record.firstImpression),
            patientJourney: String(record.patientJourney),
            followUp: String(record.followUp),
            reviews: String(record.reviews),
            branding: String(record.branding),
            totalScore: record.totalScore,
            source: 'website',
            utmSource: record.utmsource,
            utmMedium: record.utmmedium,
            utmCampaign: record.utmcampaign,
            ipAddress: record.ipAddress || 'unknown',
            userAgent: record.userAgent || 'unknown',
            status: record.status || 'pending',
            notes: record.notes
          }
        });
      }
      console.log(`Restored ${existingData.length} records`);
    }

    console.log('✅ Migration completed successfully!');
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

migrateSafely()
  .then(() => {
    console.log('Migration script completed.');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Unexpected error:', error);
    process.exit(1);
  }); 