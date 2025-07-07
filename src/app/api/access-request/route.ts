import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'company', 'role', 'clinicSize', 'currentSystem', 'budget', 'timeline'];
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Ensure specialties is an array
    if (!Array.isArray(data.specialties)) {
      data.specialties = [];
    }

    // Create access request
    const accessRequest = await prisma.accessRequest.create({
      data: {
        name: data.name,
        email: data.email,
        company: data.company,
        role: data.role,
        clinicSize: data.clinicSize,
        specialties: data.specialties,
        currentSystem: data.currentSystem,
        budget: data.budget,
        timeline: data.timeline,
        message: data.message || null,
      },
    });

    return NextResponse.json(accessRequest, { status: 201 });
  } catch (error) {
    console.error('Failed to create access request:', error);
    return NextResponse.json(
      { error: 'Failed to create access request' },
      { status: 500 }
    );
  }
} 