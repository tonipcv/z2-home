-- Create RequestStatus enum type if it doesn't exist
DO $$ BEGIN
    CREATE TYPE "RequestStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED', 'CONTACTED');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- Create AccessRequest table if it doesn't exist
CREATE TABLE IF NOT EXISTS "AccessRequest" (
    "id" TEXT PRIMARY KEY,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "clinicSize" TEXT NOT NULL,
    "specialties" TEXT[] NOT NULL,
    "currentSystem" TEXT NOT NULL,
    "budget" TEXT NOT NULL,
    "timeline" TEXT NOT NULL,
    "message" TEXT,
    "status" "RequestStatus" NOT NULL DEFAULT 'PENDING'
); 