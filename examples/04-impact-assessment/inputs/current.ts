// Current implementation of a simple e-commerce system

interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
  category: string;
}

interface Cart {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
}

interface CartItem {
  productId: string;
  quantity: number;
  price: number;
}

class ProductService {
  private products: Map<string, Product> = new Map();

  constructor() {
    // Initialize with sample data
    this.products.set('1', {
      id: '1',
      name: 'Laptop',
      price: 999.99,
      stock: 10,
      category: 'Electronics'
    });
  }

  getProduct(id: string): Product | null {
    return this.products.get(id) || null;
  }

  updateStock(id: string, quantity: number): boolean {
    const product = this.products.get(id);
    if (!product) return false;

    if (product.stock + quantity < 0) return false;
    product.stock += quantity;
    return true;
  }
}

class CartService {
  private carts: Map<string, Cart> = new Map();
  private productService: ProductService;

  constructor(productService: ProductService) {
    this.productService = productService;
  }

  createCart(userId: string): Cart {
    const cart: Cart = {
      id: Math.random().toString(36).substr(2, 9),
      userId,
      items: [],
      total: 0
    };
    this.carts.set(cart.id, cart);
    return cart;
  }

  addToCart(cartId: string, productId: string, quantity: number): boolean {
    const cart = this.carts.get(cartId);
    if (!cart) return false;

    const product = this.productService.getProduct(productId);
    if (!product) return false;

    if (product.stock < quantity) return false;

    const existingItem = cart.items.find(item => item.productId === productId);
    if (existingItem) {
      existingItem.quantity += quantity;
      existingItem.price = product.price * existingItem.quantity;
    } else {
      cart.items.push({
        productId,
        quantity,
        price: product.price * quantity
      });
    }

    this.updateCartTotal(cart);
    return true;
  }

  private updateCartTotal(cart: Cart): void {
    cart.total = cart.items.reduce((sum, item) => sum + item.price, 0);
  }
}

// Usage example
const productService = new ProductService();
const cartService = new CartService(productService);

// Create a cart for a user
const cart = cartService.createCart('user123');

// Add items to cart
cartService.addToCart(cart.id, '1', 2); 