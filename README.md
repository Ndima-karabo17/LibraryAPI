## Library Management System API

A RESTful API built with TypeScript + Express.js that manages a community library’s Authors and Books.
This API supports CRUD operations, validation, error handling, and logging, enabling librarians to 
efficiently manage book and author records.

| Feature                     | Description              |
| --------------------------- | ------------------------ |
| **Create New Author**       | `POST /authors`          |
| **List All Authors**        | `GET /authors`           |
| **Get Author by ID**        | `GET /authors/:id`       |
| **Update Author**           | `PUT /authors/:id`       |
| **Delete Author**           | `DELETE /authors/:id`    |
| **List Books by an Author** | `GET /authors/:id/books` |
| **Create New Book**         | `POST /books`            |
| **List All Books**          | `GET /books`             |
| **Get Book by ID**          | `GET /books/:id`         |
| **Update Book**             | `PUT /books/:id`         |
| **Delete Book**             | `DELETE /books/:id`      |

## Additional Capabilities

Query parameters for filtering, sorting, and pagination
Validation middleware for request payloads
Centralized error handling
Logger middleware to track incoming requests


## Tech Stack

Runtime: Node.js
Language: TypeScript
Dev Tools: Nodemon, tsx


## Getting Started
Prerequisites
-

Node.js (v18+)
npm
VS Code (recommended)

## Installation

- npm install
- npm install express-validator


## Running the Server
- Development (with auto-reload)
- npm run dev

# Production
npm start

## Example Requests

- Create a new author:
powershell$body = '{"name":"George Orwell","nationality":"British"}'
curl.exe -X POST http://localhost:3000/authors -H "Content-Type: application/json" -d $body
- Get all books:
powershellcurl.exe http://localhost:3000/books
- Delete a book:
powershellcurl.exe -X DELETE http://localhost:3000/books/1