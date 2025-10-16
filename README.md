# HNGxiii Stage Zero Backend Task

## Description

A RESTful API built with Express.js and TypeScript that serves personal information along with random cat facts. This API implements proper error handling, timeout mechanisms, and follows REST principles.

## Tech Stack

- Node.js
- Express.js
- TypeScript
- CORS

## Project Structure

```
src/
├── app.ts           # Application entry point
├── cat_service.ts   # Cat facts service implementation
```

## Prerequisites

- Node.js (v14 or higher)
- pnpm (v10.14.0)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/PaulAjii/hngxiii-stage-zero-backend-task.git
cd hngxiii-stage-zero-backend-task
```

2. Install dependencies:

```bash
pnpm install
```

## Running the Application

Development mode with hot reload:

```bash
pnpm dev
```

Production build and start:

```bash
pnpm build
pnpm start
```

The server runs on `http://localhost:3000` by default.

## API Documentation

### GET

```bash
\me
```

Returns user information and a random cat fact.

#### Success Response

**Code:** 200 OK

```json
{
  "status": "success",
  "user": {
    "email": "peepeeajii@gmail.com",
    "name": "Paul Ajijola",
    "stack": "Node.js/Express"
  },
  "timestamp": "2023-09-14T12:00:00.000Z",
  "fact": "A domestic cat can run at speeds of 30 mph."
}
```

#### Error Responses

**Code:** 504 Gateway Timeout

```json
{
  "status": "error",
  "message": "Request timeout",
  "timestamp": "2023-09-14T12:00:00.000Z"
}
```

**Code:** 500 Internal Server Error

```json
{
  "status": "error",
  "message": "Internal Server Error",
  "timestamp": "2023-09-14T12:00:00.000Z"
}
```

## Features

- Timeout handling (5 seconds)
- CORS enabled
- TypeScript support
- Error handling
- Request abort controller
- JSON responses

## Scripts

- `pnpm start` - Run production build
- `pnpm dev` - Run development server
- `pnpm build` - Build TypeScript code

## Dependencies

```json
{
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^5.1.0"
  },
  "devDependencies": {
    "@types/cors": "^2.8.19",
    "@types/express": "^5.0.3",
    "@types/node": "^24.8.0",
    "@typescript-eslint/eslint-plugin": "^8.46.1",
    "@typescript-eslint/parser": "^8.46.1",
    "ts-node-dev": "^2.0.0",
    "typescript": "^5.9.3"
  }
}
```

## Configuration

The application uses TypeScript with the following key configurations:

- Target: ES2020
- Module: CommonJS
- Strict mode enabled
- ESModule interop enabled

## Author

Paul Ajijola  
Email: peepeeajii@gmail.com

## License

ISC

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request
