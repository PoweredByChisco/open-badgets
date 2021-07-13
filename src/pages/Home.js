import React from "react";
import "./styles/Home.scss";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <div className="home">
        <h1>Open Conf</h1>
        <Link to="/badges" className="btn btn-primary">
          Get In!
        </Link>
      </div>
    </div>
  );
}

export default Home;
