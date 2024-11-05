import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function PUT(request: Request, { params }: { params: { nick: string } }) {
    try {
      const {nick} = params;
      const body = await request.json(); // Parse JSON from request body
      const bringIns = body?.bringIns || '';
  
      await sql`
        UPDATE declarations SET bringins=${bringIns} WHERE guestnickname=${nick}
        RETURNING *;
      `;

      return NextResponse.json({ status: 200 });
    } catch (error) {
      console.error('Error updating guest: ', error);
      return NextResponse.json({ error: 'Failed to add declaration' }, { status: 500 });
    }
  }