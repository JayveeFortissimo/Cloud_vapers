# Cloud Vapers XD

Cloud Vapers is a light, fun side project built "pampaantok lang tuwing gabi" — made for experimenting with modern web stacks and messing around with UI/UX. It's written with a React + Vite frontend and a TypeScript + Express backend, uses PostgreSQL for relational data, and is styled with Tailwind + shadcn/ui. ESLint is included for code quality.

A little joke in Tagalog: "Hello this project is eme eme lang hahahahha bakit ba XD if basher ka hindi ka para d2 kaya alis de joke" — it's just for fun. If you're visiting the repo, welcome! I hope you find the setup clear and easy to run.

Table of contents
- About
- Tech stack
- Project structure (typical)
- Prerequisites
- Quick start (local)
  - Backend
  - Frontend
  - Database
- Environment variables (.env examples)
- Docker (optional)
- Development tips
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
Purpose (as the author says): "Pampaantok lang tuwing gabi" — just a chill project for late-night tinkering.

Tech stack
----------
- Frontend: React 18, Vite
- Styling: Tailwind CSS, shadcn/ui components
- Backend: Node.js, Express.js, TypeScript
- Database: PostgreSQL
- Tooling: ESLint (and optionally Prettier), npm/yarn/pnpm

Project structure (typical)
--------------------------
Your repository might look like one of these common layouts. Replace folder names below if your repo uses different names.

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
# Typical script uses ts-node-dev or nodemon + ts-node
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
# This runs Vite and opens your app at http://localhost:5173 by default
```

Database setup (Postgres)
-------------------------
Create a database and user for local development. Replace names/passwords as needed.

Using psql:
```bash
# connect as postgres user
psql -U postgres

# inside psql:
CREATE DATABASE cloud_vapers;
CREATE USER cloud_user WITH ENCRYPTED PASSWORD 'cloud_password';
GRANT ALL PRIVILEGES ON DATABASE cloud_vapers TO cloud_user;
\q
```

If your project uses a migration tool (Prisma, TypeORM, Knex), run the migrations:
- Prisma example:
```bash
npx prisma migrate dev --name init
```
- TypeORM/Knex: run your migration scripts defined in package.json:
```bash
npm run migrate
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

If you prefer, add a .env.example file to the repo with placeholder values to help contributors.

Optional: Docker Compose
------------------------
Here is a simple docker-compose snippet to run Postgres + pgadmin. Adjust and expand to also run your backend and frontend in containers if you want.

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

Development tips
----------------
- Tailwind: after pulling the repo, if you do changes to tailwind.config or postcss, restart the Vite server.
- shadcn: this project likely uses component-driven UI utilities — check the frontend/src/components (or app) for their usage.
- If you add new environment variables for the frontend remember to prefix them with VITE_ so Vite exposes them to the client.

Linting & formatting
--------------------
ESLint is included. Run:
```bash
npm run lint
# or: npm run lint:fix
```
Optionally add Prettier for formatting or a pre-commit hook like Husky to enforce checks.

Testing
-------
If the repo has test scripts, run:
```bash
npm test
# or: npm run test:watch
```
If no tests exist yet, consider adding unit tests for backend services and React components.

Contributing
------------
Thanks for checking out Cloud Vapers! A few helpful contributions:
- Open issues for bugs & feature requests
- Follow the code style (ESLint rules)
- If you add routes / DB changes, include migration scripts and update the README
- Add a clear PR description and link issues where relevant

License & contact
-----------------
Add a LICENSE file (e.g., MIT) if you want to let others reuse the code. If you want me to add one, tell me which license you prefer.

If you want to add more details (actual folder names, migration tool used like Prisma/TypeORM/Knex, or any run scripts), I can update this README to be exactly tailored to the repo.

What I did and next steps
-------------------------
I drafted an improved README that explains the project, tech stack, and step-by-step instructions for running frontend, backend, and the database locally. Next, tell me:
- the exact folder names used for frontend/backend in the repo (client, frontend, server, backend, etc.)
- whether you use Prisma, TypeORM, Knex, or another migration tool (or none)
- any real environment variables or scripts already defined in package.json that I should include

With that info I will update the README to include exact commands and a complete .env.example tailored to your repo so visitors can get started in minutes. 😊
