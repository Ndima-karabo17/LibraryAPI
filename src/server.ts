import express, { Express } from 'express';
import bodyParser from "body-parser";
import { loggerMiddleware } from "./middleware/logger";
import router from "./routes/author";
import { notFoundHandling } from "./middleware/error";

/* 
 * Initialize Express application
 * Sets up JSON parsing, middleware, routes, and error handling
 */
const app: Express = express();
const PORT = process.env.PORT || 3000;

//? Middleware to parse incoming JSON requests
app.use(express.json());
app.use(bodyParser.json()); // Optional if you only use express.json()

//? Custom logger middleware to log incoming requests
app.use(loggerMiddleware);

//! Main routes
app.use('/', router);

//! 404 handler middleware for unknown routes
app.use(notFoundHandling);

//* Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});