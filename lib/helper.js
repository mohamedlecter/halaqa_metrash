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
      headers: { "ontent-type": "application/json" },
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
      `http://localhost:3000/api/students?studentId=${userId}`,
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
      `http://localhost:3000/api/students?studentId=${userId}`,
      Options
    );
    const json = await res.json;
    return json;
  } catch (error) {
    return error;
  }
}

export async function getTask() {
  const res = fetch("http://localhost:3000/api/tasks");
  const json = await res.json;
  return json;
}

export async function addTask(formData) {
  try {
    const Options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };
    const res = await fetch("http://localhost:3000/api/tasks", Options);
    const json = await res.json;
    return json;
  } catch (error) {
    return error;
  }
}

export async function updateTask(taskId, formData) {
  try {
    const Options = {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(formData),
    };
    const res = await fetch(
      `http://localhost:3000/api/tasks?taskId=${taskId}`,
      Options
    );
    const json = await res.json;
    return json;
  } catch (error) {
    return error;
  }
}

export async function deleteTask(taskId) {
  try {
    const Options = {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    };
    const res = await fetch(
      `http://localhost:3000/api/tasks?taskId=${taskId}`,
      Options
    );
    const json = await res.json;
    return json;
  } catch (error) {
    return error;
  }
}
