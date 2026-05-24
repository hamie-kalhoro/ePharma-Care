import { NextResponse } from 'next/server';
import sql from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    // 1. Basic validation
    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email address is required.' }, { status: 400 });
    }

    const trimmedEmail = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    // 2. Check duplicate subscriber in Database
    const existing = await sql`
      SELECT id FROM subscribers WHERE email = ${trimmedEmail}
    `;

    if (existing.length > 0) {
      return NextResponse.json({ 
        error: 'You are already subscribed to our mailing list!' 
      }, { status: 400 });
    }

    // 3. Insert subscriber
    await sql`
      INSERT INTO subscribers (email) VALUES (${trimmedEmail})
    `;

    return NextResponse.json({
      status: 'success',
      message: 'Thank you for subscribing to the MediGuide mailing list!'
    });

  } catch (error: any) {
    console.error('❌ Failed to save subscriber email in database:', error);
    return NextResponse.json({
      error: 'Failed to process your subscription. Please try again later.',
      details: error.message
    }, { status: 500 });
  }
}
