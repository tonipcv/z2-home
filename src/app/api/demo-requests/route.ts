import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, whatsapp, speciality, bestTime } = body;

    // Validação básica
    if (!name || !email || !whatsapp || !speciality || !bestTime) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      );
    }

    // Salvar no banco de dados
    const demoRequest = await prisma.demoRequest.create({
      data: {
        name,
        email,
        whatsapp,
        speciality,
        bestTime,
      },
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Solicitação recebida com sucesso',
        data: demoRequest 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Erro ao processar solicitação de demo:', error);
    return NextResponse.json(
      { error: 'Erro ao processar sua solicitação' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Buscar todos os pedidos de demonstração, ordenados por data de criação (mais recentes primeiro)
    const demoRequests = await prisma.demoRequest.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(demoRequests);
  } catch (error) {
    console.error('Erro ao buscar solicitações de demo:', error);
    return NextResponse.json(
      { error: 'Erro ao buscar solicitações' },
      { status: 500 }
    );
  }
} 