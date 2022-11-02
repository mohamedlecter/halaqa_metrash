import { Schema, models, model } from "mongoose";

const tasksSchema = new Schema({
  taskId: Number,
  studentId: Number,
  surahId: Number,
  studentName: String,
  surahName: String,
  fromAya: Number,
  toAya: Number,
  type: String,
  dueDate: Date,
  completedDate: Date,
  masteryLevel: String,
  comment: String,
});

const Tasks = models.task || model("task", tasksSchema);
export default Tasks;
