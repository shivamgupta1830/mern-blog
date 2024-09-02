import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = (uri) => {
  mongoose
    .connect(uri)
    .then(() => console.log("DB Connected"))
    .catch((err) => console.log(err));
};
connectDB(process.env.MONGO_URI);

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
