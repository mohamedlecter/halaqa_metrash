import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  staffNo: {
    type: Integer,
    required: false,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  halaqa: {
    type: String,
    required: true,
  },
});

const parentSchema = new mongoose.Schema({
  qatariId: {
    type: Integer,
    required: false,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const studentSchema = new mongoose.Schema({
  studentId: {
    type: Integer,
    required: false,
    unique: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: false,
  },
  grade: {
    type: Integer,
    required: false,
  },
});

module.exports = mongoose.models.User || mongoose.model("User", teacherSchema);
