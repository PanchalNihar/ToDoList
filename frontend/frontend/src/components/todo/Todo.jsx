import React, { useState } from "react";
import "./todo.css";
import TodoCards from "./TodoCards";

const Todo = () => {
  const [input, setInput] = useState({ title: "", body: "" });
  const [array, setArray] = useState([]);
  const show = () => {
    document.getElementById("textarea").style.display = "block";
  };

  const change = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const submit = () => {
    setArray([...array, input]);
    console.log(input);
    setInput({ title: "", body: "" });
  };

  return (
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
                <div className="col-lg-3 col-10 mx-5 my-2">
                  <TodoCards title={item.title} body={item.body}/>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
