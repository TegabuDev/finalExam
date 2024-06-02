import mongoose from "mongoose";

//change
const ExampleSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
});

const userCollection = new mongoose.model("example", ExampleSchema);

export default userCollection;
