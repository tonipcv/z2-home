import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, whatsapp } = body

    const lead = await prisma.lead.create({
      data: {
        name,
        email,
        whatsapp,
        segment: 'prompt',
        budget: 'N/A'
      }
    })

    return NextResponse.json(lead)
  } catch (error) {
    console.error('Error creating lead:', error)
    return NextResponse.json(
      { error: 'Error creating lead' },
      { status: 500 }
    )
  }
} 