import React, { Component } from "react";
import { withRouter } from "react-router";
import "./Result.scss";
import Music from "../Music/Music";

class Result extends Component {
  render() {
    const { name } = this.props.location;
    return (
      <>
        <Music />
        <div className="result">
          <p>Congratulations</p> <p className="user">{name}</p>!
        </div>
      </>
    );
  }
}

export default withRouter(Result);
