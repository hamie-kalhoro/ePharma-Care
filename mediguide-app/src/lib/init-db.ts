import sql from './db';

// Premium Unsplash Catalog to Seed
const INITIAL_PRODUCTS = [
  {
    name: 'Panadol Advance 500mg (100 Tabs)',
    category: 'Medicine',
    price: 250,
    original_price: 280,
    discount: 11,
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=400&auto=format&fit=crop',
    rating: 4.8,
    reviews: 124,
    ingredients: 'Paracetamol 500mg',
    usage: 'For mild to moderate pain and fever relief. Take 1-2 tablets every 4 to 6 hours as needed.',
    warnings: 'Do not exceed 8 tablets in 24 hours. Avoid other products containing paracetamol.'
  },
  {
    name: 'Ensure Plus Vanilla Liquid 200ml',
    category: 'Nutritions',
    price: 650,
    original_price: 700,
    discount: 7,
    image: 'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=400&auto=format&fit=crop',
    rating: 4.5,
    reviews: 89,
    ingredients: 'Vitamins, Minerals, Milk Protein, Essential Fatty Acids',
    usage: 'High-calorie, complete oral nutrition shake. Shake well before drinking. Best served cold.',
    warnings: 'Not suitable for people with galactosemia. Consult medical advisor for children.'
  },
  {
    name: 'Pampers Active Baby Diapers Size 4 (60 Pcs)',
    category: 'Baby Care',
    price: 2800,
    original_price: 3200,
    discount: 12,
    image: 'https://images.unsplash.com/photo-1622290319146-7b63df48a635?q=80&w=400&auto=format&fit=crop',
    rating: 4.9,
    reviews: 342,
    ingredients: 'Super Absorbent Polymer, Breathable Backsheet, Soft Topsheet',
    usage: 'Premium baby diapers offering up to 12 hours of dry protection and flexible fit.',
    warnings: 'Store in dry place. Keep plastic packaging away from infants to avoid suffocation.'
  },
  {
    name: 'CeraVe Moisturizing Cream 340g',
    category: 'Derma',
    price: 4500,
    original_price: 5000,
    discount: 10,
    image: 'https://images.unsplash.com/photo-1608248597481-496100c80836?q=80&w=400&auto=format&fit=crop',
    rating: 4.7,
    reviews: 210,
    ingredients: 'Essential Ceramides, Hyaluronic Acid',
    usage: 'Apply liberally as often as needed, or as directed by a physician.',
    warnings: 'For external use only. Avoid direct contact with eyes.'
  },
  {
    name: 'Surbex Z Tablets (30 Tabs)',
    category: 'Medicine',
    price: 450,
    original_price: 500,
    discount: 10,
    image: 'https://images.unsplash.com/photo-1616679911721-eff6eec18fcd?q=80&w=400&auto=format&fit=crop',
    rating: 4.6,
    reviews: 156,
    ingredients: 'Vitamin B-Complex, Vitamin C, Vitamin E, Zinc 15mg',
    usage: 'Dietary supplement for nutritional deficiencies. Take 1 tablet daily after a meal.',
    warnings: 'Do not exceed recommended daily dose. Keep out of reach of children.'
  },
  {
    name: 'Neutrogena Hydro Boost Water Gel 50ml',
    category: 'Derma',
    price: 3200,
    original_price: 3500,
    discount: 8,
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=400&auto=format&fit=crop',
    rating: 4.8,
    reviews: 420,
    ingredients: 'Hyaluronic Acid, Glycerin, Olive Extract',
    usage: 'Apply evenly to face and neck daily after cleansing.',
    warnings: 'Discontinue use if skin irritation or rash occurs.'
  },
  {
    name: 'Centrum Silver Adults 50+ (100 Tabs)',
    category: 'Nutritions',
    price: 5500,
    original_price: 6200,
    discount: 11,
    image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?q=80&w=400&auto=format&fit=crop',
    rating: 4.9,
    reviews: 85,
    ingredients: 'Lutein, Lycopene, Calcium, Vitamins A to Z',
    usage: 'Multi-vitamin supplement designed for adults 50 years and older. Take 1 tablet daily with food.',
    warnings: 'Consult physician before use if pregnant, nursing, or taking other medications.'
  },
  {
    name: 'Johnson Baby Shampoo 500ml',
    category: 'Baby Care',
    price: 850,
    original_price: 950,
    discount: 10,
    image: 'https://images.unsplash.com/photo-1515488042361-404e9250afef?q=80&w=400&auto=format&fit=crop',
    rating: 4.5,
    reviews: 310,
    ingredients: 'No More Tears Gentle Formula',
    usage: 'Wet baby\'s hair with warm water, apply shampoo, gently lather and rinse.',
    warnings: 'For external use only. Keep out of children\'s reach unless supervised.'
  }
];

