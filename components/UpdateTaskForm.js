import React from "react";
import { useReducer } from "react";
import Success from "./success";
import { BiBrush } from "react-icons/bi";

const fromReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

export default function UpdateTaskForm() {
  const [formData, setFormDate] = useReducer(fromReducer, {});
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(formData).length == 0) {
      console.log("dont have form data ");
    } else {
      console.log(formData);
    }
  };
  if (Object.keys(formData).length > 0) {
    return <Success />;
  }
  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <div className="inputContainer">
          <input
            onChange={setFormDate}
            type="text"
            name="firstName"
            placeholder="Student Name"
          ></input>
          {/* change this to a dropdown menu that has all the sura names */}
        </div>
        <div className="inputContainer">
          <input
            onChange={setFormDate}
            type="text"
            name="ayaRange"
            placeholder="Aya range"
          ></input>
        </div>
        <div className="inputContainer">
          <div className="dateInput">
            <input
              onChange={setFormDate}
              type="date"
              name="dueDate"
              placeholder="Due date"
            ></input>
            <input
              onChange={setFormDate}
              type="date"
              name="completeDate"
              placeholder="Complete date"
            ></input>
          </div>
        </div>
        <div className="inputContainer">
          <label>Type: </label>
          <div className="formCheck">
            <div>
              <input
                onChange={setFormDate}
                type="radio"
                name="status"
                placeholder="Status"
                value="Memorization"
                id="radioDefault1"
              ></input>
              <label htmlFor="radioDefault1">Memorization</label>
            </div>
            <div>
              <input
                onChange={setFormDate}
                type="radio"
                name="status"
                placeholder="Status"
                value="Revision"
                id="radioDefault2"
              ></input>
              <label htmlFor="radioDefault1">Revision</label>
            </div>
          </div>
        </div>
        <div className="updateSubmitBtn">
          <button>
            Update
            <span>
              <BiBrush size={20}></BiBrush>
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
