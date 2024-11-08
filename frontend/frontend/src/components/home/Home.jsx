import React from "react";
import "./home.css";
const Home = () => {
  return (
    <div className="home d-flex justify-content-center align-items-center">
      <div className="container d-flex justify-content-center align-items-center flex-column">
        <h1 className="text-center">Get it Done, One Task at a Time.</h1>
        <p>
          Your to-do list, reimagined. With an intuitive design and powerful
          features, this app helps you turn goals into accomplishments, one task
          at a time.
        </p>
        <button className="home-btn">Make Todo List</button>
      </div>
    </div>
  );
};

export default Home;
