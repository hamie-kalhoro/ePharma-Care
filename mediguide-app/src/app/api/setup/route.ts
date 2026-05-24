import { NextResponse } from 'next/server';
import { initializeDatabase } from '@/lib/init-db';

export async function GET() {
  console.log('🔌 GET request received at /api/setup');
  const result = await initializeDatabase();
  
  if (result.success) {
    return NextResponse.json({
      status: 'success',
      message: 'MediGuide Supabase Database initialized successfully!',
      details: result.message
    });
  } else {
    return NextResponse.json({
      status: 'error',
      message: 'Database schema setup encountered an error.',
      error: result.error
    }, { status: 500 });
  }
}
