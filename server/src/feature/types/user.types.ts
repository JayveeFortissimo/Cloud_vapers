import { JwtPayload } from "jsonwebtoken";

export interface RegisterInputTypes {
  email: string;
  username: string;
  password: string;
}

export interface LoginInputTypes {
  email: string;
  password: string;
}


export interface AuthRequest extends Request {
  user?: JwtPayload;
}