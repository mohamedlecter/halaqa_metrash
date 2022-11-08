import React, { useState } from "react";
import Header from "../components/header";
import { useSelector, useDispatch } from "react-redux";
import { toggleChangeAction } from "../redux/reducer";
import AnnouncmentsTable from "../components/announcmentsTable";
import AddAnnouncement from "../components/AddAnnouncement";
import Link from "next/link";

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
          <button onClick={handler} type="submit" className="btn btn-primary">
            Add announcement
          </button>
        </div>
        {visable ? <AddAnnouncement /> : <></>}
        <AnnouncmentsTable />
      </div>
    </div>
  );
}
