# ☁️ Cloud Vapers XD

Cloud Vapers is a light, fun side project built "pampaantok lang tuwing gabi" — made for experimenting with modern web stacks and messing around with UI/UX. It's written with a React + Vite frontend and a TypeScript + Express backend.  

A little joke in Tagalog: "Hello this project is eme eme lang hahahahha bakit ba XD if basher ka hindi ka para d2 kaya alis de joke" — it's just for fun. If you're visiting the repo, welcome! I hope you have fun exploring. 😄

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

Purpose (as the author says): "Pampaantok lang tuwing gabi" — just a chill project for late-night tinkering. ✨

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

Database setup (Postgres)
-------------------------
Create a database and user for local development. Replace names/passwords as needed.

Using psql:
```bash
psql -U postgres

# inside psql:
CREATE DATABASE cloud_vapers;
CREATE USER cloud_user WITH ENCRYPTED PASSWORD 'cloud_password';
GRANT ALL PRIVILEGES ON DATABASE cloud_vapers TO cloud_user;
\q
```

If your project uses a migration tool (Prisma, TypeORM, Knex), run the migrations:
```bash
npx prisma migrate dev --name init
# or
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

Development tips
----------------
- Tailwind: after pulling the repo, if you change tailwind.config or postcss, restart the Vite server.
- shadcn: this project likely uses component-driven UI utilities — check the frontend/src/components (or app) for their usage.
- If you add new environment variables for the frontend remember to prefix them with VITE_ so Vite exposes them to the client.

Typography & professional fonts 🎨
-------------------------------
Good typography makes a small project feel polished and professional. Below are friendly, practical recommendations and quick copy-paste snippets you can use right away.

1) Recommended font stack
- Use a modern UI font + system fallbacks:
```css
font-family: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
```
Inter is a great general-purpose UI font — neutral, readable, and optimized for interfaces.

2) Add via Google Fonts (quick)
Include in your frontend/index.html <head>:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap" rel="stylesheet">
```
Then set in your CSS:
```css
:root { --font-sans: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; }
html { font-family: var(--font-sans); }
```

3) Tailwind integration (recommended if you use Tailwind)
In tailwind.config.js:
```js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
}
```
Install Inter locally or via Google Fonts as above. Use class names like `font-sans` and adjust sizes with `text-base`, `text-sm`, `leading-relaxed`, etc.

4) Self-hosting / @font-face (better privacy & performance)
If you want to self-host Inter (or another variable font), download the font and add:
```css
@font-face {
  font-family: "InterVar";
  src: url("/fonts/Inter-Variable.woff2") format("woff2");
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}
:root { --font-sans: "InterVar", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; }
```
font-display: swap improves perceived performance and avoids FOIT.

5) Variable fonts
- Use variable (v) fonts when possible — they reduce file size and give you fine-grained weight control (e.g., 400.5).
- Example: Inter Variable (recommended for UI).

6) Accessibility & scale
- Base font-size: 16px (text-base), line-height 1.4—1.6 for body text.
- Ensure sufficient color contrast for text (WCAG AA/AAA where applicable).
- Prefer relative units (rem, em) for scalable UI.

7) Practical CSS snippets
```css
h1 { font-family: var(--font-sans); font-weight: 800; letter-spacing: -0.02em; }
h2 { font-family: var(--font-sans); font-weight: 700; }
p  { font-family: var(--font-sans); font-weight: 400; line-height: 1.6; }
```

8) Performance tips
- Preload critical fonts:
```html
<link rel="preload" href="/fonts/Inter-Variable.woff2" as="font" type="font/woff2" crossorigin>
```
- Use font-display: swap and subsetting (Latin-only) for smaller files.

Linting & formatting
--------------------
ESLint is included. Run:
```bash
npm run lint
# or: npm run lint:fix
```
Optionally add Prettier for formatting or a pre-commit hook like Husky.

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

Final notes
-----------
I added emoji to headings and inline text for friendlier tone, and I added a new "Typography & professional fonts" section with practical guidance (Google Fonts, Tailwind config, self-hosting, variable fonts, accessibility, and performance tips). If you tell me:
- the exact frontend folder name (client/frontend) and
- whether you use Tailwind (and its config) or a different CSS solution,

I can update the README with ready-to-run copy/paste code tailored to your repo, or open a PR that adds the font files and Tailwind config changes for you. 🎯
