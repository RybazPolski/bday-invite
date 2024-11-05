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
    const { guestNickname, inviteAccepted, questAccepted, lasertagAccepted, overnight, alkomohol, bringIns, notes } = body;

    // console.log("nick", guestNickname);
    // console.log("invite", inviteAccepted);
    // console.log("quest", questAccepted);
    // console.log("laser", lasertagAccepted);
    // console.log("overnight", overnight);
    // console.log("alkomohol", alkomohol);
    // console.log("bringins", bringins);
    // console.log("notes", notes);

    if (
        guestNickname === undefined || guestNickname === null ||
        inviteAccepted === undefined || inviteAccepted === null ||
        questAccepted === undefined || questAccepted === null ||
        lasertagAccepted === undefined || lasertagAccepted === null ||
        overnight === undefined || overnight === null ||
        alkomohol === undefined || alkomohol === null
      ) {
        return NextResponse.json({ error: 'All fields except bringins and notes are required.' }, { status: 400 });
      }

    const { rows } = await sql`
      INSERT INTO declarations (guestnickname, inviteaccepted, questaccepted, lasertagaccepted, overnight, alkomohol, bringins, notes)
      VALUES (${guestNickname}, ${inviteAccepted}, ${questAccepted}, ${lasertagAccepted}, ${overnight}, ${alkomohol}, ${bringIns || null}, ${notes || null})
      RETURNING *;
    `;

    return NextResponse.json(rows[0], { status: 201 }); // Return the newly created guest
  } catch (error) {
    console.error('Error adding guest: ', error);
    return NextResponse.json({ error: 'Failed to add declaration' }, { status: 500 });
  }
}

