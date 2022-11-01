const BASE_URL = "http://localhost:3000";

export async function getStudents() {
  const res = fetch("http://localhost:3000/api/students");
  const json = await res.json;
  return json;
}

export async function addStudent(formData) {
  try {
    const Options = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(formData),
    };
    const res = await fetch("http://localhost:3000/api/students", Options);
    const json = await res.json;
    return json;
  } catch (error) {
    return error;
  }
}

export async function updateStudent(userId, formData) {
  try {
    const Options = {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(formData),
    };
    const res = await fetch(
      `http://localhost:3000/api/students/${userId}`,
      Options
    );
    const json = await res.json;
    return json;
  } catch (error) {
    return error;
  }
}

export async function deleteStudent(userId) {
  try {
    const Options = {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    };
    const res = await fetch(
      `http://localhost:3000/api/students/${userId}`,
      Options
    );
    const json = await res.json;
    return json;
  } catch (error) {
    return error;
  }
}
