import {
  addAnnouncment,
  deleteAnnouncment,
  getAnnouncments,
  updateAnnouncment,
  getStudents,
} from "../../database/controller";
import connect from "../../database/mongodb";

export default function handler(req, res) {
  connect().catch(() => res.status(405).json({ error: "Error in connection" }));

  const { method } = req;
  switch (method) {
    case "GET":
      getAnnouncments(req, res);
      break;
    case "POST":
      addAnnouncment(req, res);
      break;
    case "PUT":
      updateAnnouncment(req, res);
      break;
    case "DELETE":
      deleteAnnouncment(req, res);
      break;
  }
}
