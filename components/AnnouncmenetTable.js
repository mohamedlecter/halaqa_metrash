import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { BiEdit, BiTrashAlt } from "react-icons/bi";
import { deleteTask, getStudents, getTask } from "../lib/helper";
import { useQuery } from "react-query";
import { useSelector, useDispatch } from "react-redux";
import { toggleChangeAction } from "../redux/reducer";
import Router from "next/router";
import { useRouter } from "next/router";
import { updateAction } from "../redux/reducer";
import { deleteAnnouncment } from "../database/controller";

export default function AnnouncmenetTable() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/announcments`);
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        setData(actualData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div className="AnnouncmentsContainer">
      <div className="Announcment">
        {data &&
          data.announcment.map((obj, i) => <Announcment {...obj} key={i} />)}
      </div>
    </div>
  );
}

function Announcment({ _id, title, body }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const onUpdate = () => {
    dispatch(updateAction());
  };

  const onDelete = () => {
    console.log(_id);
    deleteAnnouncment(_id);
    setTimeout(() => {
      router.reload();
    }, 0.5 * 1000);
  };

  return (
    <div>
      <h1>{title}</h1>
      <h2>{body}</h2>
      <div className="tableBtns">
        <button className="tableBtn" onClick={onUpdate}>
          <BiEdit size={25} color={"rgba(34,197,94)"}></BiEdit>
        </button>
        <button className="tableBtn">
          <BiTrashAlt
            size={25}
            color={"rgba(244,63,94)"}
            onClick={onDelete}
          ></BiTrashAlt>
        </button>
      </div>
    </div>
  );
}
