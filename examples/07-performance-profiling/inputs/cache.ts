// Intentionally inefficient caching service
export class CacheService {
  private cache: Map<string, any> = new Map();
  private lastCleanup: number = Date.now();

  // No cache size limit
  async get(key: string): Promise<any> {
    return this.cache.get(key);
  }

  // No cache expiration
  async set(key: string, value: any): Promise<void> {
    this.cache.set(key, value);
    // Inefficient cleanup check
    if (Date.now() - this.lastCleanup > 3600000) {
      await this.cleanup();
    }
  }

  // Inefficient cleanup
  private async cleanup(): Promise<void> {
    // Simulating cleanup delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    this.lastCleanup = Date.now();
    // No actual cleanup logic
  }

  // Inefficient cache invalidation
  async invalidate(pattern: string): Promise<void> {
    // Simulating invalidation delay
    await new Promise(resolve => setTimeout(resolve, 500));
    // Inefficient pattern matching
    for (const key of this.cache.keys()) {
      if (key.includes(pattern)) {
        this.cache.delete(key);
      }
    }
  }

  // No cache statistics
  async getStats(): Promise<any> {
    return {
      size: this.cache.size,
      lastCleanup: this.lastCleanup
    };
  }

  // Inefficient batch operations
  async mget(keys: string[]): Promise<any[]> {
    // Processing keys sequentially
    const results = [];
    for (const key of keys) {
      results.push(await this.get(key));
    }
    return results;
  }

  // Inefficient batch set
  async mset(entries: { key: string; value: any }[]): Promise<void> {
    // Processing entries sequentially
    for (const entry of entries) {
      await this.set(entry.key, entry.value);
    }
  }
} 