import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, profession } = body

    const lead = await prisma.lead.create({
      data: {
        name,
        profession,
        whatsapp: '',
        email: '',
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