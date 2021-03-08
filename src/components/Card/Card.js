import React, { Component } from "react";
import "./Card.scss";
import TrebleClef from "../../assets/trebleclef.png";

class Card extends Component {
  render() {
    const { musician, onClickHandler } = this.props;
    return (
      <div className="card">
        {
          <img
            onClick={onClickHandler}
            className={musician.open ? "card-open" : "card-closed"}
            src={musician.open ? musician.image : TrebleClef}
            alt={musician.name}
          />
        }
      </div>
    );
  }
}

export default Card;
