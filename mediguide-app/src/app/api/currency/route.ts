import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('https://v6.exchangerate-api.com/v6/d2b3e90af4dd03474464ea1b/latest/USD');
    if (!res.ok) {
      throw new Error(`Failed to fetch from ExchangeRate-API: ${res.statusText}`);
    }
    const data = await res.json();
    if (data && data.result === 'success' && data.conversion_rates && typeof data.conversion_rates.PKR === 'number') {
      return NextResponse.json({ rate: data.conversion_rates.PKR });
    }
    throw new Error('Invalid rate response data');
  } catch (error: unknown) {
    console.error('❌ Failed to fetch conversion rates:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({
      error: 'Failed to fetch currency rates, using fallback.',
      details: errorMessage,
      rate: 279.0252
    }, { status: 200 }); // Return status 200 with fallback to prevent client crash
  }
}
