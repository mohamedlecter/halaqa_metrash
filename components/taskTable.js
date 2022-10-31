import React from "react";
import Table from "react-bootstrap/Table";
import { BiEdit, BiTrashAlt } from "react-icons/bi";
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
            <th>status</th>
            <th>action</th>
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
            <td>
              <button>
                <span className="status">Active</span>
              </button>
            </td>
            <td className="tableBtns">
              <button className="tableBtn">
                <BiEdit size={25} color={"rgba(34,197,94)"}></BiEdit>
              </button>
              <button className="tableBtn">
                <BiTrashAlt size={25} color={"rgba(244,63,94)"}></BiTrashAlt>
              </button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
