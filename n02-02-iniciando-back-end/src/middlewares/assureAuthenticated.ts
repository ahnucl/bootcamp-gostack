import { Request, Response, NextFunction } from 'express';
import authConfig from '../config/auth';

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error('JWT missing.');
  }

  const token = authHeader.split(' ')[1];
}
