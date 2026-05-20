<div align="center">

<img src="https://raw.githubusercontent.com/priyabratasahoo780/human_capital_project_sahoo_priyabrata/main/assets/logo.png" alt="Human Capital Analytics Logo" width="180" style="border-radius: 20px; margin-bottom: 20px;"/>

# 🎨 Human Capital Analytics | Client Application

**Enterprise-Grade React Dashboard & Data Visualization UI**

<p align="center">
  <a href="https://reactjs.org/"><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" /></a>
  <a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" /></a>
  <a href="https://redux.js.org/"><img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" alt="Redux" /></a>
  <a href="https://reactrouter.com/"><img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router" /></a>
  <a href="https://framer.com/motion/"><img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" /></a>
</p>

> _A highly scalable, performant, and responsive frontend architecture designed to visualize global economic intelligence._

---

</div>

## 🎯 System Overview

The **Human Capital Analytics Frontend** is built using modern **React** powered by the blazing-fast **Vite** bundler. It is engineered with a strict Separation of Concerns (SoC), featuring modular Atomic design components, global state management via **Redux Toolkit**, and beautiful utility-first styling with **Tailwind CSS**. 

<br>

## 💎 Technologies & Libraries

| Category | Technologies | Description |
| :--- | :--- | :--- |
| ⚡ **Core Framework** | `React.js (v18)`, `Vite` | Fast, modern UI development environment. |
| 🎨 **Styling & UI** | `Tailwind CSS`, `clsx`, `tailwind-merge` | Utility-first CSS framework for rapid responsive design. |
| 🗃️ **State Management** | `Redux Toolkit`, `react-redux` | Predictable, centralized state container for complex data. |
| 🛣️ **Routing** | `React Router DOM` | Dynamic client-side routing with protected route boundaries. |
| 📊 **Data Visualization**| `Recharts` | High-performance, composable charting library. |
| ✨ **Animations** | `Framer Motion` | Production-ready motion and gesture library. |
| 📡 **Network** | `Axios` | Promise-based HTTP client with interceptors for JWT. |
| 🔔 **Feedback** | `react-hot-toast` | Beautiful, lightweight toast notifications. |

<br>

## 🧩 Architectural Blueprint

Our frontend folder structure strictly follows industry best practices for enterprise-level applications:

```text
frontend/
├── 🌍 public/                   # Static uncompiled assets
├── 📂 src/
│   ├── 🖼️ assets/               # Local images, icons, and custom fonts
│   ├── 🧱 components/           # Reusable Atomic UI Architecture
│   │   ├── common/              # Generic UI (Buttons, Modals, Cards)
│   │   ├── layout/              # Structural wrappers (Navbar, Sidebar)
│   │   ├── charts/              # Reusable Recharts wrappers
│   │   ├── tables/              # Data tables with pagination
│   │   └── forms/               # Reusable input components
│   ├── 📄 pages/                # Route-level components (Auth, Dashboard, Admin)
│   ├── 🛡️ routes/               # Routing configuration & Protected Boundaries
│   ├── 🧠 redux/                # Global State (Slices & Store configuration)
│   ├── 🔌 services/             # API Integration (Axios instances & logic)
│   ├── 🎣 hooks/                # Custom React Hooks (useAuth, useFetch)
│   ├── 🎭 context/              # React Context (e.g., Theme configuration)
│   ├── 🛠️ utils/                # Helper functions (Formatters, Validators)
│   ├── 📐 layouts/              # Parent Layouts (MainLayout, AuthLayout)
│   └── 🎨 styles/               # Global CSS & Tailwind directives
└── ⚙️ tailwind.config.js        # Tailwind theme extensions
```

<br>

## ⚡ Quick Start Guide

> [!TIP]
> **Prerequisites:** Ensure you have the backend API running locally before attempting to log in or fetch analytical data.

### 1️⃣ Installation
Navigate into the `frontend` directory and install the necessary packages:
```bash
cd frontend
npm install
```

### 2️⃣ Environment Configuration
Create a `.env` file at the root of the `frontend` folder to connect to your backend:
```env
# API Endpoint
VITE_API_URL=http://localhost:5000/api/v1

# Application Constants
VITE_APP_NAME="Human Capital Analytics"
```

### 3️⃣ Launch the Application
Spin up the Vite development server with Hot Module Replacement (HMR):
```bash
npm run dev
```

<br>

## 🕹️ Command Reference

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts the local development server via Vite. |
| `npm run build` | Compiles the React application into optimized static assets for production. |
| `npm run preview` | Boots up a local web server to preview the compiled production build. |
| `npm run lint` | Scans the codebase for formatting and styling issues using ESLint. |

<br>

## 🛡️ Authentication & Protected Routes

Security is handled deeply within the client architecture:
- **`ProtectedRoute.jsx`**: Wraps dashboard elements to ensure only authenticated users with valid JWTs can access them.
- **`AdminRoute.jsx`**: Adds an extra layer of RBAC verification, restricting system management interfaces strictly to administrators.
- **Token Management**: Axios interceptors automatically attach the Authorization Bearer token to all outgoing API requests.

<br>

<div align="center">

[![Live Demo](https://img.shields.io/badge/View_Live_Demo-000000?style=for-the-badge&logo=vercel&logoColor=white)](#)

<i>Crafted for precision analytics and unparalleled user experience.</i>

</div>
