import crypto from 'crypto';

// Secret Key to Sign Tokens securely
const JWT_SECRET = process.env.JWT_SECRET || 'mediguide-super-secure-token-signing-secret-key-998877';

/**
 * Signs a payload into a secure HMAC SHA256 JSON Web Token (JWT)
 */
export function signJwt(payload: object, expiresInMinutes = 60): string {
  const header = { alg: 'HS256', typ: 'JWT' };
  const base64Header = Buffer.from(JSON.stringify(header)).toString('base64url');
  
  const payloadWithExpiry = {
    ...payload,
    exp: Math.floor(Date.now() / 1000) + (expiresInMinutes * 60)
  };
  const base64Payload = Buffer.from(JSON.stringify(payloadWithExpiry)).toString('base64url');
  
  const signatureInput = `${base64Header}.${base64Payload}`;
  const signature = crypto
    .createHmac('sha256', JWT_SECRET)
    .update(signatureInput)
    .digest('base64url');
    
  return `${signatureInput}.${signature}`;
}

/**
 * Verifies a JSON Web Token (JWT) and returns the decrypted payload or null
 */
export function verifyJwt(token: string): any {
  try {
    const [base64Header, base64Payload, signature] = token.split('.');
    if (!base64Header || !base64Payload || !signature) {
      return null;
    }
    
    const signatureInput = `${base64Header}.${base64Payload}`;
    const expectedSignature = crypto
      .createHmac('sha256', JWT_SECRET)
      .update(signatureInput)
      .digest('base64url');
      
    if (signature !== expectedSignature) {
      return null;
    }
    
    const payloadJson = Buffer.from(base64Payload, 'base64url').toString('utf8');
    const payload = JSON.parse(payloadJson);
    
    // Check expiration timestamp
    if (payload.exp && Math.floor(Date.now() / 1000) > payload.exp) {
      console.log('⚠️ JWT Token has expired.');
      return null;
    }
    
    return payload;
  } catch (error) {
    console.error('❌ JWT Verification Failed:', error);
    return null;
  }
}
