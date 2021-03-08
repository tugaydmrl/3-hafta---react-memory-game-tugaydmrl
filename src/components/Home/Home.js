import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Home.scss";

class Home extends Component {
  state = {
    name: "",
  };
  render() {
    return (
      <div className="home-container">
        <input
          onChange={(event) => this.setState({ name: event.target.value })}
          placeholder="Enter your name"
        />
        <Link to={{ pathname: "/game", name: this.state.name }}>
          Start the Game!
        </Link>
      </div>
    );
  }
}

export default Home;
