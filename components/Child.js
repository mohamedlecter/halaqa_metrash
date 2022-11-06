import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { BiEdit, BiTrashAlt } from "react-icons/bi";
import { useRouter } from "next/router";
import { updateAction } from "../redux/reducer";
import { useDispatch } from "react-redux";
export default function ChildTable() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/students`);
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
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date Of Birth</th>
            <th>Gender</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>{data && data.map((obj, i) => Tr(obj))}</tbody>
      </Table>
    </div>
  );
}

function Tr(obj) {
  return (
    <>
      {obj.students.map((res) => (
        <tr>
          <td>
            <span>{res.firstName || "Unknown"}</span>
          </td>
          <td>
            <span>{res.lastName || "Unknown"}</span>
          </td>
          <td>
            <span>{res.dob || "Unknown"}</span>
          </td>
          <td>
            <span>{res.gender || "Unknown"}</span>
          </td>
          <td>
            <span>{res.schoolGrade || "Unknown"}</span>
          </td>
        </tr>
      ))}
    </>
  );
}
