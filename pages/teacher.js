import React, { useState } from "react";
import Header from "../components/header";
import TaskTable from "../components/taskTable";
import AddTaskForm from "../components/AddTaskForm";
import UpdateTaskForm from "../components/UpdateTaskForm";

export default function admin() {
  const [visable, setVisable] = useState(false);
  const handler = () => {
    setVisable(!visable);
  };
  const Add = true;

  return (
    <div>
      <Header />
      <div className="taskContainer">
        <div className="addTask">
          <button onClick={handler} type="submit" className="btn btn-primary">
            Add tasks
          </button>
        </div>
        {visable ? Add ? <AddTaskForm /> : <UpdateTaskForm /> : <></>}
        <TaskTable />
      </div>
    </div>
  );
}
