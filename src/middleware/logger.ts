import { NextFunction, Request, Response } from "express";

// Middleware: Logs incoming HTTP requests with timestamp, method, and URL
export const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Log the current date/time, HTTP method, and requested URL
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);

  // Call next middleware or route handler
  next();
};