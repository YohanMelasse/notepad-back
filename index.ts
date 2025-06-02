import express from "express";
import "dotenv/config";

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const port = process.env.PORT;
app.listen(port, () => {
  `console is running on ${process.env.BASR_URL}: ${process.env.PORT} `
});