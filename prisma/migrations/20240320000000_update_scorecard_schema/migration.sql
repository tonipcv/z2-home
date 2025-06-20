-- Drop old enums if they exist
DROP TYPE IF EXISTS "ScoreValue" CASCADE;
DROP TYPE IF EXISTS "Source" CASCADE;
DROP TYPE IF EXISTS "SubmissionStatus" CASCADE;

-- Create new enums
CREATE TYPE "ScoreValue" AS ENUM ('Poor', 'Basic', 'Professional', 'Excellent');
CREATE TYPE "Source" AS ENUM ('website', 'email', 'phone', 'referral', 'other');
CREATE TYPE "SubmissionStatus" AS ENUM ('pending', 'contacted', 'scheduled', 'completed', 'archived');

-- Drop old table if exists
DROP TABLE IF EXISTS "ScorecardSubmission" CASCADE;

-- Create new table
CREATE TABLE "ScorecardSubmission" (
  "id" SERIAL PRIMARY KEY,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  
  -- Contact Information
  "name" VARCHAR(255) NOT NULL,
  "email" VARCHAR(255) NOT NULL,
  "phone" VARCHAR(50) NOT NULL,
  "clinicName" VARCHAR(255) NOT NULL,
  "role" VARCHAR(100) NOT NULL,
  "numberOfDoctors" INTEGER NOT NULL,
  "city" VARCHAR(100) NOT NULL,
  "state" VARCHAR(100) NOT NULL,
  
  -- Scorecard Ratings
  "firstImpression" "ScoreValue" NOT NULL,
  "patientJourney" "ScoreValue" NOT NULL,
  "followUp" "ScoreValue" NOT NULL,
  "reviews" "ScoreValue" NOT NULL,
  "branding" "ScoreValue" NOT NULL,
  "totalScore" INTEGER NOT NULL,
  
  -- Tracking Information
  "source" "Source" NOT NULL DEFAULT 'website',
  "utmSource" VARCHAR(100),
  "utmMedium" VARCHAR(100),
  "utmCampaign" VARCHAR(100),
  "ipAddress" VARCHAR(100) NOT NULL,
  "userAgent" TEXT NOT NULL,
  "status" "SubmissionStatus" NOT NULL DEFAULT 'pending',
  "notes" TEXT
);

-- Create indexes
CREATE INDEX "ScorecardSubmission_email_idx" ON "ScorecardSubmission"("email");
CREATE INDEX "ScorecardSubmission_status_idx" ON "ScorecardSubmission"("status");
CREATE INDEX "ScorecardSubmission_createdAt_idx" ON "ScorecardSubmission"("createdAt");

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW."updatedAt" = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_scorecard_submissions_updated_at
    BEFORE UPDATE ON "ScorecardSubmission"
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column(); 