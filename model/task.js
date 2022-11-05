import { Schema, models, model } from "mongoose";

const tasksSchema = new Schema({
  taskId: {
    type: Number,
    unique: false,
  },
  studentId: {
    type: Number,
    unique: false,
  },
  surahId: {
    type: Number,
    unique: false,
  },
  surahName: {
    type: String,
    unique: false,
  },
  fromAya: {
    type: Number,
    unique: false,
  },
  toAya: {
    type: Number,
    unique: false,
  },
  type: {
    type: String,
    unique: false,
  },
  dueDate: {
    type: Date,
    unique: false,
  },
  completedDate: {
    type: Date,
    unique: false,
  },
  masteryLevel: {
    type: String,
    unique: false,
  },
  comment: {
    type: String,
    unique: false,
  },
});

const Tasks = models.task || model("task", tasksSchema);
export default Tasks;
