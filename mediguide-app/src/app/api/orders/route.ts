import { NextResponse } from 'next/server';
import sql from '@/lib/db';

// POST: Save a new order checkout
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { items, subtotal, deliveryFee, grandTotal } = body;

    if (!items || items.length === 0) {
      return NextResponse.json({ error: 'Order must contain items.' }, { status: 400 });
    }

    // Insert order into Supabase orders table
    const result = await sql`
      INSERT INTO orders (
        items, subtotal, delivery_fee, grand_total, status
      ) VALUES (
        ${JSON.stringify(items)}, 
        ${subtotal}, 
        ${deliveryFee}, 
        ${grandTotal}, 
        'Pending'
      ) RETURNING id, status, created_at as "createdAt"
    `;

    return NextResponse.json({
      status: 'success',
      message: 'Order successfully registered in database!',
      orderId: result[0]?.id,
      orderStatus: result[0]?.status,
      createdAt: result[0]?.createdAt
    });

  } catch (error: any) {
    console.error('❌ Failed to save order in database:', error);
    return NextResponse.json({
      error: 'Failed to record order checkout.',
      details: error.message
    }, { status: 500 });
  }
}

// GET: Retrieve all past orders
export async function GET() {
  try {
    const orders = await sql`
      SELECT 
        id, 
        items, 
        subtotal, 
        delivery_fee as "deliveryFee", 
        grand_total as "grandTotal", 
        status, 
        created_at as "createdAt"
      FROM orders 
      ORDER BY id DESC
    `;
    
    return NextResponse.json(orders);
  } catch (error: any) {
    console.error('❌ Failed to retrieve orders from Supabase:', error);
    return NextResponse.json({
      error: 'Failed to query historical orders.',
      details: error.message
    }, { status: 500 });
  }
}
