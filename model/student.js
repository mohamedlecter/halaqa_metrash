import { Schema, models, model } from "mongoose";

const studentSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  qatariId: {
    type: Number,
    required: true,
  },
  mobileNumber: {
    type: Number,
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  status: {
    type: String,
  },
});

const Students = models.student || model("student", studentSchema);
export default Students;
