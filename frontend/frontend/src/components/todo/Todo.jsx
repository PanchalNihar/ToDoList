import React, { useState } from "react";
import "./todo.css";
import TodoCards from "./TodoCards";
import Update from "./Update";

const Todo = () => {
  const [input, setInput] = useState({ title: "", body: "" });
  const [array, setArray] = useState([]);
  const [showalert, setShowalert] = useState(false);
  const [showSigninAlert, setShowSigninAlert] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [emptyAlert, setEmptyAlert] = useState(false);
  const show = () => {
    document.getElementById("textarea").style.display = "block";
  };

  const change = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const submit = () => {
    // if (!isLoggedIn) {
    //   setShowSigninAlert(true);
    //   setTimeout(() => {
    //     setShowSigninAlert(false);
    //   }, 3000);
    //   return;
    // }
    if (input.title.trim() === "" || input.body.trim() === "") {
      setEmptyAlert(true);
      setTimeout(() => {
        setEmptyAlert(false);
      }, 3000);
      return;
    }
    setArray([...array, input]);
    console.log(input);
    setInput({ title: "", body: "" });
    setShowalert(true);
    setTimeout(() => {
      setShowalert(false);
    }, 3000);
  };
  const del = (id) => {
    array.splice(id, "1");
    setArray([...array]);
  };
  const dis = (value) => {
    document.getElementById("todo-update").style.display = value;
  };
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
        {showalert && (
          <>
            <div className="custom-alert"> Task Added successfully</div>
          </>
        )}
        {emptyAlert && (
          <>
            <div className="custom-alert alert-warning">
              title and body cannot be empty
            </div>
          </>
        )}
        {showSigninAlert && (
          <>
            <div className="custom-alert alert-warning">
              Sign in to add task
            </div>
          </>
        )}
        <div className="todo-body">
          <div className="container-fluid">
            <div className="row">
              {array &&
                array.map((item, index) => (
                  <div className="col-lg-3 col-10 mx-5 my-2" key={index}>
                    <TodoCards
                      title={item.title}
                      body={item.body}
                      id={index}
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
          <Update display={dis}/>
        </div>
      </div>
    </>
  );
};

export default Todo;
