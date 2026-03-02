import { NextFunction, Request, Response } from "express";

// Middleware: Handle requests to unknown routes (404 Not Found)
export const notFoundHandling = (req: Request, res: Response, next: NextFunction) => {
  // Respond with 404 status code and JSON error message
  res.status(404).json({
    error: "NotFound",
    message: `The requested URL ${req.originalUrl} was not found on this server.`
  });

  // Call next middleware (optional here, as response is already sent)
  next();
};