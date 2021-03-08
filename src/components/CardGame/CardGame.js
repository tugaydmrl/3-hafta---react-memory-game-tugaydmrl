import React, { Component } from "react";
import "./CardGame.scss";
import Card from "../Card/Card";
import { shuffle } from "lodash";

import beethoven from "../../assets/beethoven.jpg";
import mozart from "../../assets/mozart.jpg";
import chopin from "../../assets/chopin.jpg";
import bach from "../../assets/bach.jpg";
import vivaldi from "../../assets/vivaldi.jpg";
import tchaikovsky from "../../assets/tchaikovsky.jpg";
import { Redirect, withRouter } from "react-router";

class CardGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          name: "Beethoven",
          open: false,
          id: 1,
          image: beethoven,
          isCompleted: false,
        },
        {
          name: "Mozart",
          open: false,
          id: 2,
          image: mozart,
          isCompleted: false,
        },
        { name: "Bach", open: false, id: 3, image: bach, isCompleted: false },
        {
          name: "Vivaldi",
          open: false,
          id: 4,
          image: vivaldi,
          isCompleted: false,
        },
        {
          name: "Chopin",
          open: false,
          id: 5,
          image: chopin,
          isCompleted: false,
        },
        {
          name: "Tchaikovsky",
          open: false,
          id: 6,
          image: tchaikovsky,
          isCompleted: false,
        },
        {
          name: "Beethoven",
          open: false,
          id: 7,
          image: beethoven,
          isCompleted: false,
        },
        {
          name: "Mozart",
          open: false,
          id: 8,
          image: mozart,
          isCompleted: false,
        },
        {
          name: "Bach",
          open: false,
          id: 9,
          image: bach,
          isCompleted: false,
        },
        {
          name: "Vivaldi",
          open: false,
          id: 10,
          image: vivaldi,
          isCompleted: false,
        },
        {
          name: "Chopin",
          open: false,
          id: 11,
          image: chopin,
          isCompleted: false,
        },
        {
          name: "Tchaikovsky",
          open: false,
          id: 12,
          image: tchaikovsky,
          isCompleted: false,
        },
      ],
      shuffledCards: [],
      matchedCards: [],
      flippedCards: [],
      score: 0,
    };
  }

  componentDidMount() {
    this.setState({ shuffledCards: shuffle(this.state.cards) });
  }

  onClickHandler = (musician, index) => {
    let flippedCards = this.state.flippedCards;
    let shuffledCards = this.state.shuffledCards;
    shuffledCards[index].open = true;
    flippedCards.push(musician);
    this.setState({
      shuffledCards,
      flippedCards,
    });
    if (this.state.flippedCards.length === 2) {
      setTimeout(() => {
        this.check();
      }, 1000);
    }
  };

  check() {
    let shuffledCards = this.state.shuffledCards;
    let matchedCards = this.state.matchedCards;

    if (this.state.flippedCards[0].name === this.state.flippedCards[1].name) {
      shuffledCards.find(
        (item) => item.id === this.state.flippedCards[0].id
      ).isCompleted = true;
      shuffledCards.find(
        (item) => item.id === this.state.flippedCards[1].id
      ).isCompleted = true;
      matchedCards.push(
        this.state.flippedCards[0].id,
        this.state.flippedCards[1].id
      );
      this.setState({ score: this.state.score + 1 });
    } else {
      shuffledCards.find(
        (item) => item.id === this.state.flippedCards[0].id
      ).open = false;
      shuffledCards.find(
        (item) => item.id === this.state.flippedCards[1].id
      ).open = false;
    }

    this.setState({
      flippedCards: [],
      matchedCards,
    });
  }

  render() {
    if (this.state.matchedCards.length === 12 || this.state.score === 6) {
      const newTo = {
        pathname: "",
        name: this.props.location.name,
      };
      this.state.matchedCards.length === 12
        ? (newTo.pathname = "/result")
        : (newTo.pathname = "/result");
      return <Redirect to={newTo} />;
    }
    return (
      <>
        <div className="helloUser">
          <p>Hi </p>
          <p className="user">{this.props.location.name}</p>
        </div>
        <div className="helloUser">
          <p>Your score: </p>
          <p className="user">{this.state.score}</p>
        </div>
        <p>Hit 6 points for win!</p>
        <div className="card-container">
          <div className="cards">
            {this.state.shuffledCards.map((musician, index) => (
              <Card
                key={index}
                onClickHandler={() =>
                  this.state.flippedCards.length === 2
                    ? null
                    : this.onClickHandler(musician, index)
                }
                musician={musician}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(CardGame);
