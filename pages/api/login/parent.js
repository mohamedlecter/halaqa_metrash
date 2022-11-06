import Students from "../../../model/student";
import connect from "../../../database/mongodb";
export default async function handler(req, res) {
  connect().catch(() => res.status(405).json({ error: "Error in connection" }));

  const { email, password } = req.body;
  const user = await Students.findOne({ email, password });
  if (!user) {
    return res.json({ status: "Not able to find the user" });
  } else {
    res.redirect("/parent");
  }
}
