import {
  addTask,
  deleteTask,
  getTask,
  updateTask,
} from "../../database/controller";
import connect from "../../database/mongodb";

export default function handler(req, res) {
  connect().catch(() => res.status(405).json({ error: "Error in connection" }));

  const { method } = req;
  switch (method) {
    case "GET":
      getTask(req, res);
      break;
    case "POST":
      addTask(req, res);
      break;
    case "PUT":
      updateTask(req, res);
      break;
    case "DELETE":
      deleteTask(req, res);
      break;
  }
}
