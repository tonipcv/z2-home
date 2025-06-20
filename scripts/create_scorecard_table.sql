-- Create enum types
CREATE TYPE source_type AS ENUM ('website', 'email', 'phone', 'referral', 'other');
CREATE TYPE submission_status_type AS ENUM ('pending', 'contacted', 'scheduled', 'completed', 'archived');

-- Create scorecard_submissions table
CREATE TABLE IF NOT EXISTS scorecard_submissions (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,

  -- Contact Information
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  clinic_name VARCHAR(255) NOT NULL,
  role VARCHAR(100) NOT NULL,
  number_of_doctors INTEGER NOT NULL,
  city VARCHAR(100) NOT NULL,
  state VARCHAR(100) NOT NULL,

  -- Scorecard Answers
  first_impression VARCHAR(50) NOT NULL,
  patient_journey VARCHAR(50) NOT NULL,
  follow_up VARCHAR(50) NOT NULL,
  reviews VARCHAR(50) NOT NULL,
  branding VARCHAR(50) NOT NULL,
  total_score INTEGER NOT NULL,

  -- Tracking Information
  source source_type DEFAULT 'website',
  utm_source VARCHAR(100),
  utm_medium VARCHAR(100),
  utm_campaign VARCHAR(100),
  ip_address VARCHAR(45) NOT NULL,
  user_agent TEXT NOT NULL,

  -- Status
  status submission_status_type DEFAULT 'pending',
  notes TEXT
);

-- Create indexes
CREATE INDEX idx_scorecard_submissions_email ON scorecard_submissions(email);
CREATE INDEX idx_scorecard_submissions_created_at ON scorecard_submissions(created_at);
CREATE INDEX idx_scorecard_submissions_status ON scorecard_submissions(status);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_scorecard_submissions_updated_at
    BEFORE UPDATE ON scorecard_submissions
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column(); 