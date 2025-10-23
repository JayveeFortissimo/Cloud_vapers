import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const databaseConnection = new Pool({
	user: process.env.USER as string,
	host: process.env.HOST as string,
	database: process.env.DATABASE as string,
	password: process.env.PASSWORD as string,
	port: Number(process.env.DATABASE_PORT),
});

const connectDb = async () => {
	try {
		const client = await databaseConnection.connect();
		console.log("✅ Initial database connection successful");
		client.release();
	} catch (err) {
		console.error("❌ Initial database connection failed", err);
		process.exit(1);
	}
};
connectDb();

export { databaseConnection };
