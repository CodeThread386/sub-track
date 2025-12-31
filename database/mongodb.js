import mongoose, { Error } from "mongoose";
import { DB_URI } from "../config/env.js";

if(!DB_URI) {
    throw new Error("define a mongodb uri in .env.development.local");
}

const connectToDatabse = async () => {
    try{
        await mongoose.connect(DB_URI);
        console.log("Connected to databse ")
    }
    catch (error) {
        console.error("Error connecting to the database: ",error);
        process.exit(1);
    }
}

export default connectToDatabse;