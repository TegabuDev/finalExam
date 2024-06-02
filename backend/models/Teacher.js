import mongoose from "mongoose";

//change
const TeacherSchema = new mongoose.Schema({
  fullname: String,
  id: Number,
  salary: Number,
  subject: String,
});

const teacherCollection = new mongoose.model("Teacher", TeacherSchema);

export default teacherCollection;
