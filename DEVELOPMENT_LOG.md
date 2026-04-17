# Development Log

This file tracks all structural, architectural, and component-level modifications made during the development of the Smart Task Manager. It acts as a historical record to assist in error resolution, tracking context, and understanding the rationale behind technical decisions.

## Formatting Standard
For each modification, document the following:
* **Date & Time:**
* **File Modified/Created:**
* **Action:** [Created / Modified / Deleted]
* **Function/Component Name:**
* **Rationale:** (Why was it created, modified, or removed? What purpose does it serve?)
* **Details:** (Any specific logic, dependencies, or notable changes)

---

### [2026-04-17] Initial Project Documentation
* **File Created:** `README.md`
* **Action:** Created
* **Function/Component Name:** N/A
* **Rationale:** Established the primary project documentation as requested to make the repository professional and technical.
* **Details:** Summarized the `Smart_Task_Manager_SRS.json` document. Included sections for Project Overview, Key Features, Technology Stack, System Architecture, and Constraints.

### [2026-04-17] Development Log Initialization
* **File Created:** `DEVELOPMENT_LOG.md`
* **Action:** Created
* **Function/Component Name:** N/A
* **Rationale:** Created to store context, keep track of necessary modifications in detail, and make future error resolution and tracking history easier.
* **Details:** Defined the standard format for logging all subsequent changes to the project.

### [2026-04-17] Frontend Next.js Initialization
* **File Modified/Created:** `frontend/` (Directory)
* **Action:** Created
* **Function/Component Name:** N/A
* **Rationale:** Initialized the React/Next.js frontend to begin executing the UI implementation as detailed in the SRS and mockup.
* **Details:** Used `create-next-app` with TypeScript, Tailwind CSS, App Router, and npm. Installed `lucide-react` for UI icons.

### [2026-04-17] Core Dashboard UI Components
* **File Modified/Created:** `Sidebar.tsx`, `Header.tsx`, `layout.tsx`, `page.tsx`
* **Action:** Created & Modified
* **Function/Component Name:** Sidebar, Header, Dashboard (RootLayout)
* **Rationale:** Scaffolded the primary user interface to match the provided dashboard mockup, prioritizing a premium responsive design with the specified coral color theme.
* **Details:** 
  - Created `Sidebar.tsx` with user profile and primary navigation.
  - Created `Header.tsx` with search bar and top-right icon metrics.
  - Modified `layout.tsx` to wrap the app with `Sidebar` and `Header` globally.
  - Overwrote `page.tsx` to implement the main dashboard view, "To Do" card with task items, and "Task Stats" card.

### [2026-04-17] Backend API Scaffolding & Cache Integration
* **File Modified/Created:** `backend/package.json`, `backend/server.js`
* **Action:** Created
* **Function/Component Name:** Express Server, Redis Client
* **Rationale:** Based on SRS Section 5.1 and 5.2, built the baseline backend architecture using Node.js/Express, integrating Redis for caching and routing stubs for Authentication, Tasks, Reminders, and Payments.
* **Details:** Configured environment variables, CORS, established a Redis connection, and set up a health check endpoint.

### [2026-04-17] Containerization & Orchestration Setup
* **File Modified/Created:** `backend/Dockerfile`, `frontend/Dockerfile`, `docker-compose.yml`, `k8s/backend.yaml`, `k8s/redis.yaml`, `frontend/vercel.json`
* **Action:** Created
* **Function/Component Name:** Docker & Kubernetes Configs
* **Rationale:** Complied with SRS Section 11 (Deployment Plan) specifying Docker, Kubernetes, and Vercel hosting.
* **Details:** 
  - Written optimized multi-stage Dockerfiles for frontend and single-stage for backend.
  - Created `docker-compose.yml` linking frontend, backend, redis, and mongo containers for local execution.
  - Authored Kubernetes Deployments and LoadBalancer Services for the backend API and Redis cache (`k8s/` dir) to ensure scalability.
  - Added `vercel.json` for frontend deployment optimization.

### [2026-04-18] Pivot to Native Execution & MongoDB Scaffolding
* **File Modified/Created:** `backend/.env`, `backend/server.js`, `backend/models/User.js`, `backend/models/Task.js`, `backend/models/Reminder.js`
* **Action:** Created & Modified
* **Function/Component Name:** Native Config & Database Schemas
* **Rationale:** The user encountered a `403 Forbidden` error with `wsl --update`, rendering local Docker unusable. Pivoted to a native execution model using MongoDB Atlas and Cloud Redis, circumventing the blocker while adhering exactly to the deployment plan in the SRS.
* **Details:** 
  - Created `.env` file with MongoDB and Redis connection string placeholders.
  - Uncommented and updated `server.js` to actively connect to MongoDB natively.
  - Scaffolded the core database models (`User`, `Task`, `Reminder`) rigorously matching the properties listed in Section 6 (Database Design) of the SRS.

### [2026-04-18] Authentication API (JWT)
* **File Modified/Created:** `backend/controllers/authController.js`, `backend/routes/authRoutes.js`, `backend/middleware/authMiddleware.js`, `backend/server.js`
* **Action:** Created & Modified
* **Function/Component Name:** Auth Controller & Routes
* **Rationale:** SRS Section 3.4 requires User registration, login, and JWT-based authentication. Implemented secure user onboarding with `bcryptjs` for password hashing and `jsonwebtoken` for issuing stateless session tokens.
* **Details:** 
  - Installed `bcryptjs` and mapped `register` / `login` functions to hash passwords and verify credentials against the `User` schema.
  - Built `authMiddleware.js` (`protect`) to intercept and validate JWTs in the `Authorization` header for securing future task APIs.
  - Wired `/api/auth` in `server.js` to route traffic into `authRoutes.js`.

### [2026-04-18] Task CRUD API & Redis Cache Integration
* **File Modified/Created:** `backend/controllers/taskController.js`, `backend/routes/taskRoutes.js`, `backend/server.js`
* **Action:** Created & Modified
* **Function/Component Name:** Task Controller
* **Rationale:** Developed the core Task Management functionality required by SRS Section 3.1 & 3.2. Integrated Redis directly into the read/write paths to optimize response times (SRS Section 4.1).
* **Details:** 
  - Implemented `getTasks`, `createTask`, `updateTask`, and `deleteTask`.
  - Injected Redis caching logic: `getTasks` prioritizes cache lookups (`tasks_${req.user.id}`), while write/delete operations automatically invalidate the cache.
  - Applied the JWT `protect` middleware to `/api/tasks` routes so only authenticated users can access their specific data.

### [2026-04-18] Google OAuth Integration
* **File Modified/Created:** `backend/config/passport.js`, `backend/routes/authRoutes.js`, `backend/.env`
* **Action:** Created & Modified
* **Function/Component Name:** Passport OAuth
* **Rationale:** SRS Section 3.4 requires Google OAuth login.
* **Details:** 
  - Installed `passport` and `passport-google-oauth20`.
  - Created Google strategy in `passport.js` to either find existing users by email or register them securely.
  - Implemented `/api/auth/google` and `/google/callback` endpoints.
