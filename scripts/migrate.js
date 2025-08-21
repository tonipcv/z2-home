const { Pool } = require('pg');
const fs = require('fs').promises;
const path = require('path');

async function runMigration() {
  // Load environment variables
  require('dotenv').config();

  // Create a connection pool
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });

  try {
    // Find all .sql migrations
    const migrationsDir = path.join(__dirname, '../migrations');
    const files = await fs.readdir(migrationsDir);
    const sqlFiles = files.filter((f) => f.endsWith('.sql')).sort();

    const client = await pool.connect();
    try {
      // Ensure migrations table exists
      await client.query(`
        CREATE TABLE IF NOT EXISTS "_migrations" (
          "id" SERIAL PRIMARY KEY,
          "name" TEXT NOT NULL UNIQUE,
          "executed_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);

      // Fetch already executed migrations
      const { rows } = await client.query('SELECT name FROM "_migrations"');
      const executed = new Set(rows.map((r) => r.name));

      // Run pending migrations in order
      for (const file of sqlFiles) {
        const name = path.basename(file, '.sql');
        if (executed.has(name)) {
          console.log(`Skipping already executed migration: ${name}`);
          continue;
        }

        const migrationPath = path.join(migrationsDir, file);
        const sql = await fs.readFile(migrationPath, 'utf8');

        console.log(`Applying migration: ${name}`);
        await client.query('BEGIN');
        try {
          await client.query(sql);
          await client.query('INSERT INTO "_migrations" (name) VALUES ($1)', [name]);
          await client.query('COMMIT');
          console.log(`✅ Migration applied: ${name}`);
        } catch (err) {
          await client.query('ROLLBACK');
          console.error(`❌ Migration failed: ${name}`);
          throw err;
        }
      }

      console.log('All migrations up to date.');
    } finally {
      client.release();
    }
  } catch (err) {
    console.error('Migration failed:', err);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

runMigration(); 