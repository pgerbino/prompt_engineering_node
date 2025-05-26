// A simple calculator implementation with basic operations
export class Calculator {
  private memory: number = 0;

  // Basic arithmetic operations
  add(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }

  multiply(a: number, b: number): number {
    return a * b;
  }

  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Division by zero is not allowed');
    }
    return a / b;
  }

  // Memory operations
  setMemory(value: number): void {
    this.memory = value;
  }

  getMemory(): number {
    return this.memory;
  }

  addToMemory(value: number): void {
    this.memory += value;
  }

  subtractFromMemory(value: number): void {
    this.memory -= value;
  }

  clearMemory(): void {
    this.memory = 0;
  }

  // Advanced operations
  power(base: number, exponent: number): number {
    if (exponent < 0) {
      throw new Error('Negative exponents are not supported');
    }
    return Math.pow(base, exponent);
  }

  squareRoot(value: number): number {
    if (value < 0) {
      throw new Error('Cannot calculate square root of negative number');
    }
    return Math.sqrt(value);
  }

  // Utility functions
  isPrime(num: number): boolean {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }

  factorial(n: number): number {
    if (n < 0) {
      throw new Error('Factorial is not defined for negative numbers');
    }
    if (n === 0 || n === 1) return 1;
    return n * this.factorial(n - 1);
  }
} 