import { DB_NAME } from "../constants.js";
import mongoose from "mongoose";
import express from "express";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(connection);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
