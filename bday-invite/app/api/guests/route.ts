import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function GET() {
  try {
    const { rows } = await sql`SELECT * FROM guests;`

    return NextResponse.json(rows);
  } catch(error){
    console.error('Error fetching guests: ', error);
    return NextResponse.json({ error: 'Failed to fetch guests' }, { status: 500 });
  }
  
}