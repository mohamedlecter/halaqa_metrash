import React, { useState } from "react";
import Header from "../components/header";
import StudentTable from "../components/StudentsTable";
import AddStudent from "../components/AddStudent";
import UpdateStudent from "../components/UpdateStudent";

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
            Add Students
          </button>
        </div>
        {visable ? Add ? <AddStudent /> : <UpdateStudent /> : <></>}
        <StudentTable />
      </div>
    </div>
  );
}
