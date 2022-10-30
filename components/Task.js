import React from "react";
import TaskTable from "./taskTable";

export default function Task() {
  return (
    <div className="taskContainer">
      <div className="addTask">
        <button type="submit" className="btn btn-primary">
          Add task
        </button>
      </div>
      <TaskTable />
    </div>
  );
}
