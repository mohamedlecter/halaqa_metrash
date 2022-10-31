import React, { useState } from "react";
import Header from "../components/header";
import Form from "../components/Form";
import TaskTable from "../components/taskTable";
// import Task from "../components/Task";

export default function admin() {
  const [visable, setVisable] = useState(false);
  const handler = () => {
    setVisable(!visable);
  };
  return (
    <div>
      <Header />
      <div className="taskContainer">
        <div className="addTask">
          <button onClick={handler} type="submit" className="btn btn-primary">
            Add task
          </button>
        </div>
        {visable ? <Form /> : <></>}
        <TaskTable />
      </div>
    </div>
  );
}
