import { Schema, models, model } from "mongoose";

const announcmentsSchema = new Schema({
  announcmentId: Number,
  title: String,
  body: String,
  date: Date,
});

const Announcments =
  models.announcments || model("announcments", announcmentsSchema);
export default Announcments;
