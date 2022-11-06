import { useState, useEffect } from "react";
import { Button, Form, Grid, Loader } from "semantic-ui-react";
import { useRouter } from "next/router";
import { BiPlus } from "react-icons/bi";

const AddAnnouncement = () => {
  const [newAnnn, setnewAnn] = useState({
    title: "",
    body: "",
  });

  const { title, body } = newAnnn;
  const { push, query } = useRouter();
  const [isSubmit, setIsSubmit] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const validate = () => {
    let errors = {};
    if (!title) {
      errors.title = "title is Required";
    }
    if (!body) {
      errors.body = "body is Required";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = validate();

    if (Object.keys(errors).length) return setErrors(errors);
    setIsSubmit(true);

    await createAnnouncement();
    await setTimeout(() => {
      router.reload();
    }, 0.5 * 1000);
  };

  const createAnnouncement = async () => {
    try {
      await fetch(" http://localhost:3000/api/announcements", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newAnnn),
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setnewAnn({ ...newAnnn, [name]: value });
  };
  return (
    <div className="formContainer">
      <div>
        {isSubmit ? (
          <Loader active inline="centered" />
        ) : (
          <form onSubmit={handleSubmit}>
            <Form.Input
              className="inputContainer"
              label="Title"
              placeholder="Enter Title"
              name="title"
              onChange={handleChange}
              value={title}
              autoFocus
            />
            <Form.Input
              className="inputContainer"
              label="Body"
              placeholder="Enter announcmenet body"
              name="body"
              onChange={handleChange}
              value={body}
              autoFocus
            />

            <div className="submitBtn">
              <button>
                {"Add"}
                <span>
                  <BiPlus size={20}></BiPlus>
                </span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default AddAnnouncement;
