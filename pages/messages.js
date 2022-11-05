import React, { useState } from "react";
import Header from "../components/header";
import { useSelector, useDispatch } from "react-redux";
import { toggleChangeAction } from "../redux/reducer";
import MessagesTable from "../components/MessagesTable";

export default function messages() {
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
        {/* <div className="addTask">
          <button onClick={handler} type="submit" className="btn btn-primary">
            Add tasks
          </button>
        </div> */}
        <MessagesTable />
      </div>
    </div>
  );
}
