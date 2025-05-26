import express from 'express';
import { DatabaseService } from './database';
import { CacheService } from './cache';

const app = express();
const dbService = new DatabaseService();
const cacheService = new CacheService();

// No request timeout
app.use(express.json());

// Inefficient data loading
app.get('/api/products', async (req, res) => {
  try {
    // Loading all products without pagination
    const products = await dbService.getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// N+1 query problem
app.get('/api/orders', async (req, res) => {
  try {
    const orders = await dbService.getOrders();
    // Loading customer data for each order separately
    const ordersWithCustomers = await Promise.all(
      orders.map(async (order) => ({
        ...order,
        customer: await dbService.getCustomer(order.customerId)
      }))
    );
    res.json(ordersWithCustomers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Inefficient search
app.get('/api/products/search', async (req, res) => {
  try {
    const { query } = req.query;
    // Loading all products and filtering in memory
    const products = await dbService.getAllProducts();
    const filteredProducts = products.filter(p => 
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase())
    );
    res.json(filteredProducts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// No caching
app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await dbService.getProduct(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Inefficient data processing
app.post('/api/orders', async (req, res) => {
  try {
    const order = req.body;
    // Processing each item sequentially
    for (const item of order.items) {
      await dbService.updateStock(item.productId, item.quantity);
    }
    const newOrder = await dbService.createOrder(order);
    res.json(newOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Memory leak potential
app.get('/api/analytics', async (req, res) => {
  try {
    const data = await dbService.getAnalytics();
    // Storing large dataset in memory
    const processedData = data.map(item => ({
      ...item,
      calculated: complexCalculation(item)
    }));
    res.json(processedData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// No proper error handling
app.listen(3000, () => {
  console.log('Server running on port 3000');
}); 