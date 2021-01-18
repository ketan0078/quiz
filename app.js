import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import quizroute from "./routes/quizroute.js";
import userroute from "./routes/userroute.js";
import cors from "cors";
import path from "path";

const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();

connectDB();

app.use(quizroute);
app.use(userroute);
const __dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("api is running");
  });
}

const port=process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is up and running on ${port}`);
});
