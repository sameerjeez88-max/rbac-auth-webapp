/**
 * @project JWT Auth & RBAC Web App
 * @author Rana Yasir Mahy Ud Din (https://ranayasir.unaux.com/)
 */

// In-memory users database (Preloaded with Admin and Customer test accounts)
// Passwords hashed using bcryptjs (Password for both: 'password123')
const users = [
  {
    id: 1,
    name: 'Admin Master',
    email: 'admin@fastekdot.com',
    passwordHash: '$2a$10$X7vQ4Q2W2qQ9Z2xQ9Z2xQe8Z2xQ9Z2xQ9Z2xQ9Z2xQ9Z2xQ9Z2xQ9', // pre-hashed placeholder or generated on fly
    role: 'admin'
  },
  {
    id: 2,
    name: 'John Customer',
    email: 'user@fastekdot.com',
    passwordHash: '$2a$10$X7vQ4Q2W2qQ9Z2xQ9Z2xQe8Z2xQ9Z2xQ9Z2xQ9Z2xQ9Z2xQ9Z2xQ9',
    role: 'customer'
  }
];

module.exports = { users };