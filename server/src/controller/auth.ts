import { Response, Request, RequestHandler } from "express";
import bcrypt from "bcrypt";
import { pool } from "../config/database";
import {accessToken} from "../utils/tokens"

const register: RequestHandler = async (req: Request, res: Response) => {
	const { username, password, email } = req.body;

	try {
		const hashedPassword = await bcrypt.hash(password, 10);

		const isExistingUser = await pool.query(
			"SELECT * FROM usercredentials WHERE email = $1",
			[email.trim()],
		);

		if (isExistingUser.rows.length > 0) {
			res.status(400).json({ message: "User already exists" });
			return;
		}

		await pool.query(
			"INSERT INTO usercredentials (username, password, email) VALUES ($1, $2, $3)",
			[username, hashedPassword, email.trim()],
		);

		res.status(200).json({ message: "User registered successfully!" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal Server Error" });
	}
};

const login: RequestHandler = async (req: Request, res: Response) => {
	const { email, password } = req.body;
	
	try {
		const user = await pool.query(
			"SELECT * FROM usercredentials WHERE email = $1",
			[email.trim()],
		);

		const yourPassword = await bcrypt.compare(password, user.rows[0].password);

		if (!yourPassword) {
			res.status(400).json({ message: "Wrong Password" });
			return;
		}

		const {user_id, username, age} = user.rows[0];

		const accesstoken = accessToken({ user_id, username, age});
		
		console.log(user.rows[0])
		
		res.json({message:"Hello Welcome!"});

	} catch (error) {
		res.status(500).json({ message: "No Email found" });
	}
};



export{register,login}
