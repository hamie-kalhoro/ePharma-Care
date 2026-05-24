import { NextResponse } from 'next/server';
import { signJwt, verifyJwt } from '@/lib/jwt';

// Mock credentials registry for Secure Roles
const ROLE_CREDENTIALS: Record<string, string> = {
  'admin': 'admin123',
  'doctor': 'doctor123',
  'pharmacist': 'pharmacist123',
  'patient': 'patient123',
  'ai-assistant': 'clinical123'
};

const ROLE_NAMES: Record<string, string> = {
  admin: 'System Admin',
  doctor: 'Dr. Sterling',
  pharmacist: 'Nadia Khan',
  patient: 'Elena Rostova',
  'ai-assistant': 'AI Support Agent',
};

// POST: Handles Role Login & Token Verification
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action, role, passkey, token } = body;

    // Sub-Action: Issue a new JWT Token upon successful credential match
    if (action === 'login') {
      if (!role || !passkey) {
        return NextResponse.json({ error: 'Role and passkey are required.' }, { status: 400 });
      }

      const normalizedRole = role.toLowerCase();
      const expectedPasskey = ROLE_CREDENTIALS[normalizedRole];

      if (expectedPasskey && passkey === expectedPasskey) {
        // Sign secure JWT token
        const userToken = signJwt({
          role: normalizedRole,
          name: ROLE_NAMES[normalizedRole] || 'MediGuide User'
        });

        return NextResponse.json({
          status: 'success',
          message: 'Access Granted! Secure JWT Issued.',
          token: userToken,
          user: {
            role: normalizedRole,
            name: ROLE_NAMES[normalizedRole] || 'MediGuide User'
          }
        });
      }

      return NextResponse.json({ error: 'Access Denied. Invalid clinical passkey.' }, { status: 401 });
    }

    // Sub-Action: Validate an existing JWT token
    if (action === 'verify') {
      if (!token) {
        return NextResponse.json({ error: 'Verification token is required.' }, { status: 400 });
      }

      const decoded = verifyJwt(token);
      if (decoded) {
        return NextResponse.json({
          status: 'success',
          message: 'Active session is verified and valid.',
          user: {
            role: decoded.role,
            name: decoded.name
          }
        });
      }

      return NextResponse.json({ error: 'Session expired or token invalid.' }, { status: 401 });
    }

    return NextResponse.json({ error: 'Invalid auth action.' }, { status: 400 });

  } catch (error: any) {
    console.error('❌ Authentication Endpoint Error:', error);
    return NextResponse.json({
      error: 'Authentication failed.',
      details: error.message
    }, { status: 500 });
  }
}
