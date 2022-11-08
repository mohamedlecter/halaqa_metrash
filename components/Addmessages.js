import { useState, useEffect } from "react";
import { Button, Form, Grid, Loader } from "semantic-ui-react";
import { useRouter } from "next/router";
import { BiPlus } from "react-icons/bi";

const AddMessages = () => {
  const [newMssg, setnewMssg] = useState({
    sender: "",
    to: "",
    body: "",
  });

  const { sender, to, body } = newMssg;
  const { push, query } = useRouter();
  const [isSubmit, setIsSubmit] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const validate = () => {
    let errors = {};
    if (!sender) {
      errors.sender = "sender is Required";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = validate();

    if (Object.keys(errors).length) return setErrors(errors);
    setIsSubmit(true);
    await createMssg();
    await setTimeout(() => {
      router.reload();
    }, 0.5 * 1000);
  };

  const createMssg = async () => {
    try {
      await fetch(" http://localhost:3000/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMssg),
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setnewMssg({ ...newMssg, [name]: value });
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
              label="Sender"
              placeholder="Enter sender name"
              name="sender"
              onChange={handleChange}
              value={sender}
              autoFocus
            />
            <Form.Input
              className="inputContainer"
              label="To"
              placeholder="To"
              name="to"
              onChange={handleChange}
              value={to}
              autoFocus
            />
            <Form.Input
              className="inputContainer"
              label="Body"
              placeholder="Body"
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

export default AddMessages;
