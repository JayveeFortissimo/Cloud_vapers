import { Request, Response, RequestHandler, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const REFRESH_SECRET = process.env.REFRESH_TOKEN_SECRET as string;

export const verifyUserAuthenticationToken: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies["refreshToken"];
  if (!token) return res.status(403).json({ message: "No token" });

  try {
    const users = jwt.verify(token, REFRESH_SECRET) as JwtPayload;
    if (!users) return res.status(403).json({ message: "Invalid token" });
    (req as any).user = users;
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid token" });
  }
};
