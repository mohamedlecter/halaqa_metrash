import { Schema, models, model } from "mongoose";

const studentSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  qatariId: {
    type: Number,
  },
  mobileNumber: {
    type: Number,
  },
  email: {
    type: String,
  },
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  status: {
    type: String,
  },
});

const Students = models.student || model("student", studentSchema);
export default Students;
