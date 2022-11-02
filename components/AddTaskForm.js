import React from "react";
import { useReducer } from "react";
import Success from "./success";
import { BiPlus } from "react-icons/bi";
const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

export default function AddTaskForm() {
  const [formData, setFormDate] = useReducer(formReducer, {});
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(formData).length == 0) {
      console.log("dont have form data ");
    } else {
      await addTask(formData);
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
            name="surahName"
            placeholder="Student Name"
          ></input>
          {/* change this to a dropdown menu that has all the sura names */}
        </div>
        <div className="inputContainer">
          <input
            onChange={setFormDate}
            type="text"
            name="fromAya"
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
              name="completedDate"
              placeholder="Complete date"
            ></input>
          </div>
        </div>
        <div className="inputContainer">
          <label>Type: </label>
          <div className="formCheck"></div>
        </div>
        <div className="submitBtn">
          <button>
            Add
            <span>
              <BiPlus size={20}></BiPlus>
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
