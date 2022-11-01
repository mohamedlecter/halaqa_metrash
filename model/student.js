import { Schema, models, model } from "mongoose";

const studentSchema = new Schema({
  // studentId: Number,
  // firstname: String,
  // lastName: String,
  // qatariId: Number,
  // mobileNumber: Number,
  // email: String,
  // password: String,
  // studentId: {
  //   type: Number,
  //   required: false,
  //   unique: true,
  // },
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
    required: true,
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
    required: true,
  },
});

const Students = models.student || model("student", studentSchema);
export default Students;
