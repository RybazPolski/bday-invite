import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function GET() {
  try {
    const { rows } = await sql`SELECT * FROM declarations;`;

    return NextResponse.json(rows);
  } catch (error) {
    console.error('Error fetching declarations: ', error);
    return NextResponse.json({ error: 'Failed to fetch declarations' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json(); // Parse JSON from request body
    const { guestnickname, inviteaccepted, questaccepted, lasertagaccepted, overnight, alkomohol, bringins, notes } = body;

    // console.log("nick", guestnickname);
    // console.log("invite", inviteaccepted);
    // console.log("quest", questaccepted);
    // console.log("laser", lasertagaccepted);
    // console.log("overnight", overnight);
    // console.log("alkomohol", alkomohol);
    // console.log("bringins", bringins);
    // console.log("notes", notes);

    if (
        guestnickname === undefined || guestnickname === null ||
        inviteaccepted === undefined || inviteaccepted === null ||
        questaccepted === undefined || questaccepted === null ||
        lasertagaccepted === undefined || lasertagaccepted === null ||
        overnight === undefined || overnight === null ||
        alkomohol === undefined || alkomohol === null
      ) {
        return NextResponse.json({ error: 'All fields except bringins and notes are required.' }, { status: 400 });
      }

    const { rows } = await sql`
      INSERT INTO declarations (guestnickname, inviteaccepted, questaccepted, lasertagaccepted, overnight, alkomohol, bringins, notes)
      VALUES (${guestnickname}, ${inviteaccepted}, ${questaccepted}, ${lasertagaccepted}, ${overnight}, ${alkomohol}, ${bringins || null}, ${notes || null})
      RETURNING *;
    `;

    return NextResponse.json(rows[0], { status: 201 }); // Return the newly created guest
  } catch (error) {
    console.error('Error adding guest: ', error);
    return NextResponse.json({ error: 'Failed to add declaration' }, { status: 500 });
  }
}
