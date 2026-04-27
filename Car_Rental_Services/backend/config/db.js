import mongoose from "mongoose";
export const connectDB = async () => {
  
    await mongoose.connect("mongodb+srv://cartest:cartech@cluster0.zmqe6nc.mongodb.net/carRentalServicesTesting").then(() =>console.log("Connected to MongoDB"));
    }
