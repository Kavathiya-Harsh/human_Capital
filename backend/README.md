<div align="center">

<img src="../frontend/src/assets/logo.png" alt="Human Capital Analytics Logo" width="160" style="border-radius: 24px; margin-bottom: 24px; box-shadow: 0 20px 40px rgba(0,0,0,0.3);"/>

# ⚙️ Human Capital Analytics | Backend Engine

**High-Performance MERN RESTful API, Advanced Aggregations & Security Orchestration Gateway**

[![NodeJS](https://img.shields.io/badge/NodeJS-20.x-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![ExpressJS](https://img.shields.io/badge/ExpressJS-5.0-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-8.0-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![JWT](https://img.shields.io/badge/JWT-Stateless-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)](https://jwt.io/)
[![Zod](https://img.shields.io/badge/Zod-Validators-3E67B1?style=for-the-badge&logo=zod&logoColor=white)](https://zod.dev/)
[![Postman](https://img.shields.io/badge/API_Docs-Interactive-FF6C37?style=for-the-badge&logo=postman&logoColor=white)](https://documenter.getpostman.com/view/50839186/2sBXqRiGpA)

<br/>

[![Live API Deployment](https://img.shields.io/badge/Live_API_Deployment-Render-46E3B7?style=for-the-badge&logo=render&logoColor=black)](https://human-capital-project-sahoo-priyabrata.onrender.com)

> A strictly decoupled, enterprise-grade MVC backend engine built to deliver lightning-fast analytics over 190,000+ consumer price records using MongoDB Aggregation Pipelines and a hardened multi-layer defense system.

---

</div>

## 🏗️ Full-Stack System Architecture

The Human Capital Analytics backend is a fully decoupled, enterprise-grade Node.js engine. The diagram below illustrates the **complete system architecture** — from the React frontend all the way through to the MongoDB Atlas data layer:

```mermaid
graph TB
    subgraph CLIENT["🖥️ Client Layer — React + Vite (Port 5173)"]
        UI["React UI Components"]
        AXIOS["Axios HTTP Client\n+ Interceptors"]
        STORE["Zustand State Store"]
    end

    subgraph GATEWAY["🔒 Security Gateway — Express 5 (Port 5000)"]
        HELMET["🛡️ Helmet\n(HTTP Security Headers)"]
        CORS["🌐 CORS\n(Origin Whitelisting)"]
        RATE["⏱️ Rate Limiter\n(express-rate-limit)"]
        HPP["🔧 HPP\n(Param Pollution Guard)"]
        SANITIZE["🧹 NoSQL Sanitizer\n(sanitizeData.js)"]
        COMPRESS["📦 Compression\n(Gzip/Brotli)"]
        LOGGER["📋 Morgan Logger\n(requestLogger)"]
    end

    subgraph AUTH_MW["🔐 Authentication Middleware"]
        JWT_MW["JWT Verifier\n(verifyToken)"]
        RBAC["RBAC Guard\n(requireRole: admin/user)"]
        COOKIE["Cookie Parser\n(HttpOnly JWT)"]
    end

    subgraph VALIDATION["✅ Validation Layer"]
        ZOD["Zod Schema Validators\n(/validators/*.js)"]
    end

    subgraph ROUTER["🛣️ Express Router Layer (/api/v1)"]
        R_AUTH["auth.routes.js"]
        R_PRICE["price.routes.js"]
        R_COUNTRY["country.routes.js"]
        R_INDICATOR["indicator.routes.js"]
        R_STATS["stats.routes.js"]
        R_SEARCH["search.routes.js"]
        R_COMPARE["compare.routes.js"]
        R_MONTH["month.routes.js"]
        R_YEAR["year.routes.js"]
        R_REPORT["report.routes.js"]
        R_IMPORT["import.routes.js"]
        R_ADMIN["admin.routes.js"]
        R_HEALTH["health.routes.js"]
    end

    subgraph CONTROLLER["🎮 Controller Layer"]
        C_AUTH["auth.controller.js"]
        C_PRICE["price.controller.js"]
        C_STATS["stats.controller.js"]
        C_ADMIN["admin.controller.js"]
    end

    subgraph SERVICE["🛠️ Service Layer (Business Logic)"]
        S_AUTH["auth.service.js\n(bcrypt, JWT sign)"]
        S_PRICE["price.service.js\n(CRUD + pagination)"]
        S_STATS["stats.service.js\n(Aggregation Pipelines)"]
        S_IMPORT["import.service.js\n(CSV/JSON bulk loader)"]
    end

    subgraph DB["🗄️ Database Layer — MongoDB Atlas"]
        M_USER["👤 User Model\n(Mongoose Schema)"]
        M_PRICE["💰 Price Model\n(190,000+ records)"]
        M_COUNTRY["🌍 Country Model"]
        M_INDICATOR["📊 Indicator Model"]
        AGG["⚡ Aggregation Pipelines\n($group, $bucket, $lookup)"]
        IDX["🔑 Compound Indexes\n({country:1, year:-1})"]
    end

    subgraph ERROR["🚨 Error Handling"]
        APP_ERR["AppError Class\n(statusCode + isOperational)"]
        GLOBAL_ERR["globalErrorHandler\n(Mongoose + JWT errors)"]
        NOT_FOUND["notFoundHandler\n(404 catch-all)"]
    end

    UI --> AXIOS
    AXIOS --> HELMET
    HELMET --> CORS --> RATE --> HPP --> SANITIZE --> COMPRESS --> LOGGER
    LOGGER --> COOKIE --> JWT_MW --> RBAC --> ZOD
    ZOD --> R_AUTH & R_PRICE & R_COUNTRY & R_INDICATOR & R_STATS & R_SEARCH & R_COMPARE & R_MONTH & R_YEAR & R_REPORT & R_IMPORT & R_ADMIN & R_HEALTH
    R_AUTH --> C_AUTH --> S_AUTH --> M_USER
    R_PRICE --> C_PRICE --> S_PRICE --> M_PRICE
    R_STATS --> C_STATS --> S_STATS --> AGG --> IDX
    R_IMPORT --> S_IMPORT --> M_PRICE
    R_ADMIN --> C_ADMIN --> M_USER
    M_USER & M_PRICE & M_COUNTRY & M_INDICATOR --> STORE
    APP_ERR --> GLOBAL_ERR
    NOT_FOUND --> GLOBAL_ERR
    GLOBAL_ERR --> AXIOS

    classDef client fill:#1e40af,stroke:#3b82f6,color:#fff
    classDef gateway fill:#7c3aed,stroke:#8b5cf6,color:#fff
    classDef auth fill:#b91c1c,stroke:#ef4444,color:#fff
    classDef validation fill:#0f766e,stroke:#14b8a6,color:#fff
    classDef router fill:#1d4ed8,stroke:#60a5fa,color:#fff
    classDef controller fill:#b45309,stroke:#f59e0b,color:#fff
    classDef service fill:#15803d,stroke:#22c55e,color:#fff
    classDef db fill:#0e7490,stroke:#22d3ee,color:#fff
    classDef error fill:#9f1239,stroke:#f43f5e,color:#fff

    class UI,AXIOS,STORE client
    class HELMET,CORS,RATE,HPP,SANITIZE,COMPRESS,LOGGER gateway
    class JWT_MW,RBAC,COOKIE auth
    class ZOD validation
    class R_AUTH,R_PRICE,R_COUNTRY,R_INDICATOR,R_STATS,R_SEARCH,R_COMPARE,R_MONTH,R_YEAR,R_REPORT,R_IMPORT,R_ADMIN,R_HEALTH router
    class C_AUTH,C_PRICE,C_STATS,C_ADMIN controller
    class S_AUTH,S_PRICE,S_STATS,S_IMPORT service
    class M_USER,M_PRICE,M_COUNTRY,M_INDICATOR,AGG,IDX db
    class APP_ERR,GLOBAL_ERR,NOT_FOUND error
```

---

## 🎯 MVC / Service Layer Architecture

The backend enforces strict **Separation of Concerns (SoC)** across 5 distinct layers:

```mermaid
graph LR
    subgraph L1["Layer 1: Entry Point"]
        SERVER["🏁 server.js\n(HTTP Listener + DB connect)"]
    end
    subgraph L2["Layer 2: App Config"]
        APP["🚀 app.js\n(Global middleware + Routes)"]
    end
    subgraph L3["Layer 3: Controllers"]
        CTRL["🎮 controllers/\n(HTTP req/res only)"]
    end
    subgraph L4["Layer 4: Services"]
        SVC["🛠️ services/\n(Business logic + DB queries)"]
    end
    subgraph L5["Layer 5: Models"]
        MDL["📦 models/\n(Mongoose schemas + indexes)"]
    end

    SERVER --> APP --> CTRL --> SVC --> MDL

    classDef layer fill:#1e293b,stroke:#475569,color:#f8fafc
    class SERVER,APP,CTRL,SVC,MDL layer
```

### Key Engineering Features:
*   **📊 Native Aggregation Engine**: Dynamic pipelines calculating global macro-economic statistics, monthly averages, yearly trends, and geo-economic clustering.
*   **🛡️ Multi-Layer Security Controls**: Hardened with Helmet HTTP headers, CORS whitelisting, HTTP Parameter Pollution (`hpp`) defense, Custom NoSQL query injection sanitizers, and Rate-limiting.
*   **✅ Strict Payload Sanitization**: Fully typed runtime payload schema enforcement using **Zod** validator schemas.
*   **🛠️ Service-Oriented Logic**: Controllers only manage HTTP protocols (`req`, `res`, `cookies`). Core database operations and business logic are delegated to independent services.

---

## 🔄 Backend Request Lifecycle Workflow

Every API call passes through **9 sequential stages** before a response is returned. This ensures zero-trust security, clean validation, and optimal DB performance:

```mermaid
flowchart TD
    A["📨 Step 1: Incoming HTTP Request\nAxios → POST /api/v1/auth/login"]:::step
    B["🛡️ Step 2: Security Gateway\nHelmet + CORS + HPP + Compression"]:::security
    C["⏱️ Step 3: Rate Limit Check\nMax 15 req/15min for auth routes\nMax 100 req/15min for data routes"]:::security
    D["🔐 Step 4: JWT Auth & RBAC\nVerify HttpOnly cookie token\nCheck role: 'user' | 'admin'"]:::auth
    E["🧹 Step 5: Payload Sanitization\nStrip $ and . keys → NoSQL injection guard\nTrim whitespace recursively"]:::sanitize
    F["✅ Step 6: Zod Schema Validation\nValidate req.body / req.query / req.params\nThrow 400 on first schema violation"]:::validate
    G["🎮 Step 7: Controller Handler\nFormat req → call Service\nManage res + cookies"]:::controller
    H["🛠️ Step 8: Service Business Logic\nExecute MongoDB Aggregation Pipeline\nor Mongoose CRUD operation"]:::service
    I["🗄️ Step 9: MongoDB Atlas Response\nBSON → JSON serialization\nLean queries for read performance"]:::db
    J["✅ 200 OK — JSON Response\nFormatted payload to Axios client"]:::success
    ERR["🚨 AppError → globalErrorHandler\nOperational: 400/401/403/404\nProgrammatic: 500 Internal Server Error"]:::error

    A --> B --> C --> D --> E --> F --> G --> H --> I --> J
    B -.->|CORS violation| ERR
    C -.->|429 Too Many Requests| ERR
    D -.->|401 Unauthorized| ERR
    F -.->|400 Bad Request| ERR
    H -.->|DB Error / 11000 Duplicate| ERR
    ERR -.->|Formatted Error JSON| A

    classDef step fill:#1e40af,stroke:#3b82f6,color:#fff,rx:8
    classDef security fill:#7c3aed,stroke:#a78bfa,color:#fff,rx:8
    classDef auth fill:#b91c1c,stroke:#f87171,color:#fff,rx:8
    classDef sanitize fill:#854d0e,stroke:#fbbf24,color:#fff,rx:8
    classDef validate fill:#0f766e,stroke:#34d399,color:#fff,rx:8
    classDef controller fill:#b45309,stroke:#fcd34d,color:#fff,rx:8
    classDef service fill:#15803d,stroke:#4ade80,color:#fff,rx:8
    classDef db fill:#0e7490,stroke:#67e8f9,color:#fff,rx:8
    classDef success fill:#166534,stroke:#86efac,color:#fff,rx:8
    classDef error fill:#9f1239,stroke:#fda4af,color:#fff,rx:8
```

---

## 🔐 Authentication & Authorization Workflow

```mermaid
sequenceDiagram
    autonumber
    participant Client as 🖥️ React Frontend
    participant Server as ⚙️ Express Server
    participant JWT as 🔑 JWT Module
    participant BCrypt as 🔒 BCrypt
    participant DB as 🗄️ MongoDB Atlas

    Note over Client,DB: 📝 Registration Flow
    Client->>Server: POST /api/v1/auth/register { name, email, password }
    Server->>Server: Zod validates payload schema
    Server->>DB: Check if email already exists
    DB-->>Server: No duplicate found
    Server->>BCrypt: Hash password (10 salt rounds)
    BCrypt-->>Server: Return hashed password
    Server->>DB: Insert new User document
    DB-->>Server: Return created User
    Server->>JWT: Sign access token (JWT_SECRET, 15m)
    JWT-->>Server: Return signed token
    Server-->>Client: 201 Created + Set HttpOnly cookie

    Note over Client,DB: 🔓 Login Flow
    Client->>Server: POST /api/v1/auth/login { email, password }
    Server->>DB: Find user by email (.lean())
    DB-->>Server: Return User document
    Server->>BCrypt: Compare plain vs hashed password
    BCrypt-->>Server: ✅ Match confirmed
    Server->>JWT: Sign new access token
    JWT-->>Server: Signed JWT
    Server-->>Client: 200 OK + HttpOnly cookie (JWT)

    Note over Client,DB: 🛡️ Protected Route Access
    Client->>Server: GET /api/v1/protected/me (Cookie: jwt=...)
    Server->>JWT: Verify & decode token
    JWT-->>Server: { userId, role, iat, exp }
    Server->>DB: Fetch user by userId
    DB-->>Server: Return User profile
    Server-->>Client: 200 OK { user profile data }
```

---

## 🗄️ Database Design & Entity Relationship Diagram

The backend acts as the custodian of data integrity. We utilize a highly normalized MongoDB schema enforced strictly via Mongoose ODMs and custom Zod validation layers.

```mermaid
erDiagram
    USERS ||--o{ ACTIVITY_LOGS : generates
    USERS {
        ObjectId _id PK
        string name
        string email UK
        string password "Hashed"
        enum role "admin, user"
        boolean isVerified
        date createdAt
    }
    
    COUNTRIES ||--o{ PRICES : contains
    COUNTRIES {
        ObjectId _id PK
        string name UK
        string code UK "ISO"
        string region
    }
    
    INDICATORS ||--o{ PRICES : measures
    INDICATORS {
        ObjectId _id PK
        string name UK
        string category
        string description
        string unit
    }
    
    PRICES {
        ObjectId _id PK
        ObjectId indicator_id FK
        ObjectId country_id FK
        number year
        number value
        object metadata "Source/Reliability"
        date createdAt
    }
```

### 📈 Compound Indexing Strategy

To handle analytical aggregations spanning millions of permutations over 190,000+ documents, we rely on advanced B-Tree compound indexing:

| Index | Collection | Purpose | Performance |
| :--- | :--- | :--- | :--- |
| `{ country: 1, year: -1 }` | `prices` | Geo-temporal timeline lookups | `O(log n)` |
| `{ indicator: 1, country: 1 }` | `prices` | Indicator grouping & clustering | `O(log n)` |

---

## 📈 Backend Data Processing Pipeline

When handling complex aggregations, the backend processes queries through a strict sequential pipeline to ensure high performance and data sanitization:

```mermaid
graph LR
    A[Incoming JWT Request] --> B[Zod Schema Validator]
    B --> C[NoSQL Sanitizer Hook]
    C --> D[Mongoose Match Stage]
    D --> E[BSON Aggregation Pipeline]
    E --> F[In-Memory Sort & Limit]
    F --> G[JSON Payload Formatting]

    classDef default fill:#1e293b,stroke:#475569,stroke-width:1px,color:#f8fafc;
    classDef security fill:#2563eb,stroke:#1d4ed8,stroke-width:1px,color:#fff;
    classDef sanitization fill:#8b5cf6,stroke:#7c3aed,stroke-width:1px,color:#fff;
    classDef db fill:#059669,stroke:#047857,stroke-width:1px,color:#fff;
    classDef format fill:#d97706,stroke:#b45309,stroke-width:1px,color:#fff;

    class A,B security;
    class C sanitization;
    class D,E,F db;
    class G format;
```

---

## 📊 Advanced MongoDB Aggregation Pipelines

Heavy statistical calculations are computed directly on the database engine using aggregation pipelines:

### 📅 Yearly Trend Pipelines
Used to map multi-year time-series indexes grouped by indicators and nations:
```javascript
[
  { $match: { country: countryCode, indicator: indicatorId } },
  {
    $group: {
      _id: "$year",
      averageValue: { $avg: "$value" },
      minVal: { $min: "$value" },
      maxVal: { $max: "$value" },
      count: { $sum: 1 }
    }
  },
  { $sort: { _id: 1 } },
  {
    $project: {
      year: "$_id",
      averageValue: 1,
      minVal: 1,
      maxVal: 1,
      count: 1,
      _id: 0
    }
  }
]
```

### 🌍 Geo-Clustering & Distribution Pipelines
Segments values into frequency buckets to build client distribution curves:
```javascript
[
  { $match: { indicator: indicatorId } },
  {
    $bucketAuto: {
      groupBy: "$value",
      buckets: 10,
      output: {
        count: { $sum: 1 },
        average: { $avg: "$value" }
      }
    }
  }
]
```

---

## 🛡️ Multi-Layer Security Architecture

### 🛑 Global API Rate Limiting (`middlewares/rateLimit.middleware.js`)

| Route Group | Limit | Window | Protection Against |
| :--- | :---: | :---: | :--- |
| Authentication (`/api/v1/auth`) | **15 requests** | 15 minutes | Brute-force login attacks |
| Data & Aggregation routes | **100 requests** | 15 minutes | API spam & scraping |
| Bulk Import route | **5 requests** | 1 minute | CPU exhaustion attacks |

### 🧹 Custom Payload Sanitizer (`utils/sanitizeData.js`)

| Threat | Method | Description |
| :--- | :--- | :--- |
| **NoSQL Injection** | Strip `$` and `.` keys | Prevents `{ $where: ... }` and similar query injection |
| **XSS via whitespace** | Recursive string trim | Strips leading/trailing whitespace from all string fields |

---

## 🚨 Error Handling Pipeline

The application features a centralized, synchronous-asynchronous error management engine:

### 1. `AppError` Utility Class
Extends JavaScript's native `Error` to append HTTP status codes and label errors as operational:
```javascript
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true; // Operational failures (e.g. invalid inputs)
    Error.captureStackTrace(this, this.constructor);
  }
}
```

### 2. Global Error Handling Middleware (`middlewares/error.middleware.js`)
Intercepts thrown errors and formats clean response envelopes:

| Error Type | Source | HTTP Status | Response Message |
| :--- | :--- | :---: | :--- |
| `Mongoose Duplicate Key (11000)` | MongoDB | `400` | "Email is already registered" |
| `Mongoose ValidationError` | Mongoose | `400` | Collects all individual field messages |
| `JsonWebTokenError` | JWT | `401` | "Invalid token. Please log in again." |
| `TokenExpiredError` | JWT | `401` | "Your token has expired. Please log in again." |
| `Unhandled/Programmatic` | Runtime | `500` | "Something went wrong. Please try again." |

---

## ✅ Request Validation Pipeline (Zod Schemas)

All inputs (`req.body`, `req.query`, `req.params`) are validated prior to controller routing. Example schemas inside `/validators`:

```javascript
const { z } = require("zod");

// Register validation schema
const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().email("Please provide a valid email format"),
  password: z.string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
  role: z.enum(["user", "admin"]).optional(),
});
```

---

## 📐 Strict Codebase Guidelines

To ensure code maintainability, this project enforces these development principles:

### 1️⃣ The 250-Line limit
*   **Mandatory Rule**: No controller, service, validator, or route file may exceed **250 lines of code**.
*   **Decomposition**: If files grow beyond this limit, developers must split them by extracting helper functions, utilities, or specific domain sub-handlers into separate files.

### 2️⃣ Lean Database Interfacing
*   **Optimization**: Use Mongoose `.lean()` on read-only queries to avoid expensive hydration overhead.
*   **Indexing**: Compound indices are strategically created (e.g., `{ country: 1, year: -1 }`) to keep read queries performing in `O(log n)`.

---

## 📂 System File Hierarchy

```text
backend/
├── ⚙️ config/                 # Database connectors and global infrastructure setups
├── 🎮 controllers/            # Route handler logic mapping HTTP queries to service calls
├── 🛡️ middlewares/            # Request parsing filters (JWT validation, RBAC, Errors)
├── 📦 models/                 # Mongoose schemas with compound indexes & pre-save hooks
├── 🛣️ routes/                 # Express versioned api endpoints (/api/v1)
├── 🛠️ services/               # Reusable core analytical algorithms and DB query handlers
├── 🔧 utils/                  # Helper utilities (Token generators, JSON formatters)
├── ✅ validators/             # Zod input schemas enforcing strict data validation
├── 🚀 app.js                  # Global Express app definition with security middleware
└── 🏁 server.js               # Application entry point hosting the HTTP listener
```

---

## 📡 API Endpoint Architecture

### 🔐 Authentication (`/api/v1/auth`)
| Method | Endpoint | Auth | Description |
| :--- | :--- | :---: | :--- |
| `POST` | `/register` | ❌ | Creates a new user profile with Zod-validated payload |
| `POST` | `/login` | ❌ | Validates credentials, issues JWT & sets secure HttpOnly cookie |
| `POST` | `/logout` | ✅ | Invalidates active server session and clears cookie |
| `POST` | `/send-otp` | ❌ | Sends OTP to registered email for verification |
| `POST` | `/verify-otp` | ❌ | Verifies OTP token for security operations |
| `PATCH` | `/change-password` | ✅ | Centralized authenticated password update pipeline |

### 📊 Prices Data Grid (`/api/v1/prices`)
| Method | Endpoint | Auth | Description |
| :--- | :--- | :---: | :--- |
| `GET` | `/` | ✅ | Fetches economic records with cursor pagination, sorting & filters |
| `GET` | `/:id` | ✅ | Fetches a single price record by MongoDB ObjectId |
| `GET` | `/trending` | ✅ | Lists the most volatile price movements across indicators |
| `POST` | `/` | 🔒 Admin | Creates a new price record (admin only) |
| `PATCH` | `/:id` | 🔒 Admin | Updates an existing price record (admin only) |
| `DELETE` | `/:id` | 🔒 Admin | Deletes a price record (admin only) |

### 🌍 Territories & Countries (`/api/v1/countries`)
| Method | Endpoint | Auth | Description |
| :--- | :--- | :---: | :--- |
| `GET` | `/` | ✅ | Retrieves a paginated list of all unique countries |
| `GET` | `/search` | ✅ | Searches specific countries by name or ISO code |
| `GET` | `/:code/stats` | ✅ | Pulls historical macroeconomic data for a specific country |

### 🏷️ Indicators (`/api/v1/indicators`)
| Method | Endpoint | Auth | Description |
| :--- | :--- | :---: | :--- |
| `GET` | `/` | ✅ | Lists all available economic indicators with metadata |
| `GET` | `/:id` | ✅ | Fetches a single indicator definition by ID |
| `POST` | `/` | 🔒 Admin | Creates a new economic indicator (admin only) |
| `PATCH` | `/:id` | 🔒 Admin | Updates indicator metadata (admin only) |
| `DELETE` | `/:id` | 🔒 Admin | Removes an indicator (admin only) |

### 🔍 Global Search (`/api/v1/search`)
| Method | Endpoint | Auth | Description |
| :--- | :--- | :---: | :--- |
| `GET` | `/` | ✅ | Full-text cross-collection search across countries, indicators & prices |

### 📈 Analytics & Aggregations (`/api/v1/stats`)
| Method | Endpoint | Auth | Description |
| :--- | :--- | :---: | :--- |
| `GET` | `/prices` | ✅ | Global aggregated statistics summaries (min, max, avg, count) |
| `GET` | `/monthly-avg` | ✅ | MongoDB pipeline: indices grouped & averaged by month |
| `GET` | `/yearly-avg` | ✅ | Aggregated historical index averages grouped by calendar year |
| `GET` | `/distribution` | ✅ | Frequency distribution of index value ranges (bucket aggregation) |

### 📅 Monthly Trends (`/api/v1/months`)
| Method | Endpoint | Auth | Description |
| :--- | :--- | :---: | :--- |
| `GET` | `/` | ✅ | Retrieves monthly time-series aggregations for charting |
| `GET` | `/:year` | ✅ | Fetches monthly breakdown filtered by a specific year |

### 📆 Yearly Trends (`/api/v1/years`)
| Method | Endpoint | Auth | Description |
| :--- | :--- | :---: | :--- |
| `GET` | `/` | ✅ | Retrieves full year-over-year trend data across all indicators |
| `GET` | `/:year` | ✅ | Fetches aggregated data for a specific calendar year |

### 🔄 Comparative Analytics (`/api/v1/compare`)
| Method | Endpoint | Auth | Description |
| :--- | :--- | :---: | :--- |
| `GET` | `/countries` | ✅ | Side-by-side comparison of indicators across multiple countries |
| `GET` | `/indicators` | ✅ | Cross-indicator comparison for a single country over time |

### 📄 Reports (`/api/v1/reports`)
| Method | Endpoint | Auth | Description |
| :--- | :--- | :---: | :--- |
| `GET` | `/` | ✅ | Lists all generated analytical reports |
| `POST` | `/generate` | ✅ | Triggers server-side report generation for selected filters |
| `GET` | `/:id` | ✅ | Downloads/previews a specific generated report |

### 📥 Bulk Import (`/api/v1/import`)
| Method | Endpoint | Auth | Description |
| :--- | :--- | :---: | :--- |
| `POST` | `/csv` | 🔒 Admin | Bulk imports price records from a CSV file (rate-limited: 5 req/min) |
| `POST` | `/json` | 🔒 Admin | Bulk imports price records from a JSON payload |

### 🔑 JWT Utilities (`/api/v1/jwt`)
| Method | Endpoint | Auth | Description |
| :--- | :--- | :---: | :--- |
| `POST` | `/refresh` | ✅ | Issues a fresh access token using the stored HttpOnly cookie |
| `POST` | `/validate` | ✅ | Validates and decodes an active JWT token |

### 🔐 Protected Routes (`/api/v1/protected`)
| Method | Endpoint | Auth | Description |
| :--- | :--- | :---: | :--- |
| `GET` | `/me` | ✅ | Returns the authenticated user's profile and roles |
| `PATCH` | `/me` | ✅ | Updates the authenticated user's own profile data |

### 🛠️ Admin Panel (`/api/v1/admin`)
| Method | Endpoint | Auth | Description |
| :--- | :--- | :---: | :--- |
| `GET` | `/users` | 🔒 Admin | Lists all registered users with metadata |
| `PATCH` | `/users/:id/role` | 🔒 Admin | Promotes or demotes a user's role |
| `DELETE` | `/users/:id` | 🔒 Admin | Permanently deletes a user account |
| `GET` | `/stats` | 🔒 Admin | Returns platform-wide usage statistics |

### 🧠 System Diagnostics (`/api/v1/health`)
| Method | Endpoint | Auth | Description |
| :--- | :--- | :---: | :--- |
| `GET` | `/` | ❌ | Returns uptime, microservice status & DB connection readiness |

> **Legend**: ✅ = JWT Required &nbsp;|&nbsp; 🔒 Admin = Admin RBAC Role Required &nbsp;|&nbsp; ❌ = Public

---

## 📦 Dependencies

### Production Dependencies
| Package | Version | Purpose |
| :--- | :---: | :--- |
| `express` | ^5.2.1 | Core HTTP web framework (Express 5 with async error support) |
| `mongoose` | ^9.6.2 | MongoDB ODM with schema validation & compound indexing |
| `jsonwebtoken` | ^9.0.3 | Stateless JWT generation and verification |
| `bcryptjs` | ^3.0.3 | Password hashing with configurable salt rounds |
| `zod` | ^4.4.3 | Runtime schema validation for request payloads |
| `helmet` | ^8.1.0 | Sets secure HTTP response headers (CSP, XSS, HSTS etc.) |
| `cors` | ^2.8.6 | Cross-Origin Resource Sharing with origin whitelisting |
| `express-rate-limit` | ^8.5.1 | Per-IP rate limiting to prevent DDoS attacks |
| `hpp` | ^0.2.3 | HTTP Parameter Pollution prevention middleware |
| `cookie-parser` | ^1.4.7 | Parses incoming cookie headers for JWT extraction |
| `compression` | ^1.8.1 | Gzip/Brotli response compression for network optimization |
| `morgan` | ^1.10.1 | HTTP request logger middleware (dev + combined modes) |
| `dotenv` | ^17.4.2 | Loads environment variables from `.env` into `process.env` |

### Development Dependencies
| Package | Version | Purpose |
| :--- | :---: | :--- |
| `nodemon` | ^3.1.14 | Auto-restarts server on file changes during development |
| `eslint` | ^10.3.0 | Static code analysis and style enforcement |
| `prettier` | ^3.8.3 | Opinionated code formatter for consistent style |
| `jest` | ^30.4.2 | JavaScript testing framework for unit & integration tests |

---

## ⚡ Quick Start Guide

### 1️⃣ Install Dependencies
Ensure you have Node.js v20+ installed. Run the command at the root of the backend directory:
```bash
npm install
```

### 2️⃣ Configure Environment Variables
Duplicate `.env.example` to `.env` and configure all credentials:

| Variable | Required | Default | Description |
| :--- | :---: | :--- | :--- |
| `PORT` | ✅ | `5000` | HTTP port the Express server listens on |
| `NODE_ENV` | ✅ | `development` | Runtime environment (`development` \| `production`) |
| `MONGODB_URI` | ✅ | — | MongoDB Atlas connection string for production |
| `LOCAL_MONGODB_URI` | ⚠️ Dev | — | Local MongoDB URI for development (`127.0.0.1:27017`) |
| `JWT_SECRET` | ✅ | — | Secret key for signing & verifying JWT tokens (min 32 chars) |
| `JWT_EXPIRES_IN` | ✅ | `15m` | JWT access token expiry duration (e.g. `15m`, `1h`, `7d`) |
| `CLIENT_URL` | ✅ | — | Frontend origin URL whitelisted in CORS policy |

```env
# .env — Copy this to your .env file and fill in the values
PORT=5000
NODE_ENV=development

# Database
LOCAL_MONGODB_URI=mongodb://127.0.0.1:27017/humanCapitalDB
MONGODB_URI=mongodb+srv://<user>:<password>@cluster0.mongodb.net/human_capital_analytics

# JWT Authentication
JWT_SECRET=super_secret_jwt_key_for_human_capital_api_2026
JWT_EXPIRES_IN=15m

# CORS
CLIENT_URL=http://localhost:5173
```

### 3️⃣ Start Development Server
Boots Node with Nodemon for hot reloading:
```bash
npm run dev
```

---

## 🕹️ Command Reference

| Command | Environment | Purpose |
| :--- | :--- | :--- |
| `npm start` | **Production** | Runs the compiled production code. |
| `npm run dev` | **Development** | Runs the development listener via Nodemon. |
| `npm run lint` | **Quality** | Runs ESLint analysis over `/src`. |
| `npm run format` | **Quality** | Formats code layout using Prettier. |
| `npm run test` | **Testing** | Runs Jest unit and integration tests. |

---

<div align="center">

### 📖 Interactive Testing & Complete API Reference
[![View Postman Docs](https://img.shields.io/badge/View_Interactive_Documentation-FF6C37?style=for-the-badge&logo=postman&logoColor=white&logoSize=large)](https://documenter.getpostman.com/view/50839186/2sBXqRiGpA)

---

## 📜 License

Distributed under the **MIT License**. See [LICENSE](file:///c:/Users/priyabrata/Desktop/Human_Capital/human_capital_project_sahoo_priyabrata/LICENSE) for more details.

<p align="left">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge&logo=opensourceinitiative&logoColor=white&color=10b981" alt="License: MIT" />
  </a>
</p>

---

## 👨‍💻 Developer & Author

<table align="center" style="border: none; background: transparent; border-collapse: collapse;">
  <tr style="background: transparent; border: none;">
    <td align="center" style="border: none; padding: 24px;">
      <a href="https://github.com/priyabratasahoo780">
        <img src="https://github.com/priyabratasahoo780.png" width="110" style="border-radius: 50%; border: 3px solid #ff6038; box-shadow: 0 10px 30px rgba(255,96,56,0.25);" alt="Priyabrata Sahoo" />
      </a>
      <br /><br />
      <strong style="font-size: 1.25rem; color: #f8fafc;">Priyabrata Sahoo</strong>
      <br />
      <span style="color: #94a3b8; font-size: 0.95rem;">Full-Stack Software Engineer & Platform Architect</span>
    </td>
  </tr>
  <tr style="background: transparent; border: none;">
    <td align="center" style="border: none; padding-bottom: 24px;">
      <a href="https://github.com/priyabratasahoo780" target="_blank">
        <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Profile" />
      </a>
      &nbsp;&nbsp;
      <a href="https://www.linkedin.com/in/priyabrata-sahoo/" target="_blank">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Profile" />
      </a>
    </td>
  </tr>
</table>

---

<div align="center">

<h3>🚀 Deciphering global datasets securely with low-latency APIs.</h3>

<br />

<a href="#-human-capital-analytics--backend-engine">
  <img src="https://img.shields.io/badge/Back_to_Top-ff6038?style=for-the-badge&logo=arrow-up&logoColor=white" alt="Back to Top" />
</a>

</div>
