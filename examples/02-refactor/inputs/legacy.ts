// Legacy code with common issues
class UserManager {
  private users = [];
  private config = {
    maxUsers: 100,
    defaultRole: 'user',
    allowedRoles: ['user', 'admin', 'moderator']
  };

  constructor() {
    this.users = [];
  }

  addUser(name, email, role) {
    if (this.users.length >= this.config.maxUsers) {
      throw new Error('Too many users');
    }

    if (!this.config.allowedRoles.includes(role)) {
      throw new Error('Invalid role');
    }

    const user = {
      id: this.users.length + 1,
      name: name,
      email: email,
      role: role,
      createdAt: new Date(),
      isActive: true
    };

    this.users.push(user);
    return user;
  }

  findUser(id) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id === id) {
        return this.users[i];
      }
    }
    return null;
  }

  updateUser(id, data) {
    const user = this.findUser(id);
    if (!user) {
      throw new Error('User not found');
    }

    if (data.role && !this.config.allowedRoles.includes(data.role)) {
      throw new Error('Invalid role');
    }

    Object.assign(user, data);
    return user;
  }

  deleteUser(id) {
    const index = this.users.findIndex(u => u.id === id);
    if (index === -1) {
      throw new Error('User not found');
    }

    this.users.splice(index, 1);
    return true;
  }

  getUsers() {
    return this.users;
  }

  getActiveUsers() {
    const active = [];
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].isActive) {
        active.push(this.users[i]);
      }
    }
    return active;
  }

  getUsersByRole(role) {
    if (!this.config.allowedRoles.includes(role)) {
      throw new Error('Invalid role');
    }

    const users = [];
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].role === role) {
        users.push(this.users[i]);
      }
    }
    return users;
  }
}

// Usage example
const manager = new UserManager();

try {
  manager.addUser('John Doe', 'john@example.com', 'user');
  manager.addUser('Jane Admin', 'jane@example.com', 'admin');
  
  const users = manager.getUsers();
  console.log('All users:', users);
  
  const activeUsers = manager.getActiveUsers();
  console.log('Active users:', activeUsers);
  
  const admins = manager.getUsersByRole('admin');
  console.log('Admins:', admins);
} catch (error) {
  console.error('Error:', error.message);
} 