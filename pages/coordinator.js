import React, { useState } from "react";
import Header from "../components/header";
import StudentTable from "../components/StudentsTable";
import AddStudent from "../components/AddStudent";
import UpdateStudent from "../components/UpdateStudent";
import { useSelector, useDispatch } from "react-redux";
import { toggleChangeAction } from "../redux/reducer";
import { useReducer } from "react";
import Link from "next/link";

const fromReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

export default function coordinator() {
  const [formData, setFormDate] = useReducer(fromReducer, {});

  const visable = useSelector((state) => state.app.client.toggleForm);
  const update = useSelector((state) => state.app.update.toggleForm);

  const dispatch = useDispatch();

  const handler = () => {
    dispatch(toggleChangeAction());
  };

  return (
    <div>
      <Header />
      <div className="taskContainer">
        <div className="options">
          <Link href="/coordinator">
            <h1>Students</h1>
          </Link>

          <Link href="/announcements">
            <h1>Announcments</h1>
          </Link>

          <Link href="/messages">
            <h1>Messages</h1>
          </Link>
        </div>
        <div className="addTask">
          <button onClick={handler} type="submit" className="btn btn-primary">
            Add Students
          </button>
        </div>

        {visable ? <AddStudent /> : <></>}

        <StudentTable />
      </div>
    </div>
  );
}
