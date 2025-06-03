import {Request, Response, NextFunction} from "express-serve-static-core";
import { InternalServerError } from "../utils/customErrors";

const catchErrors = (
  fn: (req: Request, res: Response, next: NextFunction) => Promise<any>
) => {
   return async (req:Request, res:Response, next:NextFunction) => {
    try {
      await fn(req, res, next)
    } catch (error) {
      console.error(error);
      return next(new InternalServerError("Erreur interne au serveur"));
    }
  }
}

export {catchErrors};


