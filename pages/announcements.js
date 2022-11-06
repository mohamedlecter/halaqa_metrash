import React, { useState } from "react";
import Header from "../components/header";
import { useSelector, useDispatch } from "react-redux";
import { toggleChangeAction } from "../redux/reducer";
import MessagesTable from "../components/MessagesTable";
import AnnouncmentsTable from "../components/announcmentsTable";
import AddAnnouncement from "../components/AddAnnouncement";

export default function announcements() {
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
        <div className="addTask">
          <button onClick={handler} type="submit" className="btn btn-primary">
            Add announcement
          </button>
        </div>
        {visable ? <AddAnnouncement /> : <></>}
        {/* {update ? <UpdateTaskForm /> : <></>} */}
        <AnnouncmentsTable />
      </div>
    </div>
  );
}
