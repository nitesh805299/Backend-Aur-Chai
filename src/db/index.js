import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dns from "node:dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);
const connectDB = async () => {
  const mongoUri = process.env.MONGODB_URI?.trim();

  if (!mongoUri) {
    throw new Error("MONGODB_URI is missing. Add it to the project's .env file.");
  }

  if (/<[^>]+>/.test(mongoUri)) {
    throw new Error(
      "MONGODB_URI contains a placeholder. Replace it with your MongoDB Atlas connection URI."
    );
  }

  try {
    const connectionInstance = await mongoose.connect(mongoUri, {
      dbName: DB_NAME,
    });

    console.log(
      `MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("MONGODB connection error:", error);
    throw error;
  }
};

export default connectDB;


// import mongoose from "mongoose";
// import { DB_NAME } from "../constants.js";


// const connectDB = async () => {
//     try {
//         const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
//     } catch (error) {
//         console.log("MONGODB connection FAILED ", error);
//         process.exit(1)
//     }
// }

// export default connectDB