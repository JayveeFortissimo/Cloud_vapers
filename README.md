# ☁️ Cloud Vapers XD

Cloud Vapers is a light, fun side project built "pampaantok lang tuwing gabi" 

Table of contents
- About
- Tech stack
- Project structure (typical)
- Prerequisites
- Quick start 
  - Backend
  - Frontend
  - Database
- Environment variables (.env examples)
- Docker (not yet setup this one)
- Development tips
- Typography & professional fonts 🎨
- Linting & formatting
- Testing
- Contributing
- License & contact

About
-----
Cloud Vapers is a sandbox project for experimenting with:
- React (Vite) + Tailwind + shadcn/ui for the UI
- Express.js with TypeScript for the API
- PostgreSQL as the relational datastore
- ESLint for linting

Tech stack
----------
- Frontend: React 18, Vite
- Styling: Tailwind CSS, shadcn/ui components
- Backend: Node.js, Express.js, TypeScript
- Database: PostgreSQL
- Tooling: ESLint (and optionally Prettier), npm/yarn/pnpm

Project structure (typical)
--------------------------
Monorepo-style:
- /client or /frontend — React + Vite app
- /server or /backend — Express + TypeScript API
- /README.md
- /.env.example

Single-root (both in root):
- /src (contains server and client)
- /README.md

If your repository uses different folder names, substitute them below when running commands.

Prerequisites
-------------
- Node.js >= 18 (or LTS)
- npm, yarn, or pnpm
- PostgreSQL (local or remote)
- (Optional) Docker & Docker Compose

Quick start — local development
-------------------------------

1) Clone the repo
```bash
git clone https://github.com/JayveeFortissimo/Cloud_vapers.git
cd Cloud_vapers
```

2) Backend setup
- Go to the backend folder (adjust name if different):
```bash
cd server
# or: cd backend
```

- Install dependencies:
```bash
npm install
# or: yarn
# or: pnpm install
```

- Create .env (see example below). Typical env variables:
  - PORT (e.g. 4000)
  - DATABASE_URL (postgres://user:password@localhost:5432/cloud_vapers)
  - JWT_SECRET (if you use JWT)
  - NODE_ENV=development

- Start dev server:
```bash
npm run dev
# or: yarn dev
```

- Build / production:
```bash
npm run build
npm run start
```

3) Frontend setup
- In a separate terminal, go to the frontend folder:
```bash
cd ../client
# or: cd ../frontend
```

- Install dependencies:
```bash
npm install
# or: yarn
# or: pnpm install
```

- Create .env (see example below). Typical env variables:
  - VITE_API_URL=http://localhost:4000
  - VITE_SOME_KEY=...
  - For Vite the env vars must start with VITE_

- Start the dev server:
```bash
npm run dev
# or: yarn dev
```

Environment variable examples
-----------------------------
Place a .env or .env.local in the relevant folder(s).

server/.env (example)
```env
PORT=4000
DATABASE_URL=postgres://cloud_user:cloud_password@localhost:5432/cloud_vapers
JWT_SECRET=your_jwt_secret_here
NODE_ENV=development
```

client/.env (example)
```env
VITE_API_URL=http://localhost:4000
VITE_APP_TITLE="Cloud Vapers XD"
```

Optional: Docker Compose
------------------------
Simple docker-compose snippet to run Postgres + pgadmin:

```yaml
version: "3.8"
services:
  db:
    image: postgres:15
    restart: unless-stopped
    environment:
      POSTGRES_USER: cloud_user
      POSTGRES_PASSWORD: cloud_password
      POSTGRES_DB: cloud_vapers
    ports:
      - "5432:5432"
    volumes:
      - db-data:/var/lib/postgresql/data

  pgadmin:
    image: dpage/pgadmin4
    environment:
      PGADMIN_DEFAULT_EMAIL: admin@example.com
      PGADMIN_DEFAULT_PASSWORD: admin
    ports:
      - "8080:80"

volumes:
  db-data:
```

Run:
```bash
docker compose up -d
```



