import React, { useState, useEffect } from "react";
import "./todo.css";
import TodoCards from "./TodoCards";
import Update from "./Update";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let id = sessionStorage.getItem("id");

const Todo = () => {
  const [input, setInput] = useState({ title: "", body: "" });
  const [array, setArray] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Might be redundant if using id for login check

  const show = () => {
    document.getElementById("textarea").style.display = "block";
  };

  const change = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const submit = async () => {
    if (input.title.trim() === "" || input.body.trim() === "") {
      toast.warning("Title and body cannot be empty", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    } else {
      if (id) {
        await axios
          .post("http://localhost:1000/api/v2/addTask", {
            title: input.title,
            body: input.body,
            id: id,
          })
          .then((response) => {
            console.log(response);
  
            // Add the new task to the array immediately
            setArray((prevArray) => [
              ...prevArray,
              { _id: response.data._id, title: input.title, body: input.body },
            ]);
          });
  
        setInput({ title: "", body: "" });
        toast.success("Task Added successfully", {
          position: "top-center",
          autoClose: 3000,
        });
      } else {
        toast.warning("Sign in to add task", {
          position: "top-center",
          autoClose: 3000,
        });
      }
    }
  };
  

  const del = async (cardid) => {
    await axios
      .delete(`http://localhost:1000/api/v2/deletetask/${cardid}`, {
        data: { id: id },
      })
      .then((response) => {
        // Immediately remove the task from the array
        setArray((prevArray) => prevArray.filter((item) => item._id !== cardid));
  
        toast.info("Task deleted", {
          position: "top-center",
          autoClose: 3000,
        });
      });
  };
  

  const dis = (value) => {
    document.getElementById("todo-update").style.display = value;
  };
  useEffect(() => {
    const fetchTasks = async () => {
      if (id) {
        await axios
          .get(`http://localhost:1000/api/v2/getTasks/${id}`)
          .then((response) => {
            setArray(response.data.list);
          })
          .catch((err) => {
            console.error(err);
          });
      }
    };
    fetchTasks();
  }, [id]);
  return (
    <>
      <div className="todo">
        <div className="container todo-main d-flex justify-content-center align-items-center my-4 flex-column">
          <div className="d-flex flex-column todo-input-div w-50">
            <input
              type="text"
              placeholder="Title"
              className="my-2 p-3 todo-input"
              name="title"
              onClick={show}
              value={input.title}
              onChange={change}
            />
            <textarea
              id="textarea"
              type="text"
              placeholder="Body"
              name="body"
              value={input.body}
              onChange={change}
              className="p-3 todo-input"
            />
          </div>
          <div className="w-50 d-flex justify-content-end my-3">
            <button className="add-btn p-2" onClick={submit}>
              Add
            </button>
          </div>
        </div>

        <div className="todo-body">
          <div className="container-fluid">
            <div className="row">
              {array &&
                array.map((item, index) => (
                  <div className="col-lg-3 col-10 mx-5 my-2" key={index}>
                    <TodoCards
                      title={item.title}
                      body={item.body}
                      id={item._id}
                      delid={del}
                      dis={dis}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="todo-update" id="todo-update">
        <div className="container update">
          <Update display={dis} />
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Todo;
