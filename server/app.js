import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/routes.js";
import connectMongoDB from "./db/connectMongoDB.js";

const app = express();

dotenv.config();

app.use(express.json());

// cors
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, //for headers cookies
  })
);

const PORT = process.env.PORT || 3000;

app.use("/api", router);

app.listen(PORT, () => {
  connectMongoDB();
  //   feedDataToDb();  //call only once
  console.log(`Server running on port ${PORT}`);
});