export async function initializeDatabase() {
  console.log('🏁 Starting Database Schema Initialization...');

  try {
    // 1. Create Products table
    await sql`
      CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        category VARCHAR(50) NOT NULL,
        price INT NOT NULL,
        original_price INT NOT NULL,
        discount INT NOT NULL,
        image TEXT NOT NULL,
        rating DECIMAL(3, 2) NOT NULL,
        reviews INT NOT NULL,
        ingredients TEXT NOT NULL,
        usage TEXT NOT NULL,
        warnings TEXT NOT NULL
      )
    `;
    console.log('✅ "products" table checked/created.');

    // 2. Create Orders table
    await sql`
      CREATE TABLE IF NOT EXISTS orders (
        id SERIAL PRIMARY KEY,
        items JSONB NOT NULL,
        subtotal INT NOT NULL,
        delivery_fee INT NOT NULL,
        grand_total INT NOT NULL,
        status VARCHAR(50) DEFAULT 'Pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    console.log('✅ "orders" table checked/created.');

    // 3. Create Notifications table
    await sql`
      CREATE TABLE IF NOT EXISTS notifications (
        id SERIAL PRIMARY KEY,
        text TEXT NOT NULL,
        unread BOOLEAN DEFAULT TRUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    console.log('✅ "notifications" table checked/created.');

    // 4. Create Patient Vitals table
    await sql`
      CREATE TABLE IF NOT EXISTS patient_vitals (
        id SERIAL PRIMARY KEY,
        systolic INT NOT NULL,
        diastolic INT NOT NULL,
        glucose INT NOT NULL,
        refill_days_left INT NOT NULL,
        medications JSONB NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    console.log('✅ "patient_vitals" table checked/created.');

    // 4.1 Create healthcare workflow foundation tables
    await sql`
      CREATE TABLE IF NOT EXISTS care_intakes (
        id SERIAL PRIMARY KEY,
        patient_ref VARCHAR(64) NOT NULL,
        symptoms JSONB DEFAULT '[]'::jsonb,
        medical_history JSONB DEFAULT '{}'::jsonb,
        current_medications JSONB DEFAULT '[]'::jsonb,
        allergies JSONB DEFAULT '[]'::jsonb,
        ai_summary JSONB DEFAULT '{}'::jsonb,
        status VARCHAR(50) DEFAULT 'Awaiting Doctor Review',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    console.log('care_intakes table checked/created.');

    await sql`
      CREATE TABLE IF NOT EXISTS medical_reports (
        id SERIAL PRIMARY KEY,
        patient_ref VARCHAR(64) NOT NULL,
        report_type VARCHAR(50) NOT NULL,
        file_url TEXT NOT NULL,
        ai_summary JSONB DEFAULT '{}'::jsonb,
        review_status VARCHAR(50) DEFAULT 'Pending Review',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    console.log('medical_reports table checked/created.');

    await sql`
      CREATE TABLE IF NOT EXISTS prescriptions (
        id SERIAL PRIMARY KEY,
        patient_ref VARCHAR(64) NOT NULL,
        doctor_ref VARCHAR(64),
        status VARCHAR(50) DEFAULT 'Draft',
        items JSONB DEFAULT '[]'::jsonb,
        counselling_notes TEXT,
        qr_hash VARCHAR(255),
        signed_at TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    console.log('prescriptions table checked/created.');

    await sql`
      CREATE TABLE IF NOT EXISTS audit_logs (
        id SERIAL PRIMARY KEY,
        actor_ref VARCHAR(64),
        action VARCHAR(100) NOT NULL,
        entity_type VARCHAR(80) NOT NULL,
        entity_ref VARCHAR(80),
        reason TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    console.log('audit_logs table checked/created.');

    // 4.5 Create Subscribers table
    await sql`
      CREATE TABLE IF NOT EXISTS subscribers (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    console.log('✅ "subscribers" table checked/created.');

    // 5. Seed Products if empty
    const productCountResult = await sql`SELECT COUNT(*)::int as count FROM products`;
    const productCount = productCountResult[0]?.count || 0;

    if (productCount === 0) {
      console.log('🌱 Seeding initial product catalog...');
      for (const p of INITIAL_PRODUCTS) {
        await sql`
          INSERT INTO products (
            name, category, price, original_price, discount, image, rating, reviews, ingredients, usage, warnings
          ) VALUES (
            ${p.name}, ${p.category}, ${p.price}, ${p.original_price}, ${p.discount}, ${p.image}, ${p.rating}, ${p.reviews}, ${p.ingredients}, ${p.usage}, ${p.warnings}
          )
        `;
      }
      console.log('✅ Seeding products catalog completed successfully!');
    } else {
      console.log(`ℹ️ Products catalog already seeded (${productCount} items existing).`);
    }

    // 6. Seed Notifications if empty
    const notifCountResult = await sql`SELECT COUNT(*)::int as count FROM notifications`;
    const notifCount = notifCountResult[0]?.count || 0;

    if (notifCount === 0) {
      console.log('🌱 Seeding initial system notifications...');
      const initialNotifs = [
        { text: '🚀 Superfast Delivery: Orders delivered in 60 mins!', unread: true },
        { text: '📦 Order Ref #RX-88492 (Lisinopril) has been verified.', unread: true },
        { text: '💊 Special Offer: 15% discount applied automatically on prescriptions.', unread: false }
      ];
      for (const n of initialNotifs) {
        await sql`
          INSERT INTO notifications (text, unread) VALUES (${n.text}, ${n.unread})
        `;
      }
      console.log('✅ Seeding notifications completed.');
    }

    // 7. Seed Patient Vitals if empty
    const vitalsCountResult = await sql`SELECT COUNT(*)::int as count FROM patient_vitals`;
    const vitalsCount = vitalsCountResult[0]?.count || 0;

    if (vitalsCount === 0) {
      console.log('🌱 Seeding clinical patient vital statistics...');
      const defaultMeds = [
        { name: 'Metformin (500mg)', time: 'Missed 8:00 AM dose', missed: true, key: 1 },
        { name: 'Lisinopril (10mg)', time: '1:00 PM • With food', missed: false, key: 2 }
      ];
      await sql`
        INSERT INTO patient_vitals (
          systolic, diastolic, glucose, refill_days_left, medications
        ) VALUES (
          118, 76, 92, 4, ${JSON.stringify(defaultMeds)}
        )
      `;
      console.log('✅ Seeding patient vitals completed.');
    }

    console.log('🎉 Database Schema & Seed Data successfully initialized on Supabase!');
    return { success: true, message: 'Database schema & seeds fully initialized.' };

  } catch (error: any) {
    console.error('❌ Database Initialization Failed:', error);
    return { success: false, error: error.message || error };
  }
}
