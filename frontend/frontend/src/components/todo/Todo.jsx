import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoCards from "./TodoCards";
import Update from "./Update";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let id = sessionStorage.getItem("id");

const Todo = () => {
  const [input, setInput] = useState({ title: "", body: "" });
  const [array, setArray] = useState([]);
  const [toUpdateTask, setToUpdateTask] = useState(null);

  // Function to fetch tasks from the server
  const fetchTasks = async () => {
    if (id) {
      try {
        const response = await axios.get(
          `http://localhost:1000/api/v2/getTasks/${id}`
        );
        setArray(response.data.list);
      } catch (err) {
        console.error("Error fetching tasks:", err);
      }
    }
  };

  // Function to refresh the tasks after update
  const refreshTasks = () => {
    fetchTasks();
  };

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
          });
        setInput({ title: "", body: "" });
        toast.success("Task Added successfully", {
          position: "top-center",
          autoClose: 3000,
        });
        refreshTasks();
      } else {
        toast.warning("Sign in to add task", {
          position: "top-center",
          autoClose: 3000,
        });
      }
    }
  };

  const del = async (cardid) => {
    if (id) {
      await axios
        .delete(`http://localhost:1000/api/v2/deletetask/${cardid}`, {
          data: { id: id },
        })
        .then((response) => {
          toast.info("Task deleted", {
            position: "top-center",
            autoClose: 3000,
          });
        });
    } else {
      toast.danger("please signup first", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  const dis = (value) => {
    document.getElementById("todo-update").style.display = value;
  };

  const update = (index) => {
    setToUpdateTask(array[index]);
  };

  useEffect(() => {
    fetchTasks();
  }, [id]); // Fetch tasks when the component mounts or when 'id' changes

  return (
    <>
      <div className="todo">
        <div className="container todo-main d-flex justify-content-center align-items-center my-4 flex-column">
          <div className="d-flex flex-column todo-input-div w-100 p-1">
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
          <div className="w-lg-50 w-100 d-flex justify-content-end my-3">
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
                  <div
                    className="col-lg-3 col-11 mx-lg-5  mx-3 my-2"
                    key={index}
                  >
                    <TodoCards
                      title={item.title}
                      body={item.body}
                      id={item._id}
                      delid={del}
                      dis={dis}
                      updateId={index}
                      toBeUpdate={update}
                      refreshTasks={refreshTasks}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="todo-update" id="todo-update">
        <div className="container update">
          <Update
            display={dis}
            update={toUpdateTask}
            refreshTasks={refreshTasks}
          />
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Todo;
