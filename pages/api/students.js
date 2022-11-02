import {
  addStudent,
  deleteStudent,
  getStudents,
  updateStudent,
} from "../../database/controller";
import connect from "../../database/mongodb";

export default function handler(req, res) {
  connect().catch(() => res.status(405).json({ error: "Error in connection" }));

  const { method } = req;
  switch (method) {
    case "GET":
      getStudents(req, res);
      break;
    case "POST":
      addStudent(req, res);
      break;
    case "PUT":
      updateStudent(req, res);
      break;
    case "DELETE":
      // res.status(200).json({ method, name: "DELETE request" });
      deleteStudent(req, res);
      break;
  }
}
