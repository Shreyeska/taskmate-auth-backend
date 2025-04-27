# TaskMate API

A secure Node.js/Express backend with JWT authentication for managing user tasks.

## Features

- User registration/login with JWT
- HTTP-only cookie sessions
- Task CRUD operations (Create, Read, Delete)
- Protected routes for authenticated users only
- MySQL via Prisma ORM

## Tech Stack

- **Backend**: Node.js, Express
- **Database**: Prisma + MySQL
- **Authentication**: JWT + bcrypt
- **Session**: HTTP-only cookies

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Shreyeska/taskmate-auth-backend.git
cd taskmate-auth-backend
```

### 2. Configure Environment

```bash
PORT=1234
DATABASE_URL="mmysql://user:password@localhost:3306/taskdb"

JWT_SECRET="complex_secret_here"

FRONTEND_URL= "http://localhost:3000"


NODE_ENV=development or prod
DB_PORT=3306
DB_ROOT_PASSWORD=your_secure_root_password
DB_NAME=taskmate-db
DB_USER=your_secure_user
DB_PASSWORD=your_secure_password
```

### 3. Add .env, node_modules to .gitignore

```bash
# .gitignore
.env
/node_modules

```

### 4. Database Setup

```bash
npx prisma migrate dev --name init
npx prisma generate
```

### 5. Run the Server

```bash
npm start
```
