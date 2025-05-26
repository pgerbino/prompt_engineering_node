// Intentionally vulnerable database service
export class DatabaseService {
  private products: any[] = [];
  private users: any[] = [];

  // SQL injection vulnerability
  async getUser(id: string): Promise<any> {
    return this.users.find(u => u.id === id);
  }

  // No input validation
  async createProduct(product: any): Promise<any> {
    this.products.push(product);
    return product;
  }

  // No proper error handling
  async getProducts(): Promise<any[]> {
    return this.products;
  }

  // No proper authorization check
  async deleteProduct(id: string): Promise<void> {
    const index = this.products.findIndex(p => p.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  // No proper data sanitization
  async searchProducts(query: string): Promise<any[]> {
    return this.products.filter(p => 
      JSON.stringify(p).toLowerCase().includes(query.toLowerCase())
    );
  }

  // No proper transaction handling
  async updateProduct(id: string, updates: any): Promise<any> {
    const product = this.products.find(p => p.id === id);
    if (product) {
      Object.assign(product, updates);
    }
    return product;
  }

  // No proper data validation
  async createUser(user: any): Promise<any> {
    this.users.push(user);
    return user;
  }

  // No proper error handling
  async updateUser(id: string, updates: any): Promise<any> {
    const user = this.users.find(u => u.id === id);
    if (user) {
      Object.assign(user, updates);
    }
    return user;
  }
} 