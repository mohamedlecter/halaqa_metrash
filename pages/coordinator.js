import React, { useState } from "react";
import Header from "../components/header";
import StudentTable from "../components/StudentsTable";
import AddStudent from "../components/AddStudent";
import UpdateStudent from "../components/UpdateStudent";
import { useSelector, useDispatch } from "react-redux";
import { toggleChangeAction } from "../redux/reducer";
import { useReducer } from "react";

const fromReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

export default function admin() {
  const [formData, setFormDate] = useReducer(fromReducer, {});

  const visable = useSelector((state) => state.app.client.toggleForm);
  const update = useSelector((state) => state.app.update.toggleForm);
  const formId = useSelector((state) => state.app.update.formId);

  const dispatch = useDispatch();

  const handler = () => {
    dispatch(toggleChangeAction());
  };
  console.log(visable);

  return (
    <div>
      <Header />
      <div className="taskContainer">
        <div className="addTask">
          <button onClick={handler} type="submit" className="btn btn-primary">
            Add Students
          </button>
        </div>
        {visable ? AddStudent({ formId, formData, setFormDate }) : <></>}
        {update ? UpdateStudent({ formId, formData, setFormDate }) : <></>}
        {/* {visable ? <AddStudent /> : <UpdateStudent />} */}
        <StudentTable />
      </div>
    </div>
  );
}
