import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Update = ({ display, update ,refreshTasks}) => {
  const [input, setInput] = useState({
    title: update?.title || "",
    body: update?.body || "",
  });

  useEffect(() => {
    if (update) {
      setInput({ title: update.title, body: update.body });
    }
  }, [update]);

  const change = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const submit = async () => {
    try {
      await axios
        .put(`http://localhost:1000/api/v2/updateTask/${update._id}`, input)
        .then((response) => {
          toast.success("Task Updated", {
            position: "top-center",
            autoClose: 3000,
          });
        });
        refreshTasks()
      display("none");
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <div className="p-5 d-flex justify-content-center align-items-start flex-column update">
      <h3>Update Task</h3>
      <input
        type="text"
        placeholder="Title"
        className="todo-input my-4 w-100 p-3"
        value={input.title}
        name="title"
        onChange={change}
      />
      <textarea
        className="todo-input w-100 p-3"
        placeholder="Body"
        value={input.body}
        name="body"
        onChange={change}
      />
      <div>
        <button className="btn btn-dark my-4" onClick={submit}>
          Update
        </button>
        <button
          className="btn btn-danger my-4 mx-3"
          onClick={() => {
            display("none");
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Update;
