import jwt, { JwtPayload } from 'jsonwebtoken';
export const isTokenExpired = (token: string): boolean => {
  try {
    // Extract the token part from the "Bearer <token>" string
    const tokenPart = token.split(' ')[1];
    const decoded = jwt.decode(tokenPart) as JwtPayload | null;
    if (!decoded || !decoded.exp) {
      return true; // Token or expiration claim not found, consider it expired
    }
    const expirationTime = decoded.exp * 1000; // Convert seconds to milliseconds
    const currentTime = Date.now();
    return expirationTime < currentTime; // True if token is expired, false otherwise
  } catch (error) {
    return true; // Error decoding token, consider it expired
  }
};
