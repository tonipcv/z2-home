import { NextResponse } from 'next/server';
import { PrismaClient, Source, SubmissionStatus, ScoreValue } from '@prisma/client';
import { headers } from 'next/headers';
import { ScorecardSubmission } from '@/types/scorecard';

// Create a single PrismaClient instance
const prisma = new PrismaClient();

// Mapping de strings para ScoreValue enum
const scoreMap: Record<string, ScoreValue> = {
  'Poor': ScoreValue.Poor,
  'Basic': ScoreValue.Basic,
  'Good': ScoreValue.Good,
  'Professional': ScoreValue.Professional,
  'Excellent': ScoreValue.Excellent
};

export async function POST(request: Request) {
  try {
    const data = await request.json() as ScorecardSubmission;
    
    // Validate required fields
    const requiredFields = [
      'name', 'email', 'phone', 'clinicName', 'role', 'numberOfDoctors',
      'city', 'state', 'firstImpression', 'patientJourney', 'followUp',
      'reviews', 'branding'
    ];
    
    const missingFields = requiredFields.filter(field => !data[field as keyof ScorecardSubmission]);
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    // Get request metadata
    const headersList = headers();
    const userAgent = headersList.get('user-agent') ?? '';
    const forwardedFor = headersList.get('x-forwarded-for');
    const realIp = headersList.get('x-real-ip');
    const referer = headersList.get('referer') ?? '';
    
    // Use x-forwarded-for or x-real-ip or fallback to empty string
    const ipAddress = forwardedFor || realIp || '';

    // Create scorecard submission
    const submission = await prisma.scorecardSubmission.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        clinicName: data.clinicName,
        role: data.role,
        numberOfDoctors: parseInt(data.numberOfDoctors),
        city: data.city,
        state: data.state,
        firstImpression: data.firstImpression as ScoreValue,
        patientJourney: data.patientJourney as ScoreValue,
        followUp: data.followUp as ScoreValue,
        reviews: data.reviews as ScoreValue,
        branding: data.branding as ScoreValue,
        totalScore: data.totalScore,
        source: Source.website,
        ipAddress,
        userAgent,
        status: SubmissionStatus.pending
      }
    });

    return NextResponse.json({ success: true, data: submission });
  } catch (error) {
    console.error('Error saving scorecard:', error);
    return NextResponse.json(
      { error: 'Failed to save scorecard. Database error occurred.' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
} 