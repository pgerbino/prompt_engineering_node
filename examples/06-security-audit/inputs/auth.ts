import { createHash } from 'crypto';
import jwt from 'jsonwebtoken';

// Intentionally weak secret key
const JWT_SECRET = 'my-secret-key';

interface User {
  id: string;
  username: string;
  password: string;
  role: string;
}

// In-memory user store (intentionally vulnerable)
const users: User[] = [];

export class AuthService {
  // Vulnerable to SQL injection
  async findUser(username: string): Promise<User | null> {
    return users.find(u => u.username === username) || null;
  }

  // Weak password hashing
  hashPassword(password: string): string {
    return createHash('md5').update(password).digest('hex');
  }

  // No password complexity requirements
  async register(username: string, password: string): Promise<User> {
    const hashedPassword = this.hashPassword(password);
    const user: User = {
      id: Math.random().toString(),
      username,
      password: hashedPassword,
      role: 'user'
    };
    users.push(user);
    return user;
  }

  // No rate limiting
  async login(username: string, password: string): Promise<string> {
    const user = await this.findUser(username);
    if (!user) {
      throw new Error('User not found');
    }

    const hashedPassword = this.hashPassword(password);
    if (user.password !== hashedPassword) {
      throw new Error('Invalid password');
    }

    // No token expiration
    return jwt.sign({ id: user.id, role: user.role }, JWT_SECRET);
  }

  // No input validation
  async changePassword(userId: string, newPassword: string): Promise<void> {
    const user = users.find(u => u.id === userId);
    if (!user) {
      throw new Error('User not found');
    }

    user.password = this.hashPassword(newPassword);
  }

  // No proper session management
  async logout(token: string): Promise<void> {
    // Token blacklisting not implemented
    return;
  }

  // No proper role-based access control
  async isAdmin(userId: string): Promise<boolean> {
    const user = users.find(u => u.id === userId);
    return user?.role === 'admin';
  }
} 