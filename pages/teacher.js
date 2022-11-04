import React, { useState } from "react";
import Header from "../components/header";
import TaskTable from "../components/taskTable";
import AddTaskForm from "../components/AddTaskForm";
import UpdateTaskForm from "../components/UpdateTaskForm";
import { useSelector, useDispatch } from "react-redux";
import { toggleChangeAction } from "../redux/reducer";

export default function teacher() {
  const visable = useSelector((state) => state.app.client.toggleForm);
  const update = useSelector((state) => state.app.update.toggleForm);

  const dispatch = useDispatch();

  const handler = () => {
    dispatch(toggleChangeAction());
  };
  console.log("visable: " + visable);
  console.log("update: " + update);

  return (
    <div>
      <Header />
      <div className="taskContainer">
        <div className="addTask">
          <button onClick={handler} type="submit" className="btn btn-primary">
            Add tasks
          </button>
        </div>
        {visable ? <AddTaskForm /> : <></>}
        {update ? <UpdateTaskForm /> : <></>}
        <TaskTable />
      </div>
    </div>
  );
}
