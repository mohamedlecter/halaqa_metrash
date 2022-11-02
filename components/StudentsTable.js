import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { BiEdit, BiTrashAlt } from "react-icons/bi";
import { deleteStudent, getStudents } from "../lib/helper";
import { useQuery } from "react-query";
export default function StudentTable() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // useEffect(() => {
  //   fetch("http://localhost:3000/api/students")
  //     .then((results) => {
  //       const res = results.json();
  //       console.log(res);
  //     })
  //     .then((studentsList) => setStudentsList(studentsList))
  //     .catch((error) => {});
  // }, []);
  // console.log(studentsList);

  // useEffect(() => {
  //   fetch(`http://localhost:3000/api/students`).then((response) =>
  //     console.log(response)
  //   );
  // }, []);

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

  // return (
  //   <div className="App">
  //     <h1>API Posts</h1>
  //     {loading && <div>A moment please...</div>}
  //     {error && (
  //       <div>{`There is a problem fetching the post data - ${error}`}</div>
  //     )}
  //     <ul>
  //       {data &&
  //         data.students.map(({ id, email }) => (
  //           <li key={id}>
  //             <h3>{email}</h3>
  //           </li>
  //         ))}
  //     </ul>
  //   </div>
  // );
  return (
    <div className="tableContainer">
      <Table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Qatari Id</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Password</th>
            <th>Enrolment status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data && data.students.map((obj, i) => <Tr {...obj} key={i} />)}
        </tbody>
      </Table>
    </div>
  );
}

function Tr({
  _id,
  qatariId,
  firstName,
  lastName,
  mobile,
  email,
  username,
  password,
  status,
}) {
  const onDelete = () => {
    console.log(_id);
    deleteStudent(_id);
  };
  return (
    <tr>
      <td>
        <span>{firstName || "Unknown"}</span>
      </td>
      <td>
        <span>{lastName || "Unknown"}</span>
      </td>
      <td>
        <span>{qatariId || "Unknown"}</span>
      </td>
      <td>
        <span>{mobile || "Unknown"}</span>
      </td>
      <td>
        <span>{email || "Unknown"}</span>
      </td>
      <td>
        <span>{password || "Unknown"}</span>
      </td>
      {/* <td>Password</td> */}
      <td>
        <button>
          <span className="status">{status || "Unknown"}</span>
        </button>
      </td>
      <td className="tableBtns">
        <button className="tableBtn">
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
