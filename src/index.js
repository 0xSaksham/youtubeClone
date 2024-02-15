import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server Running on Port ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB Connection Failed! ", err);
  });
