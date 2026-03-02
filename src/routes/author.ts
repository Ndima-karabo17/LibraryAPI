import { Router, Request, Response } from "express";
import { body, param, validationResult } from 'express-validator';
import { createBook, getAllBooks, getBookById } from "../controllers/authors";

const router = Router();

//* Route: GET all books
router.get("/", getAllBooks);

//* Route: GET a single book by ID with validation
router.get(
  '/:id', 
  [
    //! Validate that ID is an integer
    param("id").isInt().withMessage("ID must be an integer")
  ],
  (req: Request, res: Response) => {
    const errors = validationResult(req);

    //? Return 400 if validation fails
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //? Call controller to get book by ID
    getBookById(req, res);
  }
);

//? Route: POST a new book with body validation
router.post(
  '/',
  [
    //? Validate required fields
    body('authorName').notEmpty().withMessage('Author name is required'),
    body('title').notEmpty().withMessage('Every book must have a title'),
    body('year').isInt().withMessage('Year must be a valid integer')
  ],
  (req: Request, res: Response) => {
    const errors = validationResult(req);

    //! Return 400 if validation fails
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //? Call controller to create a new book
    createBook(req, res);
  }
);

export default router;