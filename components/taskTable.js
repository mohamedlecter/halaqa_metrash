import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { BiEdit, BiTrashAlt } from "react-icons/bi";
import { deleteTask, getStudents, getTask } from "../lib/helper";
import { useQuery } from "react-query";
import { useSelector, useDispatch } from "react-redux";
import { toggleChangeAction } from "../redux/reducer";
import Router from "next/router";
import { useRouter } from "next/router";
export default function TaskTable() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/tasks`);
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
    <div className="tableContainer">
      <Table className="table">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Sura</th>
            <th>Aya rang</th>
            <th>due date</th>
            <th>type</th>
            <th>status</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {data && data.tasks.map((obj, i) => <Tr {...obj} key={i} />)}
        </tbody>
      </Table>
    </div>
  );
}

function Tr({
  _id,
  surahName,
  fromAya,
  toAya,
  dueDate,
  type,
  completedDate,
  masteryLevel,
  comment,
}) {
  const visable = useSelector((state) => state.app.client.toggleForm);
  const dispatch = useDispatch();
  const router = useRouter();
  const onUpdate = () => {
    dispatch(toggleChangeAction());
    console.log(visable);
  };

  const onDelete = () => {
    console.log(_id);
    deleteTask(_id);
    setTimeout(() => {
      router.reload();
    }, 0.5 * 1000);
  };

  return (
    <tr>
      <td>
        <span>{surahName || "Unknown"}</span>
      </td>
      <td>
        <span>{fromAya || "Unknown"}</span>
      </td>
      <td>
        <span>{toAya || "Unknown"}</span>
      </td>
      <td>
        <span>{dueDate || "Unknown"}</span>
      </td>
      <td>
        <span>{type || "Unknown"}</span>
      </td>
      <td>
        <button>
          <span className="status">{status || "Unknown"}</span>
        </button>
      </td>
      <td className="tableBtns">
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
      </td>
    </tr>
  );
}
