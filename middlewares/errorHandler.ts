
import { NextFunction, Request, Response } from "express-serve-static-core";

interface CustomStatusError extends Error {
  statusCode?: number;
}

const errorHandler = (err:CustomStatusError, req: Request, res:Response, next: NextFunction) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Une erreur est survenue, veuillez réessayer.";
  res.status(statusCode).json({ message });
}

export {errorHandler};