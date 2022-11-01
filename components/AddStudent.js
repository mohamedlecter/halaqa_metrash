import React from "react";
import { useReducer } from "react";
import Success from "./success";
import { BiPlus } from "react-icons/bi";

const fromReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

export default function AddStudent() {
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
            name="firstname"
            placeholder="First Name"
          ></input>
        </div>
        <div className="inputContainer">
          <input
            onChange={setFormDate}
            type="text"
            name="lastname"
            placeholder="Last Name"
          ></input>
        </div>
        <div className="inputContainer">
          <input
            onChange={setFormDate}
            type="text"
            name="qatariId"
            placeholder="Qatari Id"
          ></input>
        </div>
        <div className="inputContainer">
          <input
            onChange={setFormDate}
            type="text"
            name="mobileNumber"
            placeholder="Mobile number"
          ></input>
        </div>
        {/* <div className="inputContainer">
          <input
            onChange={setFormDate}
            type="text"
            name="username"
            placeholder="user name"
          ></input>
        </div> */}
        <div className="inputContainer">
          <input
            onChange={setFormDate}
            type="text"
            name="email"
            placeholder="Email"
          ></input>
        </div>
        <div className="inputContainer">
          <input
            onChange={setFormDate}
            type="text"
            name="password"
            placeholder="Password"
          ></input>
        </div>
        <div className="inputContainer">
          <label>Status: </label>
          <div className="formCheck">
            <div>
              <input
                onChange={setFormDate}
                type="radio"
                name="status"
                placeholder="Status"
                value="Active"
                id="radioDefault1"
              ></input>
              <label htmlFor="radioDefault1">Active</label>
            </div>
            <div>
              <input
                onChange={setFormDate}
                type="radio"
                name="status"
                placeholder="Status"
                value="Inactive"
                id="radioDefault2"
              ></input>
              <label htmlFor="radioDefault1">Inactive</label>
            </div>
          </div>
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