import express from "express";
import "dotenv/config";
import cors from "cors";
import { router } from "./routes/router";
import { NextFunction } from "express-serve-static-core";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();
const port = process.env.PORT;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(
    cors({
        origin: [
            'http://localhost',
            'http://127.0.0.1',
            'http://127.0.0.1:5173',
            'http://localhost:5173',
        ],
        allowedHeaders: ["Authorization", "Content-Type", "Accept"]
    })
);

app.use((req, res, next: NextFunction) => {
  res.removeHeader("X-Powered-By");
  next();
});

app.use("/api", router);
app.use(errorHandler);

app.listen(port, () => {
  `console is running on ${process.env.BASR_URL}: ${process.env.PORT} `
});