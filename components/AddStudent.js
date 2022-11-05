// import React from "react";
// import { useReducer } from "react";
// import Success from "./success";
// import { BiPlus } from "react-icons/bi";

// const formReducer = (state, event) => {
//   return {
//     ...state,
//     [event.target.name]: event.target.value,
//   };
// };

// export default function AddStudent() {
//   const [formData, setFormDate] = useReducer(formReducer, {});
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (Object.keys(formData).length == 0) {
//       console.log("dont have form data ");
//     } else {
//       console.log(formData);
//     }
//   };
//   if (Object.keys(formData).length > 0) {
//     return <Success />;
//   }
//   return (
//     <div className="formContainer">
//       <form onSubmit={handleSubmit}>
//         <div className="inputContainer">
//           <input
//             onChange={setFormDate}
//             type="text"
//             name="firstname"
//             placeholder="First Name"
//           ></input>
//         </div>
//         <div className="inputContainer">
//           <input
//             onChange={setFormDate}
//             type="text"
//             name="lastname"
//             placeholder="Last Name"
//           ></input>
//         </div>
//         <div className="inputContainer">
//           <input
//             onChange={setFormDate}
//             type="text"
//             name="qatariId"
//             placeholder="Qatari Id"
//           ></input>
//         </div>
//         <div className="inputContainer">
//           <input
//             onChange={setFormDate}
//             type="text"
//             name="mobileNumber"
//             placeholder="Mobile number"
//           ></input>
//         </div>
//         {/* <div className="inputContainer">
//           <input
//             onChange={setFormDate}
//             type="text"
//             name="username"
//             placeholder="user name"
//           ></input>
//         </div> */}
//         <div className="inputContainer">
//           <input
//             onChange={setFormDate}
//             type="text"
//             name="email"
//             placeholder="Email"
//           ></input>
//         </div>
//         <div className="inputContainer">
//           <input
//             onChange={setFormDate}
//             type="text"
//             name="password"
//             placeholder="Password"
//           ></input>
//         </div>
//         <div className="inputContainer">
//           <label>Status: </label>
//           <div className="formCheck">
//             <div>
//               <input
//                 onChange={setFormDate}
//                 type="radio"
//                 name="status"
//                 placeholder="Status"
//                 value="Active"
//                 id="radioDefault1"
//               ></input>
//               <label htmlFor="radioDefault1">Active</label>
//             </div>
//             <div>
//               <input
//                 onChange={setFormDate}
//                 type="radio"
//                 name="status"
//                 placeholder="Status"
//                 value="Inactive"
//                 id="radioDefault2"
//               ></input>
//               <label htmlFor="radioDefault1">Inactive</label>
//             </div>
//           </div>
//         </div>
//         <div className="submitBtn">
//           <button>
//             Add
//             <span>
//               <BiPlus size={20}></BiPlus>
//             </span>
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { Button, Form, Grid, Loader } from "semantic-ui-react";
import { useRouter } from "next/router";

const AddStudent = () => {
  const [newStudent, setnewStudent] = useState({
    firstName: "",
    lastName: "",
  });

  const { firstName, lastName } = newStudent;
  const { push, query } = useRouter();
  const [isSubmit, setIsSubmit] = useState(false);
  const [errors, setErrors] = useState({});

  const getStudent = async () => {
    const response = await fetch(
      `http://localhost:3000/api/students/${query.id}`
    );
    const data = await response.json();
    setNewStudent({ firstName: data.firstName, lastName: data.lastName });
  };

  useEffect(() => {
    if (query.id) getStudent();
  }, [query.id]);

  const validate = () => {
    let errors = {};
    if (!firstName) {
      errors.firstName = "firstName is Required";
    }
    if (!lastName) {
      errors.lastName = "description is Required";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = validate();

    if (Object.keys(errors).length) return setErrors(errors);
    setIsSubmit(true);
    if (query.id) {
      await updateStudent();
    } else {
      await createStudent();
    }

    await push("/coordinator");
  };

  const updateStudent = async () => {
    try {
      await fetch(`http://localhost:3000/api/students/${query.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newStudent),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const createStudent = async () => {
    try {
      await fetch(" http://localhost:3000/api/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newStudent),
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setnewStudent({ ...newStudent, [name]: value });
  };
  return (
    <Grid
      centered
      verticalAlign="middle"
      columns="3"
      style={{ height: "80vh" }}
    >
      <Grid.Row>
        <Grid.Column textAlign="center">
          <div>
            <h1>{query.id ? "Update User" : "Create User"}</h1>
            <div>
              {isSubmit ? (
                <Loader active inline="centered" />
              ) : (
                <Form onSubmit={handleSubmit}>
                  <Form.Input
                    error={
                      errors.title
                        ? { content: "Please enter a full name" }
                        : null
                    }
                    label="Full name"
                    placeholder="Enter full name"
                    name="firstName"
                    onChange={handleChange}
                    value={firstName}
                    autoFocus
                  />

                  <Form.TextArea
                    error={
                      errors.description
                        ? {
                            content: "Please enter a cellphone",
                          }
                        : null
                    }
                    // label="text"
                    placeholder="Enter Last Name"
                    name="lastName"
                    onChange={handleChange}
                    value={lastName}
                  />

                  <Button type="submit" primary>
                    {query.id ? "Update" : "Submit"}
                  </Button>
                </Form>
              )}
            </div>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default AddStudent;
