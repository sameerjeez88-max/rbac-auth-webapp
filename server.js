/**
 * @project JWT Auth & Role-Based Access Control Web App
 * @author Rana Yasir Mahy Ud Din
 * @website https://ranayasir.unaux.com/
 * @github https://github.com/Sameerjeez88-max
 * @copyright 2026 Rana Yasir Mahy Ud Din. All Rights Reserved.
 */

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const bcrypt = require('bcryptjs');
const { users } = require('./src/data/store');
const authRoutes = require('./src/routes/authRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Hash initial demo users passwords on boot
async function initStore() {
  const salt = await bcrypt.genSalt(10);
  users[0].passwordHash = await bcrypt.hash('password123', salt);
  users[1].passwordHash = await bcrypt.hash('password123', salt);
}
initStore();

// API Routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`========================================================`);
  console.log(`RBAC Auth App running on http://localhost:${PORT}`);
  console.log(`Developed by: Rana Yasir Mahy Ud Din`);
  console.log(`========================================================`);
});