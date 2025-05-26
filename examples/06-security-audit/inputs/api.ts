import express from 'express';
import { AuthService } from './auth';
import { DatabaseService } from './database';

const app = express();
const authService = new AuthService();
const dbService = new DatabaseService();

// No CORS configuration
app.use(express.json());

// No input sanitization
app.post('/api/users', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await authService.register(username, password);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// No rate limiting
app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const token = await authService.login(username, password);
    res.json({ token });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

// No proper authentication middleware
app.get('/api/users/:id', async (req, res) => {
  try {
    const user = await dbService.getUser(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// No input validation
app.post('/api/products', async (req, res) => {
  try {
    const product = await dbService.createProduct(req.body);
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// No proper error handling
app.get('/api/products', async (req, res) => {
  const products = await dbService.getProducts();
  res.json(products);
});

// No proper authorization
app.delete('/api/products/:id', async (req, res) => {
  try {
    await dbService.deleteProduct(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// No proper logging
app.listen(3000, () => {
  console.log('Server running on port 3000');
}); 