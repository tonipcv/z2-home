import prisma from '@/lib/prisma'

export interface CreateLeadData {
  name: string
  whatsapp: string
  email: string
  segment: string
  budget: string
}

export async function createLead(data: CreateLeadData) {
  try {
    const lead = await prisma.lead.create({
      data: {
        name: data.name,
        whatsapp: data.whatsapp,
        email: data.email,
        segment: data.segment,
        budget: data.budget,
      },
    })
    return lead
  } catch (error) {
    console.error('Error creating lead:', error)
    throw error
  }
} 