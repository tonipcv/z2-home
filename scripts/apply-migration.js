const { PrismaClient } = require('@prisma/client');
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

async function applyMigration() {
  try {
    console.log('🔄 Starting migration process...');

    // 1. Run Prisma migration
    console.log('\n1️⃣ Running Prisma migration...');
    execSync('npx prisma migrate deploy', { stdio: 'inherit' });

    // 2. Generate Prisma client
    console.log('\n2️⃣ Generating Prisma client...');
    execSync('npx prisma generate', { stdio: 'inherit' });

    // 3. Verify database connection
    console.log('\n3️⃣ Verifying database connection...');
    const prisma = new PrismaClient();
    await prisma.$connect();

    // 4. Verify schema
    console.log('\n4️⃣ Verifying schema...');
    const tables = await prisma.$queryRaw`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
    `;
    console.log('Available tables:', tables);

    // 5. Verify enums
    console.log('\n5️⃣ Verifying enums...');
    const enums = await prisma.$queryRaw`
      SELECT t.typname as enum_name,
             e.enumlabel as enum_value
      FROM pg_type t
      JOIN pg_enum e ON t.oid = e.enumtypid
      JOIN pg_catalog.pg_namespace n ON n.oid = t.typnamespace
      WHERE n.nspname = 'public'
      ORDER BY t.typname, e.enumsortorder;
    `;
    console.log('Available enums:', enums);

    console.log('\n✅ Migration completed successfully!');
  } catch (error) {
    console.error('\n❌ Migration failed:', error);
    process.exit(1);
  }
}

applyMigration(); 