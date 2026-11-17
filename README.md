# 🔐 Advanced JWT Authentication & Role-Based Access Control (RBAC) Web App

[![Node.js](https://img.shields.io/badge/Node.js-v18%2B-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-v4.21-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![JWT](https://img.shields.io/badge/JSON%20Web%20Tokens-Auth-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v3.4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

An enterprise-grade **Authentication and Role-Based Access Control (RBAC)** web application featuring secure password hashing (`bcryptjs`), JSON Web Token (JWT) session generation, custom middleware route protection, and a responsive dark-mode user interface designed with **Tailwind CSS**.

---

## 📋 Table of Contents
1. [Core Features & Highlights](#-core-features--highlights)
2. [Tech Stack & Architecture](#-tech-stack--architecture)
3. [Project Folder Structure](#-project-folder-structure)
4. [API Endpoints Reference](#-api-endpoints-reference)
5. [Local Installation & Setup](#-local-installation--setup)
6. [Testing the Application](#-testing-the-application)
7. [Author & Developer](#-author--developer)

---

## 🌟 Core Features & Highlights

* **Secure JWT Authentication:** Generates timed JSON Web Tokens upon successful credential verification for stateless session handling.
* **Role-Based Access Control (RBAC):** Restricts administrative endpoints and UI panels exclusively to users with `admin` privileges.
* **Password Hashing:** Implements `bcryptjs` salt rounds to securely encrypt plain-text user passwords before storage.
* **Modern Tailwind UI:** Clean dark-mode authentication screens (Login & Register) alongside dynamic role-rendered dashboard portals.
* **Clean Code Architecture:** Modular structure cleanly separating routing, authentication middleware, data models, and views.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend UI** | HTML5 & Tailwind CSS | Responsive dark-mode login, register, and dashboard views |
| **Backend Runtime** | Node.js & Express.js | REST routing and HTTP server management |
| **Security & Auth** | `jsonwebtoken` & `bcryptjs` | Token signing, verification, and password hashing |

---

## 📂 Project Folder Structure

```text
rbac-auth-webapp/
├── public/
│   ├── login.html             # Secure login screen
│   ├── register.html          # User registration portal
│   └── dashboard.html         # Dynamic role-based dashboard view
├── src/
│   ├── middleware/
│   │   └── authMiddleware.js  # JWT verification and Admin role guards
│   ├── routes/
│   │   └── authRoutes.js      # Register, login, profile & admin data endpoints
│   └── data/
│       └── store.js           # In-memory users database store
├── server.js                  # Main entry point & security initialization
├── package.json               # Dependencies and scripts manifest
├── .env                       # Environment variables configuration
├── .gitignore                 # Git ignore exclusions
└── README.md                  # Comprehensive technical documentation
