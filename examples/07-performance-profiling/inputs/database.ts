// Intentionally inefficient database service
export class DatabaseService {
  private products: any[] = [];
  private orders: any[] = [];
  private customers: any[] = [];
  private analytics: any[] = [];

  // Inefficient query - loading all data
  async getAllProducts(): Promise<any[]> {
    // Simulating database delay
    await new Promise(resolve => setTimeout(resolve, 100));
    return this.products;
  }

  // No indexing simulation
  async getProduct(id: string): Promise<any> {
    // Simulating database delay
    await new Promise(resolve => setTimeout(resolve, 50));
    return this.products.find(p => p.id === id);
  }

  // N+1 query problem
  async getOrders(): Promise<any[]> {
    // Simulating database delay
    await new Promise(resolve => setTimeout(resolve, 100));
    return this.orders;
  }

  // Inefficient customer lookup
  async getCustomer(id: string): Promise<any> {
    // Simulating database delay
    await new Promise(resolve => setTimeout(resolve, 50));
    return this.customers.find(c => c.id === id);
  }

  // Inefficient stock update
  async updateStock(productId: string, quantity: number): Promise<void> {
    // Simulating database delay
    await new Promise(resolve => setTimeout(resolve, 50));
    const product = this.products.find(p => p.id === productId);
    if (product) {
      product.stock -= quantity;
    }
  }

  // Inefficient order creation
  async createOrder(order: any): Promise<any> {
    // Simulating database delay
    await new Promise(resolve => setTimeout(resolve, 100));
    this.orders.push(order);
    return order;
  }

  // Inefficient analytics query
  async getAnalytics(): Promise<any[]> {
    // Simulating database delay
    await new Promise(resolve => setTimeout(resolve, 200));
    return this.analytics;
  }

  // Inefficient search
  async searchProducts(query: string): Promise<any[]> {
    // Simulating database delay
    await new Promise(resolve => setTimeout(resolve, 100));
    return this.products.filter(p => 
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase())
    );
  }

  // Inefficient batch operation
  async updateProductPrices(updates: { id: string; price: number }[]): Promise<void> {
    // Processing updates sequentially
    for (const update of updates) {
      await new Promise(resolve => setTimeout(resolve, 50));
      const product = this.products.find(p => p.id === update.id);
      if (product) {
        product.price = update.price;
      }
    }
  }
} 