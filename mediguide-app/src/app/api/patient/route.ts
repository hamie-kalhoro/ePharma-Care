import { NextResponse } from 'next/server';
import sql from '@/lib/db';

export async function GET() {
  try {
    // Query the latest patient vitals record
    const result = await sql`
      SELECT 
        id, 
        systolic, 
        diastolic, 
        glucose, 
        refill_days_left as "refillDaysLeft", 
        medications 
      FROM patient_vitals 
      ORDER BY id DESC 
      LIMIT 1
    `;
    
    const vitals = result[0];
    
    // Safeguard values with proper fallbacks
    const systolic = vitals?.systolic ?? 118;
    const diastolic = vitals?.diastolic ?? 76;
    const glucose = vitals?.glucose ?? 92;
    const refillDaysLeft = vitals?.refillDaysLeft ?? 4;
    
    return NextResponse.json({
      status: 'success',
      data: {
        patient: {
          id: 'PT-884-2A',
          name: 'Elena Rostova',
          age: 42,
          vitals: {
            bloodPressure: {
              systolic,
              diastolic,
              status: systolic < 120 && diastolic < 80 ? 'Optimal' : 'Elevated',
              trend: 'down',
              history: [
                { day: 'Mon', sys: 120, dia: 80 },
                { day: 'Tue', sys: 122, dia: 82 },
                { day: 'Wed', sys: 118, dia: 78 },
                { day: 'Thu', sys: 121, dia: 79 },
                { day: 'Fri', sys: 115, dia: 75 },
                { day: 'Sat', sys: 119, dia: 77 },
                { day: 'Sun', sys: systolic, dia: diastolic }
              ]
            },
            glucose: {
              value: glucose,
              unit: 'mg/dL',
              status: glucose < 100 ? 'In Range' : 'High',
              type: 'Fasting Reading'
            }
          },
          medications: [
            {
              id: 'MED-1',
              name: 'Metformin',
              dosage: '500mg',
              status: 'missed',
              time: '8:00 AM'
            },
            {
              id: 'MED-2',
              name: 'Lisinopril',
              dosage: '10mg',
              status: 'pending',
              time: '1:00 PM',
              instructions: 'With food',
              refillDaysLeft: refillDaysLeft
            },
            {
              id: 'MED-3',
              name: 'Atorvastatin',
              dosage: '20mg',
              status: 'taken',
              time: '7:30 AM'
            }
          ]
        }
      }
    });

  } catch (error: any) {
    console.error('❌ Failed to fetch patient vitals from Supabase:', error);
    return NextResponse.json({
      error: 'Failed to retrieve patient vitals.',
      details: error.message
    }, { status: 500 });
  }
}
