const { Pool } = require('pg');
const fs = require('fs').promises;
const path = require('path');

// Database configuration
const config = {
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'cxlus',
};

async function setupDatabase() {
  const pool = new Pool(config);

  try {
    // Read the SQL file
    const sqlPath = path.join(__dirname, 'create_scorecard_table.sql');
    const sqlContent = await fs.readFile(sqlPath, 'utf8');

    // Execute the SQL script
    console.log('Creating database tables...');
    await pool.query(sqlContent);
    console.log('Database setup completed successfully!');

  } catch (error) {
    console.error('Error setting up database:', error);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

setupDatabase(); 