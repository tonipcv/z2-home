import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

const PASSWORD = 'milionario27@';

export async function GET(request: Request) {
  try {
    const pass = request.headers.get('x-admin-pass') || '';
    if (pass !== PASSWORD) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    type Row = {
      id: number;
      name: string;
      whatsapp: string;
      clinic_location: string;
      annual_revenue: string;
      created_at: Date;
    };

    const rows = await prisma.$queryRaw<Row[]>`
      SELECT id, name, whatsapp, clinic_location, annual_revenue, created_at
      FROM report_access_requests
      ORDER BY created_at DESC
    `;

    const data = rows.map(r => ({
      id: r.id,
      name: r.name,
      whatsapp: r.whatsapp,
      clinicLocation: r.clinic_location,
      annualRevenue: r.annual_revenue,
      createdAt: r.created_at,
    }));

    return NextResponse.json({ data });
  } catch (err) {
    console.error('Erro ao listar report_access_requests:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
