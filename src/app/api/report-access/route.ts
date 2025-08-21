import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, whatsapp, clinicLocation, annualRevenue } = body || {};

    if (!name || !whatsapp || !clinicLocation || !annualRevenue) {
      return NextResponse.json({ error: 'Campos obrigatórios ausentes' }, { status: 400 });
    }

    // Persist using raw SQL (table created via SQL migration)
    try {
      await prisma.$executeRaw`INSERT INTO report_access_requests (name, whatsapp, clinic_location, annual_revenue) VALUES (${name}, ${whatsapp}, ${clinicLocation}, ${annualRevenue})`;
    } catch (dbErr) {
      console.error('Erro ao inserir report_access_request:', dbErr);
      return NextResponse.json({ error: 'Erro no banco de dados' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Erro no endpoint /api/report-access', err);
    return NextResponse.json({ error: 'Erro ao processar a solicitação' }, { status: 500 });
  }
}
