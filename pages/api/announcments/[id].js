// import { announcments } from "../../../model/announcments";
import { runMiddleware } from "../../../database/rumMiddleware";
import Morgan from "morgan";
import connect from "../../../database/mongodb";
import Tasks from "../../../model/task";

export default async (req, res) => {
  const {
    method,
    body,
    query: { id },
  } = req;
  const morgan = Morgan("dev");
  connect().catch(() => res.status(405).json({ error: "Error in connection" }));

  switch (method) {
    case "GET":
      try {
        const announcment = await announcments.findById(id);
        if (!announcment)
          return res.status(404).json({ msg: "announcment doesn't exists" });
        await runMiddleware(req, res, morgan);
        return res.status(200).json(announcment);
      } catch (err) {
        return res.status(400).json({ msg: err.message });
      }
    case "DELETE":
      try {
        const deletedAnnouncment = await announcments.findByIdAndDelete(id);
        if (!deletedAnnouncment)
          return res.status(404).json({ msg: " Announcment doesn't exists" });
        await runMiddleware(req, res, morgan);
        return res.status(204).json();
      } catch (err) {
        return res.status(400).json({ msg: err.message });
      }
    case "PUT":
      try {
        const updatedAnnouncment = await Tasks.findByIdAndUpdate(id, body);

        if (!updatedAnnouncment)
          return res.status(404).json({ msg: "Announcment doesn't exists" });
        return res.status(200).json(updatedAnnouncment);
      } catch (err) {
        return res.status(400).json({ msg: err.message });
      }
    default:
      return res.status(400).json({ msg: "This method is not supported" });
  }
};
