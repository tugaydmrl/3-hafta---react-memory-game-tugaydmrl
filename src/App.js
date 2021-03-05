import React, { Component } from 'react';
import './App.scss';

import MemoryCard from './components/MemoryCard'

function generateDeck() {
  const musicianArray = ["Bach", "Beethoven", "Mozart", "Chopin", "Vivaldi", "Tchaikovsky"];
  const deck = [];
  for (let i = 0; i < 12; i++) {
    deck.push({
      isFlipped: false,
      musician: musicianArray[i % 6]
    });
  }
  return shuffle(deck);
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      deck: generateDeck(),
      pickedCards: [],
      moves: 0
    };
  }

  pickCard(cardIndex) {
    if (this.state.deck[cardIndex].isFlipped) {
      return;
    }
    const cardToFlip = { ...this.state.deck[cardIndex] };
    cardToFlip.isFlipped = true;

    let newPickedCards = this.state.pickedCards.concat(cardIndex);
    const newDeck = this.state.deck.map((card, index) => {
      if (cardIndex === index) {
        return cardToFlip;
      }
      return card;
    });

    if (newPickedCards.length === 2) {
      const card1Index = newPickedCards[0];
      const card2Index = newPickedCards[1];
      if (newDeck[card1Index].musician !== newDeck[card2Index].musician) {
        setTimeout(() => {
          this.unflipCards(card1Index, card2Index);
        }, 1000);
      }
      newPickedCards = [];
      this.setState({ moves: this.state.moves + 1})
    }

    this.setState({
      deck: newDeck,
      pickedCards: newPickedCards
    });
  }

  unflipCards(card1Index, card2Index) {
    const card1 = { ...this.state.deck[card1Index] };
    const card2 = { ...this.state.deck[card2Index] };
    card1.isFlipped = false;
    card2.isFlipped = false;

    const newDeck = this.state.deck.map((card, index) => {
      if (card1Index === index) {
        return card1;
      }
      if (card2Index === index) {
        return card2;
      }
      return card;
    });

    this.setState({ deck: newDeck });
  }

    render() {
      const musicians = this.state.deck.map((card, index) => {
        return (
          <MemoryCard
            key={index}
            musician={card.musician}
            isFlipped={card.isFlipped}
            pickCard={this.pickCard.bind(this, index)}
          />
        );
      });

  return (
    <div className="App">
      <header className="app-header">
        <h1>Musician Memory</h1>
        <h3>Match musicians to win</h3>
        <h4>Moves: {this.state.moves}</h4>
      </header>
      <div className="app-cards">
        {musicians.slice(0,3)}
        {musicians.slice(3,6)}
        {musicians.slice(6,9)}
        {musicians.slice(9,12)}
      </div>
    </div>
  );
  }
}

export default App;
