import express, { request, response } from "express";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";
import "dotenv/config.js";
// parsing request body
const app = express();

// CORS
app.use(cors());

app.use(express.json());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("mern stack tuttorial");
});

app.use("/books", booksRoute);

mongoose
  .connect(process.env.mongoURl)
  .then(() => {
    console.log("App is Connected to Database");
    app.listen(process.env.PORT, () => {
      console.log(`App is listening to Port: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
