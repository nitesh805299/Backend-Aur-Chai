import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

app.on("error", (error) => {
  console.log("ERRR: ", error);
  throw error;
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(
        `Server is running on port ${process.env.PORT || 8000}`
      );
    });
  })
  .catch((error) => {
    console.log("MONGO DB CONNECTION FAILED !!!!", error);
  });