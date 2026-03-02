import { Request, Response } from "express";

// In-memory array to store books
// Each book has an id, authorName, title, and year
let books = [
  { id: 1, authorName: 'Jay Shetty', title: '8 Rules of Love', year: 2023 },
  { id: 2, authorName: 'Jay Shetty', title: 'Think Like a Monk', year: 2020 }
];

// Controller: Get all books
export const getAllBooks = (req: Request, res: Response) => {
  // Return the entire books array as JSON
  res.status(200).json(books);
};

// Controller: Get a single book by ID
export const getBookById = (req: Request, res: Response) => {
  const { id } = req.params; // Get ID from route params
  const book = books.find((book) => book.id === parseInt(id)); // Find book by ID

  if (!book) {
    // Return 404 if book not found
    return res.status(404).json({ message: 'Book not found' });
  }

  // Return the found book as JSON
  res.status(200).json(book);
};

// Controller: Create a new book
export const createBook = (req: Request, res: Response) => {
  const { authorName, title, year } = req.body;

  // Validate required fields
  if (!authorName || !title || !year) {
    return res.status(400).json({ message: 'Author name, title, and year are required' });
  }

  // Create a new book object with auto-incremented ID
  const newBook = {
    id: books.length + 1,
    authorName,
    title,
    year
  };

  // Add the new book to the in-memory array
  books.push(newBook);

  // Return the created book with 201 status
  res.status(201).json(newBook);
};