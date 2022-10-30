import React from "react";
import Table from "react-bootstrap/Table";

export default function TaskTable() {
  return (
    <div className="tableContainer">
      <Table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Student</th>
            <th>Sura</th>
            <th>Aya rang</th>
            <th>due date</th>
            <th>type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>task id</td>
            <td>Student name</td>
            <td>Sura name</td>
            <td>Aya rang</td>
            <td>date</td>
            <td>type</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
