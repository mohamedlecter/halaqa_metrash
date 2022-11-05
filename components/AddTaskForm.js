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

// export default function AddTaskForm() {
//   const [formData, setFormDate] = useReducer(formReducer, {});
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (Object.keys(formData).length == 0) {
//       console.log("dont have form data ");
//     } else {
//       await addTask(formData);
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
//             name="surahName"
//             placeholder="Student Name"
//           ></input>
//           {/* change this to a dropdown menu that has all the sura names */}
//         </div>
//         <div className="inputContainer">
//           <input
//             onChange={setFormDate}
//             type="text"
//             name="fromAya"
//             placeholder="Aya range"
//           ></input>
//         </div>
//         <div className="inputContainer">
//           <div className="dateInput">
//             <input
//               onChange={setFormDate}
//               type="date"
//               name="dueDate"
//               placeholder="Due date"
//             ></input>
//             <input
//               onChange={setFormDate}
//               type="date"
//               name="completedDate"
//               placeholder="Complete date"
//             ></input>
//           </div>
//         </div>
//         <div className="inputContainer">
//           <label>Type: </label>
//           <div className="formCheck"></div>
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

const AddTask = () => {
  const [newTask, setnewTask] = useState({
    suraName: "",
    type: "",
  });

  const { suraName, type } = newTask;
  const { push, query } = useRouter();
  const [isSubmit, setIsSubmit] = useState(false);
  const [errors, setErrors] = useState({});

  const getStudent = async () => {
    const response = await fetch(`http://localhost:3000/api/tasks/${query.id}`);
    const data = await response.json();
    setnewTask({ suraName: data.suraName, type: data.type });
  };

  useEffect(() => {
    if (query.id) getStudent();
  }, [query.id]);

  const validate = () => {
    let errors = {};
    if (!suraName) {
      errors.suraName = "sura is Required";
    }
    if (!type) {
      errors.type = "type is Required";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = validate();

    if (Object.keys(errors).length) return setErrors(errors);
    setIsSubmit(true);
    if (query.id) {
      await updateTask();
    } else {
      await createTask();
    }

    await push("/teacher");
  };

  const updateTask = async () => {
    try {
      await fetch(`http://localhost:3000/api/tasks/${query.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const createTask = async () => {
    try {
      await fetch(" http://localhost:3000/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setnewTask({ ...newTask, [name]: value });
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
                      errors.suraName
                        ? { content: "Please enter a suraName " }
                        : null
                    }
                    label="Sura"
                    placeholder="Enter full name"
                    name="suraName"
                    onChange={handleChange}
                    value={suraName}
                    autoFocus
                  />

                  <Form.TextArea
                    error={
                      errors.type
                        ? {
                            content: "Please enter a type",
                          }
                        : null
                    }
                    // label="text"
                    placeholder="type"
                    name="type"
                    onChange={handleChange}
                    value={type}
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

export default AddTask;
