import { NextResponse } from 'next/server';
import sql from '@/lib/db';

// GET: Retrieve all alerts
export async function GET() {
  try {
    const notifications = await sql`
      SELECT 
        id, 
        text, 
        unread, 
        created_at as "createdAt"
      FROM notifications 
      ORDER BY id DESC
    `;
    
    return NextResponse.json(notifications);
  } catch (error: any) {
    console.error('❌ Failed to fetch notifications from Supabase:', error);
    return NextResponse.json({
      error: 'Failed to retrieve notifications feed.',
      details: error.message
    }, { status: 500 });
  }
}

// POST: Manage notification status
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action, text } = body;

    // Action: Mark all notifications as read
    if (action === 'markAllRead') {
      await sql`
        UPDATE notifications 
        SET unread = FALSE
      `;
      return NextResponse.json({ status: 'success', message: 'All notifications marked as read.' });
    }

    // Action: Insert a new notification
    if (text) {
      const result = await sql`
        INSERT INTO notifications (
          text, unread
        ) VALUES (
          ${text}, TRUE
        ) RETURNING id, text, unread, created_at as "createdAt"
      `;
      return NextResponse.json({
        status: 'success',
        notification: result[0]
      });
    }

    return NextResponse.json({ error: 'Invalid action or parameters.' }, { status: 400 });

  } catch (error: any) {
    console.error('❌ Failed to update notifications in Supabase:', error);
    return NextResponse.json({
      error: 'Failed to modify notifications state.',
      details: error.message
    }, { status: 500 });
  }
}
