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
    // Read the migration file
    const migrationPath = path.join(__dirname, '../migrations/20240319_add_access_requests.sql');
    const sql = await fs.readFile(migrationPath, 'utf8');

    // Start a transaction
    const client = await pool.connect();
    try {
      await client.query('BEGIN');
      
      // Execute the migration
      await client.query(sql);
      
      // Create a record of the migration
      await client.query(`
        CREATE TABLE IF NOT EXISTS "_migrations" (
          "id" SERIAL PRIMARY KEY,
          "name" TEXT NOT NULL,
          "executed_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);
      
      await client.query(`
        INSERT INTO "_migrations" ("name") 
        VALUES ($1)
      `, ['20240319_add_access_requests']);

      await client.query('COMMIT');
      console.log('Migration completed successfully');
    } catch (err) {
      await client.query('ROLLBACK');
      throw err;
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