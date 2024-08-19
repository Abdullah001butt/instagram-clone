import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import mongoDB from "./utils/db.js";  // make sure to add .js extension at the end while there will be error.
dotenv.config({});
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Welcome to the Instagram Clone API",
    success: true,
  });
});

// Middlewares configuration

app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({ extended: true }));
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));

// Routes configuration

app.listen(PORT, () => {
  mongoDB();
  console.log(`Server listening on port ${PORT}`);
});
