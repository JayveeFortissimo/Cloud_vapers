import { Request, Response, RequestHandler, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// const REFRESH_SECRET = process.env.REFRESH_TOKEN_SECRET as string;
const ACCESS_SECRET = process.env.ACCESS_TOKEN_SECRET as string;


declare module "express-serve-static-core" {
  interface Request {
    user?: JwtPayload;
  }
}

export const verifyAccessToken: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const auth = req.headers.authorization;
  const token = auth?.split(" ")[1];
  if (!token) return res.status(403).json({ message: "No token" });

  try {
    const users = jwt.verify(token, ACCESS_SECRET) as JwtPayload;
    if (!users) return res.status(403).json({ message: "Invalid token" });
    req.user = users;
    next();
  } catch (err: unknown) {
    return res.status(403).json({ message: err });
  }
};


