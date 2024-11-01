// app/api/declarations/[nick]/route.ts
import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function GET(request: Request, { params }: { params: { nick: string } }) {
  const { nick } = params;
  console.log('Received nick:', nick); // Check if this logs

  try {
    const { rows } = await sql`SELECT * FROM declarations WHERE guestnickname = ${nick};`;
    
    if (rows.length === 0) {
      return NextResponse.json({ error: 'Declaration not found' }, { status: 404 });
    }

    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error('Error fetching declaration: ', error);
    return NextResponse.json({ error: 'Failed to fetch declaration' }, { status: 500 });
  }
}
