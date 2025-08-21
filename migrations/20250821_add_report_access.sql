-- Create table for gated report access submissions
CREATE TABLE IF NOT EXISTS report_access_requests (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  clinic_location TEXT NOT NULL,
  annual_revenue TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
