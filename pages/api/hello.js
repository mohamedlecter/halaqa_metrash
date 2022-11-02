import connect from "../../database/mongodb";

export default function handler(req, res) {
  connect();
  res.status(200).json({ name: "test" });
}
