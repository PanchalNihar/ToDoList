import React from "react";
import "./todo.css";
import { MdDelete } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
const TodoCards = ({ title, body, id, delid, dis }) => {
  return (
    <div className="p-3 todo-card ">
      <div>
        <h5>{title}</h5>
        <p className="todo-card-p">{body.split("", 80)}</p>
      </div>
      <div className="d-flex justify-content-around">
        <div
          className="d-flex justify-content-center align-items-center card-icon-head px-2 py-1"
          onClick={() => {
            dis("block");
          }}
        >
          <GrUpdate className="card-item " />
          Update
        </div>
        <div
          className="d-flex justify-content-center align-items-center card-icon-head px-2 py-1 text-danger"
          onClick={() => delid(id)}
        >
          <MdDelete className="card-item del" />
          Delete
        </div>
      </div>
    </div>
  );
};

export default TodoCards;
