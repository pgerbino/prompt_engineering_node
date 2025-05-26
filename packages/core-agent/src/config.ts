import { config } from 'dotenv';
import { resolve } from 'path';

export function loadEnv() {
  const result = config({
    path: resolve(process.cwd(), '.env')
  });

  if (result.error) {
    throw new Error('Error loading .env file. Please ensure it exists and contains OPENAI_API_KEY');
  }

  if (!process.env.OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY is required in .env file');
  }
} 