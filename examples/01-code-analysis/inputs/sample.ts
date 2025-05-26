interface User {
  id: string;
  name: string;
  email: string;
  preferences: UserPreferences;
}

interface UserPreferences {
  theme: 'light' | 'dark';
  notifications: boolean;
  language: string;
}

class UserService {
  private users: Map<string, User> = new Map();

  constructor() {
    // Initialize with some sample data
    this.users.set('1', {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      preferences: {
        theme: 'light',
        notifications: true,
        language: 'en'
      }
    });
  }

  async getUser(id: string): Promise<User | null> {
    return this.users.get(id) || null;
  }

  async updateUser(id: string, updates: Partial<User>): Promise<User | null> {
    const user = await this.getUser(id);
    if (!user) return null;

    const updatedUser = { ...user, ...updates };
    this.users.set(id, updatedUser);
    return updatedUser;
  }

  async deleteUser(id: string): Promise<boolean> {
    return this.users.delete(id);
  }

  async listUsers(): Promise<User[]> {
    return Array.from(this.users.values());
  }
}

// Example usage
async function main() {
  const userService = new UserService();
  
  // Get all users
  const users = await userService.listUsers();
  console.log('Users:', users);

  // Update a user
  const updatedUser = await userService.updateUser('1', {
    name: 'John Updated',
    preferences: {
      theme: 'dark',
      notifications: false,
      language: 'es'
    }
  });
  console.log('Updated user:', updatedUser);
}

main().catch(console.error); 