import mongoose from "mongoose";

// Connect to MongoDB

const mongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("mongoDB connected successfully");
  } catch (error) {
    console.log(error);
  }
};

export default mongoDB;
