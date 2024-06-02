import express from "express";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";
import { fileURLToPath } from "url";
import connectDb from "./config/db.js";
dotenv.config();
const app = express();
//connect db

import teacherCollection from "./models/Teacher.js";

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//serve static files
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/api/teachers", async (req, res) => {
  try {
    const teachers = await teacherCollection.find();
    res.status(201).json(teachers);
  } catch (error) {
    console.log(error.message);
  }
});

app.post("/api/teachers/filter", async (req, res) => {
  const { salary } = req.body;
  const filter = {};
  if (price) filter.salary = { $lt: parseFloat(salary) };
  try {
    const updateTeachers = await teacherCollection.find(filter);
    res.status(201).json({ updateTeachers });
  } catch (error) {
    console.log(error);
  }
});

app.post("/api/teachers", async (req, res) => {
  try {
    const { id } = req.body;

    const existTeacher = await teacherCollection.findOne({ id: Number(id) });
    if (existTeacher) {
      return res.send({ msg: "user exist" });
    }
    const newTeacher = {
      fullname: req.body.fullname,
      id: req.body.id,
      salary: req.body.salary,
      subject: req.body.subject,
    };
    await teacherCollection.insertMany(newTeacher);
    res.sendStatus(201).json({ msg: "created" });
  } catch (error) {
    console.log(error.message);
  }
});

const start = async () => {
  await connectDb();
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
  });
};

start();
function stringToObjectId(stringId) {
  try {
    return new mongoose.Types.ObjectId(stringId);
  } catch (error) {
    console.error("Error converting string to ObjectId:", error.message);
    return null;
  }
}
