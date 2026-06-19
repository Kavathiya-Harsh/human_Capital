<div align="center">

# 📊 Human Capital Analytics | Full MERN Stack Platform

**Enterprise-Level Dashboard & Predictive Analytics System for Global Economic Intelligence**

[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)](https://redux.js.org/)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)](https://mui.com/)

[![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)](https://documenter.getpostman.com/view/50839186/2sBXqRiGpA)

[Live Demo](https://human-capital-project-sahoo-priyabr.vercel.app/) · [API Documentation](https://documenter.getpostman.com/view/50839186/2sBXqRiGpA) · [Report Bug](https://github.com/priyabratasahoo780/human_capital_project_sahoo_priyabrata/issues) · [Request Feature](https://github.com/priyabratasahoo780/human_capital_project_sahoo_priyabrata/issues)

</div>

---

## 🌍 Project Vision

> _"Empowering global stakeholders with precision-engineered data visualizations and scalable intelligence architectures to decode the complexities of human capital and economic shifts."_

In an era of data-driven decision-making, the **Human Capital Analytics Platform** serves as a high-fidelity lens into the global economy. By processing over **190,000+ real-world records**, this system provides governments, analysts, and enterprises with the tools to visualize inflation trends, consumer price indices, and demographic shifts through a seamless, interactive, and ultra-responsive full-stack experience.

---

## 📖 Introduction

The **Human Capital Analytics MERN Stack Platform** is an enterprise-grade solution that harmonizes a high-performance **Node.js/Express** backend with a sophisticated **React/Vite** frontend. It is architected for speed, security, and massive data handling.

Unlike standard dashboards, this system utilizes complex **MongoDB Aggregation Pipelines** to deliver real-time analytical insights directly to the user's browser. With built-in Role-Based Access Control (RBAC), a feature-driven frontend architecture, and a strictly decoupled MVC backend, it represents the pinnacle of modern full-stack engineering.

---

## 🛠️ Full Tech Stack Architecture

### 💻 Frontend (Client-Side)

| Technology              | Category         | Purpose                                                     |
| :---------------------- | :--------------- | :---------------------------------------------------------- |
| **React.js (Vite)**     | Core Framework   | Ultra-fast development and optimized production builds      |
| **Redux Toolkit**       | State Management | Predictable state container for complex dashboard data      |
| **Tailwind CSS**        | Styling          | Utility-first CSS for rapid, modern UI construction         |
| **Material UI (MUI)**   | UI Components    | Enterprise-grade component library for interactive elements |
| **Recharts / Chart.js** | Visualization    | High-performance dynamic charting and data graphs           |
| **Formik / Yup**        | Form Logic       | Robust form handling and schema-based validation            |

### ⚙️ Backend (Server-Side)

| Technology             | Category            | Purpose                                                 |
| :--------------------- | :------------------ | :------------------------------------------------------ |
| **Node.js**            | Runtime Environment | Scalable, event-driven JavaScript execution             |
| **Express.js**         | Web Framework       | Minimalist and flexible routing and middleware engine   |
| **MongoDB / Mongoose** | Database & ODM      | NoSQL document storage with strict schema modeling      |
| **JWT / Bcrypt**       | Security            | Secure stateless authentication and password encryption |
| **Morgan / Winston**   | Logging             | Production-level request tracking and error logging     |
| **CORS / Helmet**      | Protection          | Cross-origin security and HTTP header hardening         |

---

## ✨ System Features

### 🎨 Frontend Excellence

- **🔐 Multi-Level Auth**: Separate flows for Admin and User roles with persistent sessions.
- **📈 Real-Time Analytics**: Interactive dashboards with filtering, drill-downs, and dynamic scaling.
- **🌓 Theme Orchestration**: Seamless dark/light mode transition via MUI and Tailwind.
- **📱 Ultra-Responsive**: "Mobile-first" design philosophy ensuring clarity across all device formats.
- **🏗️ Feature-Based Architecture**: Modular frontend structure for extreme maintainability.
- **🔔 Smart Notifications**: Context-aware toast alerts for system feedback and error handling.

### 🛡️ Backend Power

- **📊 Aggregation Engine**: Native MongoDB pipelines for high-velocity data crunching.
- **🔍 Dynamic Querying**: Complex filtering, multi-field sorting, and text-search logic.
- **📜 Advanced Pagination**: Cursor and offset-based logic for handling 190k+ records.
- **🛑 Intelligent Rate Limiting**: Protection against API abuse and brute-force attempts.
- **🩺 Health Monitoring**: Real-time status reporting for all infrastructure components.

---

## 🏗️ Full MERN Stack System Design

The platform operates on a **4-tier MERN architecture** spanning the browser, CDN edge network, API server, and MongoDB Atlas cluster. Every component is purpose-built for high-throughput economic analytics at scale:

```mermaid
graph TB
    subgraph BROWSER["🌐 Client Tier — React 19 + Vite 8 (Vercel Edge CDN)"]
        UI["⚛️ React Components\n(Pages + Layouts + Charts)"]
        REDUX["🧠 Redux Toolkit Store\n(authSlice, dataSlice, uiSlice)"]
        AXIOSC["🔌 Axios Interceptors\n(JWT inject + retry + 401 logout)"]
        ROUTER["🛣️ React Router v7\n(PrivateRoute + AdminRoute guards)"]
        UI <--> REDUX
        REDUX <--> AXIOSC
        UI --> ROUTER
    end

    subgraph CDN["🚀 Hosting & Network Tier"]
        VERCEL["▲ Vercel Edge CDN\n(Static SPA + API rewrites)"]
        RENDER["🟢 Render Cloud\n(Node.js API Server)"]
        AXIOSC -->|"HTTPS /api/v1/*"| VERCEL
        VERCEL -->|"Proxy → /api/v1/*"| RENDER
    end

    subgraph API["⚙️ Application Tier — Express 5 (Port 5000)"]
        direction TB
        HELMET["🛡️ Helmet\n(HTTP Headers)"]
        CORS["🌐 CORS\n(Origin whitelist)"]
        RATE["⏱️ Rate Limiter\n(15 req/15min auth)"]
        HPP["🔧 HPP Guard"]
        SANITIZE["🧹 NoSQL Sanitizer"]
        JWT_MW["🔐 JWT Middleware\n(verifyToken + RBAC)"]
        ZOD["✅ Zod Validators"]
        CTRL["🎮 Controllers\n(req/res formatting)"]
        SVC["🛠️ Services\n(Business logic)"]
        RENDER --> HELMET --> CORS --> RATE --> HPP --> SANITIZE --> JWT_MW --> ZOD --> CTRL --> SVC
    end

    subgraph DB["🗄️ Database Tier — MongoDB Atlas"]
        USERS["👤 users collection"]
        PRICES["💰 prices collection\n(190,000+ documents)"]
        COUNTRIES["🌍 countries collection"]
        INDICATORS["📊 indicators collection"]
        AGGPIPE["⚡ Aggregation Pipelines\n($match → $group → $sort → $project)"]
        COMPOUND["🔑 Compound Indexes\n({country:1, year:-1})"]
        SVC -->|"Mongoose ODM + .lean()"| USERS & PRICES & COUNTRIES & INDICATORS
        PRICES --> AGGPIPE --> COMPOUND
    end

    classDef browser fill:#1e3a5f,stroke:#3b82f6,color:#fff
    classDef cdn fill:#14532d,stroke:#22c55e,color:#fff
    classDef api fill:#3b0764,stroke:#a855f7,color:#fff
    classDef db fill:#0c4a6e,stroke:#38bdf8,color:#fff

    class UI,REDUX,AXIOSC,ROUTER browser
    class VERCEL,RENDER cdn
    class HELMET,CORS,RATE,HPP,SANITIZE,JWT_MW,ZOD,CTRL,SVC api
    class USERS,PRICES,COUNTRIES,INDICATORS,AGGPIPE,COMPOUND db
```

---

## 🔁 Procurement & Analytics Workflow

The **end-to-end Procurement Workflow** maps how a user progresses from authentication through data discovery, filtering, aggregation, and final report export — the complete 8-stage analytical journey:

```mermaid
flowchart LR
    S1["🔐 Stage 1\nUser Authentication\n\nRegister / Login\nJWT issued\nRBAC role assigned"]:::stage1
    S2["📊 Stage 2\nDashboard Entry\n\nKPI Cards load\nGlobal stats render\nIndicator overview"]:::stage2
    S3["🏷️ Stage 3\nIndicator Selection\n\nBrowse 190k+ records\nSelect CPI / Inflation\nor custom indicator"]:::stage3
    S4["🌍 Stage 4\nGeo-Filter & Country\n\nSelect country/region\nDate range picker\nMulti-filter applied"]:::stage4
    S5["⚡ Stage 5\nMongoDB Aggregation\n\n$match → $group\n$sort → $project\nCompound index O log n"]:::stage5
    S6["📈 Stage 6\nChart Rendering\n\nRecharts re-draws\nArea/Bar/Line charts\nFramer Motion animate"]:::stage6
    S7["🔄 Stage 7\nComparative Analysis\n\nSide-by-side countries\nYearly trend overlays\nDistribution buckets"]:::stage7
    S8["📤 Stage 8\nReport & Export\n\nGenerate PDF report\nDownload CSV data\nShare analytics link"]:::stage8

    S1 --> S2 --> S3 --> S4 --> S5 --> S6 --> S7 --> S8

    classDef stage1 fill:#1e40af,stroke:#3b82f6,color:#fff,rx:12
    classDef stage2 fill:#0f766e,stroke:#14b8a6,color:#fff,rx:12
    classDef stage3 fill:#7c3aed,stroke:#a78bfa,color:#fff,rx:12
    classDef stage4 fill:#b45309,stroke:#f59e0b,color:#fff,rx:12
    classDef stage5 fill:#15803d,stroke:#22c55e,color:#fff,rx:12
    classDef stage6 fill:#0e7490,stroke:#22d3ee,color:#fff,rx:12
    classDef stage7 fill:#9f1239,stroke:#fb7185,color:#fff,rx:12
    classDef stage8 fill:#4c1d95,stroke:#c4b5fd,color:#fff,rx:12
```

---

## 🔄 Complete End-to-End Request Lifecycle

The diagram below maps the **exact lifecycle** of every API call — from user interaction through the React UI, CDN proxy, Express security pipeline, MongoDB Atlas, and back to the browser:

```mermaid
sequenceDiagram
    autonumber
    participant User as 👆 User Browser
    participant React as ⚛️ React + Redux
    participant Axios as 🔌 Axios Client
    participant Vercel as ▲ Vercel CDN
    participant Express as ⚙️ Express API
    participant MongoDB as 🗄️ MongoDB Atlas

    User->>React: Click 'Apply Filter' (Country: USA, Year: 2023)
    React->>React: dispatch(fetchPrices({ country, year }))
    React->>Axios: createAsyncThunk triggers GET /api/v1/prices
    Axios->>Axios: Inject Authorization: Bearer <JWT>
    Axios->>Vercel: HTTPS GET /api/v1/prices?country=USA&year=2023
    Vercel->>Express: Proxy → Render cloud server

    rect rgb(30, 27, 75)
        Note over Express: 🛡️ Security Pipeline (6 layers)
        Express->>Express: 1. Helmet — set secure HTTP headers
        Express->>Express: 2. CORS — validate origin whitelist
        Express->>Express: 3. Rate Limiter — 100 req/15min check
        Express->>Express: 4. JWT verify — decode + inject req.user
        Express->>Express: 5. RBAC check — role: user | admin
        Express->>Express: 6. Zod validate — sanitize query params
    end

    Express->>MongoDB: Mongoose.find({ country, year }).lean()
    MongoDB->>MongoDB: Execute Compound Index {country:1, year:-1}
    MongoDB-->>Express: Return BSON documents array
    Express-->>Vercel: 200 OK { success, data, pagination }
    Vercel-->>Axios: Forward JSON response
    Axios-->>React: Resolve AsyncThunk → fulfilled
    React->>React: Update dataSlice store state
    React-->>User: Recharts re-renders with new data + toast ✅
```

---

## 🔐 Security Architecture

The platform implements a **Zero-Trust, Defense-in-Depth** security model across both client and server tiers:

```mermaid
graph TD
    subgraph CLIENT_SEC["🌐 Client-Side Security"]
        YUPFORM["✅ Yup Schema Validation\n(Client-side form guards)"]
        ROUTEGUARD["🛡️ Route Guards\n(PrivateRoute / AdminRoute)"]
        TOKENSTORE["🔑 JWT in localStorage\n(Auto-inject via Axios interceptor)"]
        AUTOLOGOUT["🚪 Auto Logout\n(401 response → clear token + redirect)"]
        BACKOFF["🔁 Exponential Backoff\n(5xx retry: 1s → 2s → fail)"]
    end

    subgraph API_SEC["⚙️ API-Side Security"]
        HELMET2["🛡️ Helmet\n(XSS, CSP, HSTS headers)"]
        CORS2["🌐 CORS Whitelist\n(Only allowed origins)"]
        RATELIMIT["⏱️ Rate Limiting\nAuth: 15 req/15min\nData: 100 req/15min\nImport: 5 req/min"]
        HPP2["🔧 HPP\n(No duplicate query params)"]
        NOSQLSANITIZE["🧹 NoSQL Sanitizer\n(Strip $ and . keys)"]
        JWTVERIFY["🔐 JWT Verify\n(RS256 signature check)"]
        RBACCHECK["👑 RBAC\n(role: user | admin)"]
        ZODVALIDATE["✅ Zod Schemas\n(Runtime type enforcement)"]
    end

    subgraph DB_SEC["🗄️ Database Security"]
        BCRYPT["🔒 BCrypt Hashing\n(10 salt rounds)"]
        MONGOOSE_VAL["📋 Mongoose Validators\n(Schema-level constraints)"]
        COMPOUND_IDX["🔑 Indexed Queries\n(No full table scans)"]
    end

    YUPFORM --> ROUTEGUARD --> TOKENSTORE --> AUTOLOGOUT & BACKOFF
    HELMET2 --> CORS2 --> RATELIMIT --> HPP2 --> NOSQLSANITIZE --> JWTVERIFY --> RBACCHECK --> ZODVALIDATE
    ZODVALIDATE --> BCRYPT --> MONGOOSE_VAL --> COMPOUND_IDX

    classDef client fill:#1e3a5f,stroke:#3b82f6,color:#fff
    classDef api fill:#3b0764,stroke:#a855f7,color:#fff
    classDef db fill:#0c4a6e,stroke:#38bdf8,color:#fff

    class YUPFORM,ROUTEGUARD,TOKENSTORE,AUTOLOGOUT,BACKOFF client
    class HELMET2,CORS2,RATELIMIT,HPP2,NOSQLSANITIZE,JWTVERIFY,RBACCHECK,ZODVALIDATE api
    class BCRYPT,MONGOOSE_VAL,COMPOUND_IDX db
```

---

## 📈 Data Analytics Pipeline

When a user triggers an analytics query, the system runs it through a **7-stage MongoDB Aggregation Pipeline** for maximum performance:

```mermaid
graph LR
    IN["📨 Incoming\nAPI Request\n(JWT + filters)"]:::input
    M["🔍 $match Stage\nFilter by country\nindicator + year"]:::match
    G["📦 $group Stage\nAggregate by _id\n$avg, $min, $max, $sum"]:::group
    L["🔗 $lookup Stage\nJoin countries +\nindicators collections"]:::lookup
    S["🔀 $sort Stage\nOrder by year ASC\nor value DESC"]:::sort
    LIM["✂️ $limit + $skip\nPagination\n(offset / cursor)"]:::limit
    P["📐 $project Stage\nShape output fields\nRemove _id internals"]:::project
    OUT["✅ JSON Response\n200 OK to client"]:::output

    IN --> M --> G --> L --> S --> LIM --> P --> OUT

    classDef input fill:#1e40af,stroke:#60a5fa,color:#fff
    classDef match fill:#7c3aed,stroke:#a78bfa,color:#fff
    classDef group fill:#0f766e,stroke:#34d399,color:#fff
    classDef lookup fill:#b45309,stroke:#fcd34d,color:#fff
    classDef sort fill:#0e7490,stroke:#67e8f9,color:#fff
    classDef limit fill:#9f1239,stroke:#fda4af,color:#fff
    classDef project fill:#15803d,stroke:#86efac,color:#fff
    classDef output fill:#1e293b,stroke:#64748b,color:#94a3b8
```

---

## 📁 Project Structure

### 🖥️ Frontend Architecture

```text
client/
├── public/               # Static assets & SEO files
├── src/
│   ├── components/       # Shared UI components (Atomic design)
│   ├── features/         # Redux Slices (Auth, UI, Data)
│   ├── layouts/          # Page wrappers (AdminLayout, MainLayout)
│   ├── routes/           # Protected & public route definitions
│   ├── store/            # Redux Toolkit global store config
│   ├── hooks/            # Custom reusable React hooks
│   └── services/         # API abstraction layer (Axios instances)
```

### ⚙️ Backend Architecture

```text
server/
├── src/
│   ├── config/           # DB, Passport, and Cloudinary settings
│   ├── controllers/      # Route handler implementations
│   ├── models/           # Mongoose schemas with indexing
│   ├── routes/           # Versioned API route definitions (v1/v2)
│   ├── middlewares/      # Error, Auth, and Log middlewares
│   ├── validators/       # Input validation schemas (Joi/Zod)
│   └── app.js            # Express instance configuration
```

---

## ⚙️ Installation & Setup

Follow these structured steps to bootstrap your local development environment:

<table style="border: none; background: transparent; width: 100%; border-collapse: collapse;">
  <tr style="border: none; background: transparent;">
    <td style="border: none; vertical-align: top; padding: 16px 0;">
      <h3 style="margin-top: 0; color: #ff6038;">1️⃣ Repository Setup</h3>
      <p style="margin-bottom: 8px;">Clone the enterprise repository and navigate into the workspace root:</p>
      <pre><code class="language-bash">git clone https://github.com/priyabratasahoo780/human_capital_project_sahoo_priyabrata.git
cd human_capital_project_sahoo_priyabrata</code></pre>
    </td>
  </tr>
  <tr style="border: none; background: transparent;">
    <td style="border: none; vertical-align: top; padding: 16px 0;">
      <h3 style="margin-top: 0; color: #ff6038;">2️⃣ Backend Configuration</h3>
      <p style="margin-bottom: 8px;">Navigate to the <code>backend/</code> directory, install core server dependencies, populate your environment variables, and run the development listener:</p>
      <pre><code class="language-bash">cd backend
npm install
cp .env.example .env
# Configure MONGODB_URI & JWT_SECRET inside .env
npm run dev</code></pre>
    </td>
  </tr>
  <tr style="border: none; background: transparent;">
    <td style="border: none; vertical-align: top; padding: 16px 0;">
      <h3 style="margin-top: 0; color: #ff6038;">3️⃣ Frontend Configuration</h3>
      <p style="margin-bottom: 8px;">In a parallel terminal session, navigate to the <code>frontend/</code> directory, install UI package modules, copy the client variables, and boot Vite:</p>
      <pre><code class="language-bash">cd ../frontend
npm install
cp .env.example .env
# Configure VITE_API_URL inside .env
npm run dev</code></pre>
    </td>
  </tr>
</table>

---

## 🔑 Environment Variables & Configurations

Configure the `.env` settings inside their respective root directories to successfully bind the client and server engines.

### 🔒 Backend Environment Setup (`backend/.env`)

| Variable | Type | Description | Default / Example |
| :--- | :--- | :--- | :--- |
| `NODE_ENV` | String | Active system state | `development` |
| `PORT` | Number | Active listening port for Express | `5000` |
| `MONGODB_URI` | String | MongoDB Atlas Cloud URL string | `mongodb+srv://...` |
| `LOCAL_MONGODB_URI` | String | Fallback connection string for local servers | `mongodb://127.0.0.1:27017/humanCapitalDB` |
| `JWT_SECRET` | String | Encryption token hash for user authentication | `super_secret_jwt_key_for_human_capital_api_2026` |
| `JWT_EXPIRES_IN` | String | Lifespan of signed credentials | `15m` |

### 🌐 Frontend Environment Setup (`frontend/.env`)

| Variable | Type | Description | Default / Example |
| :--- | :--- | :--- | :--- |
| `VITE_API_URL` | String | Backend REST API endpoint pointer | `http://localhost:5000/api/v1` |
| `VITE_APP_NAME` | String | SEO platform identity and brand name | `"Human Capital Analytics"` |

---

## 🗄️ Database Design & Entity Relationship Diagram

The platform uses a highly normalized **MongoDB schema** enforced via Mongoose ODM. The ERD below shows all 5 collections, their fields, primary/foreign keys, and relationships:

```mermaid
erDiagram
    USERS ||--o{ ACTIVITY_LOGS : "generates"
    USERS ||--o{ PRICES : "creates (admin)"
    USERS {
        ObjectId _id PK
        string name
        string email UK
        string password "BCrypt hashed"
        enum role "admin | user"
        boolean isVerified
        string avatar "URL optional"
        date createdAt
        date updatedAt
    }

    ACTIVITY_LOGS {
        ObjectId _id PK
        ObjectId user_id FK
        string action "login|create|delete"
        string ipAddress
        string userAgent
        date timestamp
    }

    COUNTRIES ||--o{ PRICES : "has"
    COUNTRIES {
        ObjectId _id PK
        string name
        string code UK "ISO 3166-1 alpha-3"
        string region "Asia|Europe|Africa..."
        string subregion
        number population
    }

    INDICATORS ||--o{ PRICES : "measures"
    INDICATORS {
        ObjectId _id PK
        string name UK
        string category "CPI|Inflation|Wage"
        string description
        string unit "USD|%|Index"
        date createdAt
    }

    PRICES {
        ObjectId _id PK
        ObjectId indicator_id FK
        ObjectId country_id FK
        number year
        number month "1-12 optional"
        number value
        object metadata "source + reliability"
        date createdAt
        date updatedAt
    }
```

### 📈 Compound Indexing Strategy

To handle **190,000+ records** at scale with `O(log n)` lookup performance:

| Index | Purpose | Query Pattern |
| :--- | :--- | :--- |
| `{ country: 1, year: -1 }` | Timeline lookups per country | Historical trend charts |
| `{ indicator: 1, country: 1 }` | Distribution grouping | Comparative analytics |
| `{ year: 1, month: 1 }` | Seasonality queries | Monthly average pipelines |
| `{ value: -1 }` | Top/bottom value sorts | Trending & high-value filters |

```javascript
// Applied on the Price Mongoose schema
priceSchema.index({ country: 1, year: -1 });       // Geo-temporal lookups
priceSchema.index({ indicator: 1, country: 1 });    // Distribution clustering
priceSchema.index({ year: 1, month: 1 });           // Seasonality pipelines
priceSchema.index({ value: -1 });                   // Top-N value sorting
```

---

## 🚀 API Documentation & Interactive Testing

To facilitate seamless integration and testing, a comprehensive Postman collection has been published. This documentation includes detailed request/response schemas, authentication requirements, and example use cases for every endpoint.

<div align="center">

### 📂 [Explore the Interactive API Collection on Postman](https://documenter.getpostman.com/view/50839186/2sBXqRiGpA)

[![View Documentation](https://img.shields.io/badge/View_Full_Documentation-FF6C37?style=for-the-badge&logo=postman&logoColor=white)](https://documenter.getpostman.com/view/50839186/2sBXqRiGpA)
[![Run in Postman](https://img.shields.io/badge/Run_In_Postman-0081CB?style=for-the-badge&logo=postman&logoColor=white)](https://documenter.getpostman.com/view/50839186/2sBXqRiGpA)

</div>

---

## 📡 API Endpoints

### 🔐 Authentication APIs

| Method  | Endpoint                             | Description                        | Access |
| :------ | :----------------------------------- | :--------------------------------- | :----- |
| `POST`  | `/api/v1/auth/register`              | Create a new enterprise account    | Public |
| `POST`  | `/api/v1/auth/login`                 | Authenticate user and return JWT   | Public |
| `POST`  | `/api/v1/auth/logout`                | Invalidate current session         | User   |
| `POST`  | `/api/v1/auth/forgot-password`       | Request password reset link        | Public |
| `PATCH` | `/api/v1/auth/reset-password/:token` | Set new password with token        | Public |
| `POST`  | `/api/v1/auth/refresh-token`         | Renew expired access tokens        | User   |
| `GET`   | `/api/v1/auth/me`                    | Retrieve current user profile      | User   |
| `POST`  | `/api/v1/auth/send-otp`              | Trigger OTP for 2FA/Verification   | User   |
| `POST`  | `/api/v1/auth/verify-otp`            | Validate multi-factor OTP code     | User   |
| `PATCH` | `/api/v1/auth/change-password`       | Update password for logged-in user | User   |

---

### 📦 Prices APIs

| Method   | Endpoint                    | Description                               | Access |
| :------- | :-------------------------- | :---------------------------------------- | :----- |
| `GET`    | `/api/v1/prices`            | Fetch all records with full query support | User   |
| `GET`    | `/api/v1/prices/:id`        | Get detailed view of a single record      | User   |
| `POST`   | `/api/v1/prices`            | Manually insert a new price record        | Admin  |
| `PATCH`  | `/api/v1/prices/:id`        | Update existing price data                | Admin  |
| `DELETE` | `/api/v1/prices/:id`        | Permanent removal of a record             | Admin  |
| `GET`    | `/api/v1/prices/latest`     | Retrieve most recent data entries         | User   |
| `GET`    | `/api/v1/prices/trending`   | List records with highest volatility      | User   |
| `GET`    | `/api/v1/prices/random`     | Get a randomized sample of data           | User   |
| `GET`    | `/api/v1/prices/high-value` | Filter records with top-tier values       | User   |
| `GET`    | `/api/v1/prices/low-value`  | Filter records with bottom-tier values    | User   |

---

### 🌍 Country APIs

| Method | Endpoint                          | Description                          | Access |
| :----- | :-------------------------------- | :----------------------------------- | :----- |
| `GET`  | `/api/v1/countries`               | List all unique countries in dataset | User   |
| `GET`  | `/api/v1/countries/search`        | Search countries by name or code     | User   |
| `GET`  | `/api/v1/countries/:code/stats`   | Macro-economic stats for a country   | User   |
| `GET`  | `/api/v1/countries/:code/history` | Historical price trends by nation    | User   |

---

### 📊 Statistics & Analytics APIs

| Method | Endpoint                       | Description                          | Access |
| :----- | :----------------------------- | :----------------------------------- | :----- |
| `GET`  | `/api/v1/stats/prices`         | General price statistics overview    | User   |
| `GET`  | `/api/v1/stats/highest`        | Global record-high values            | User   |
| `GET`  | `/api/v1/stats/lowest`         | Global record-low values             | User   |
| `GET`  | `/api/v1/stats/monthly-avg`    | Averages grouped by month            | User   |
| `GET`  | `/api/v1/stats/yearly-avg`     | Averages grouped by year             | User   |
| `GET`  | `/api/v1/stats/top-countries`  | Leading countries by indicator value | User   |
| `GET`  | `/api/v1/stats/top-indicators` | Most tracked global indicators       | User   |
| `GET`  | `/api/v1/stats/trending`       | Analytics on trending categories     | User   |
| `GET`  | `/api/v1/stats/count`          | Total record count analytics         | User   |
| `GET`  | `/api/v1/stats/distribution`   | Value distribution frequency data    | User   |

---

### 🔍 Search & Filtering APIs

| Method | Endpoint                       | Description                          | Access |
| :----- | :----------------------------- | :----------------------------------- | :----- |
| `GET`  | `/api/v1/search/prices`        | Text-based search across indicators  | User   |
| `GET`  | `/api/v1/search/countries`     | Optimized country search engine      | User   |
| `GET`  | `/api/v1/search/indicators`    | Indicator name search functionality  | User   |
| `GET`  | `/api/v1/filter/year/:year`    | Quick filter for specific years      | User   |
| `GET`  | `/api/v1/filter/month/:month`  | Quick filter for specific months     | User   |
| `GET`  | `/api/v1/filter/country/:code` | Quick filter for specific countries  | User   |
| `GET`  | `/api/v1/filter/indicator/:id` | Quick filter for specific indicators | User   |
| `GET`  | `/api/v1/filter/range`         | Filter by numeric value ranges       | User   |
| `GET`  | `/api/v1/query/advanced`       | Combined multi-parameter query API   | User   |

---

### 🛡 Protected APIs

| Method | Endpoint                      | Description                     | Access  |
| :----- | :---------------------------- | :------------------------------ | :------ |
| `GET`  | `/api/v1/protected/dashboard` | Secured dashboard data overview | Private |
| `GET`  | `/api/v1/protected/prices`    | Premium price data access       | Private |
| `GET`  | `/api/v1/protected/profile`   | Detailed JWT-protected profile  | Private |
| `GET`  | `/api/v1/protected/admin`     | Admin-only system status        | Admin   |
| `GET`  | `/api/v1/protected/user`      | Standard user-only data portal  | User    |
| `GET`  | `/api/v1/auth/verify-role`    | Backend role verification check | Private |

---

### ⚙️ Admin APIs

| Method | Endpoint                   | Description                         | Access |
| :----- | :------------------------- | :---------------------------------- | :----- |
| `GET`  | `/api/v1/admin/dashboard`  | Global system administration stats  | Admin  |
| `GET`  | `/api/v1/admin/statistics` | User activity and platform metrics  | Admin  |
| `GET`  | `/api/v1/admin/prices`     | Bulk management of price records    | Admin  |
| `GET`  | `/api/v1/admin/analytics`  | Highly sensitive platform analytics | Admin  |

---

### 🧠 Aggregation APIs

| Method | Endpoint                          | Description                         | Access  |
| :----- | :-------------------------------- | :---------------------------------- | :------ |
| `GET`  | `/api/v1/aggregate/top-countries` | Pipeline: Geo-economic clustering   | Private |
| `GET`  | `/api/v1/aggregate/yearly-trends` | Pipeline: Time-series trend mapping | Private |
| `GET`  | `/api/v1/aggregate/monthly`       | Pipeline: Seasonality analytics     | Private |
| `GET`  | `/api/v1/aggregate/distribution`  | Pipeline: Advanced data spread      | Private |
| `GET`  | `/api/v1/aggregate/reports`       | Pipeline: Comprehensive reports     | Private |

---

### ❤️ Health & Monitoring APIs

| Method | Endpoint          | Description                        | Access |
| :----- | :---------------- | :--------------------------------- | :----- |
| `GET`  | `/api/v1/health`  | Service uptime and status check    | Public |
| `GET`  | `/api/v1/metrics` | Real-time performance metrics      | Admin  |
| `GET`  | `/api/v1/status`  | DB and Redis connectivity status   | Public |
| `GET`  | `/api/v1/version` | Current API version and build info | Public |

---

## ⚡ Performance Optimization

- **DB Indexing**: Utilizing B-tree indexes for `O(log n)` lookup performance on 190k+ records.
- **Lean Queries**: Using `.lean()` to bypass Mongoose document hydration where possible.
- **Lazy Loading**: React components and routes are code-split via `React.lazy()` and `Suspense`.
- **Memoization**: Heavy analytical calculations optimized using `useMemo` and `useCallback` to prevent unnecessary re-renders.
- **Pagination & Virtualization**: Only fetching and rendering data relevant to the current viewport.

---

## 🛡️ Authentication & Security Flow

1. **Client**: Submits credentials -> `POST /login`.
2. **Server**: Validates with Bcrypt -> Issues signed JWT.
3. **Client**: Stores token (HTTPOnly Cookie or Secured Redux State).
4. **Server**: `protect` middleware decodes token and injects `req.user`.
5. **Authorization**: `restrictTo('admin')` middleware validates roles before allowing execution.

---

## 🎨 UI / UX Design System

The platform uses a unified design language centered around **clarity** and **efficiency**:

- **Neumorphism Design System**: Deep 3D styling combined with Material-UI and Tailwind for an ultra-modern aesthetic.
- **Sidebar Navigation**: Collapsible, responsive navigation for deep module access.
- **Data Tables**: Feature-rich grids with sorting, filtering, and backend pagination.
- **Skeleton Loaders**: Custom skeletons providing smooth visual transitions during data fetching.
- **Empty States**: Professional illustrations for scenarios with no data matches.

---

## 📱 SEO Optimization

Utilizing **React Helmet** for dynamic meta-management:

- **Meta Tags**: Page-specific titles and descriptions for search engine indexing.
- **Open Graph**: Rich social media sharing previews.
- **Canonical Links**: Preventing duplicate content penalties.

---

## 💻 API Usage Examples

### Fetching Analytics with Axios (Redux Thunk)

```javascript
export const fetchStats = createAsyncThunk("stats/fetch", async () => {
  const response = await axios.get("/stats/summary", {
    params: { year: 2023, country: "USA" },
  });
  return response.data;
});
```

### Advanced Query (cURL)

```bash
curl -H "Authorization: Bearer <TOKEN>" \
     "https://api.example.com/v1/prices?sort=-value&limit=10&indicator=CPI"
```

---

## ☁️ Deployment

| Platform    | Role               | Command                     |
| :---------- | :----------------- | :-------------------------- |
| **Vercel**  | Frontend Hosting   | `npm run build`             |
| **Railway** | Backend / Database | `npm start`                 |
| **Docker**  | Containerization   | `docker-compose up --build` |

---

## 🔮 Future Enhancements

- **🤖 AI Predictions**: Integrated ML models to forecast inflation trends based on historical data.
- **🌐 Multi-Language**: Full i18n support for global reach.
- **📲 PWA Integration**: Desktop-class mobile experience with offline capabilities.
- **🔔 Real-time Alerts**: Socket.io integration for threshold-based economic triggers.

---

## 🤝 Contributing

<p align="center">
  Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are <strong>greatly appreciated</strong>.
</p>

<p align="center">
  <a href="https://github.com/priyabratasahoo780/human_capital_project_sahoo_priyabrata/fork"><img src="https://img.shields.io/badge/Fork_Repo-1e293b?style=for-the-badge&logo=git-fork&logoColor=white" alt="Fork" /></a>
  &nbsp;&nbsp;
  <a href="https://github.com/priyabratasahoo780/human_capital_project_sahoo_priyabrata/issues"><img src="https://img.shields.io/badge/Report_Bug-e11d48?style=for-the-badge&logo=github&logoColor=white" alt="Report Bug" /></a>
  &nbsp;&nbsp;
  <a href="https://github.com/priyabratasahoo780/human_capital_project_sahoo_priyabrata/issues"><img src="https://img.shields.io/badge/Request_Feature-059669?style=for-the-badge&logo=github&logoColor=white" alt="Request Feature" /></a>
</p>

---

## 📜 License

Distributed under the **MIT License**. See [LICENSE](file:///c:/Users/priyabrata/Desktop/Human_Capital/human_capital_project_sahoo_priyabrata/LICENSE) for more details.

<p align="left">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge&logo=opensourceinitiative&logoColor=white&color=10b981" alt="License: MIT" />
  </a>
</p>

---
  <img src="https://img.shields.io/badge/Back_to_Top-ff6038?style=for-the-badge&logo=arrow-up&logoColor=white" alt="Back to Top" />
</a>

</div>
