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

More features
-
Query parameters for filtering, sorting, and pagination

Validation middleware for request payloads

Centralized error handling

Logger middleware to track requests

Tech Stack
-
Node.js

Express.js

TypeScript

Nodemon (development)

How to run and install dependencies
-
npm install
npm install express-validator

npm run run dev

Using VS code

