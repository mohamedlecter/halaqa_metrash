import React from "react";
import AddTaskForm from "./AddTaskForm";
import UpdateTaskForm from "./UpdateTaskForm";

export default function Form() {
  const Add = true;

  return <div>{Add ? <AddTaskForm /> : <UpdateTaskForm />}</div>;
}
