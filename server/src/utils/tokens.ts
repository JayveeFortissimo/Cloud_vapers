import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const accessToken = (payload: object) => {
	return jwt.sign(payload, process.env.JWT_SECRET_KEY as string, {
		expiresIn: "1h",
	});
};

export const verifyToken = (token: string) => {
	
};
