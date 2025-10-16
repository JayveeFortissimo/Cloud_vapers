import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import routes from "./routes/route";

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();
app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

export { app, PORT };
