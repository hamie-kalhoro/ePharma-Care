import { NextResponse } from 'next/server';
import sql from '@/lib/db';

export async function GET() {
  try {
    // Fetch products sorted by id
    const products = await sql`
      SELECT 
        id, 
        name, 
        category, 
        price, 
        original_price as "originalPrice", 
        discount, 
        image, 
        rating::float as rating, 
        reviews, 
        ingredients, 
        usage, 
        warnings 
      FROM products 
      ORDER BY id ASC
    `;
    
    return NextResponse.json(products);
  } catch (error: any) {
    console.error('❌ Failed to fetch products from Supabase:', error);
    return NextResponse.json({
      error: 'Failed to retrieve products from live database.',
      details: error.message
    }, { status: 500 });
  }
}
