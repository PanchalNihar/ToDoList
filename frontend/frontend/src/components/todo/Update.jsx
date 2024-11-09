import React from "react";

const Update = ({display}) => {
  return (
    <div className="p-5 d-flex justify-content-center align-items-start flex-column update">
      <h3>Update Task</h3>
      <input type="text" placeholder="Title" className="todo-input my-4 w-100 p-3" />
      <textarea className="todo-input w-100 p-3" placeholder="Body"/>
      <div>
        <button className="btn btn-dark my-4">Update</button>
        <button className="btn btn-danger my-4 mx-3" onClick={()=>{display("none")}}>Close</button>
      </div>
    </div>
  );
};

export default Update;
