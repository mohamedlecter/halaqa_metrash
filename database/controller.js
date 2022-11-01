import Students from "../model/student";

// get:http://localhost:3000/api/students

export async function getStudents(req, res) {
  try {
    const students = await Students.find({});
    if (!students) {
      return res.status(404).json({ error: "Data not found" });
    }
    res.status(200).json({ students });
  } catch (error) {
    res.status(404).json({ error: "Error while fetching data" });
  }
}

// post :http://localhost:3000/api/students

export async function addStudent(req, res) {
  try {
    const formData = req.body;
    if (!formData) {
      return res.status(404).json({ error: "No data is found from the form" });
    } else {
      Students.create(formData, (err, data) => {
        return res.status(200).json(data);
      });
    }
    // res.status(200).json({ students });
  } catch (error) {
    res.status(404).json({ error });
  }
}

// put :http://localhost:3000/api/students

export async function updateStudent(req, res) {
  try {
    const { studentId } = req.query;
    const formData = req.body;
    if (studentId && formData) {
      await Students.findByIdAndUpdate(studentId, formData);
      console.log("studentId: " + studentId);
      res.status(200).json(formData);
    }
    res.status(404).json({ error: "could not update student" });

    // res.status(200).json({ students });
  } catch (error) {
    res.status(404).json({ error });
  }
}

// detlet :http://localhost:3000/api/students

export async function deleteStudent(req, res) {
  try {
    const { studentId } = req.query;
    if (studentId) {
      const student = await Students.findByIdAndDelete(studentId);
      res.status(200).json({ student });
    }
    res.status(404).json({ error: "could not update student" });

    // res.status(200).json({ students });
  } catch (error) {
    res.status(404).json({ error: "Error while deleting the student " });
  }
}
