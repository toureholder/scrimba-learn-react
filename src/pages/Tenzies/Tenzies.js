import React, { Component } from "react";
import Title from "./components/Title/Title";
import Dice from "./components/Dice/Dice";
import RollButton from "./components/RollButton/RollButton";
import "./Tenzies.css";

import Confetti from "react-confetti";

export default class Tenzies extends Component {
  getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
  }

  getNewDice() {
    return Array.from({ length: 10 }, () => ({
      value: this.getRandomNumber(),
      isFrozen: false,
    }));
  }

  state = {
    dice: this.getNewDice(),
  };

  rollDice = () => {
    this.setState((previousState) => ({
      dice: previousState.dice.map((die) =>
        die.isFrozen ? die : { ...die, value: this.getRandomNumber() }
      ),
    }));
  };

  freezeDice = (selectedIndex) => {
    this.setState((previousState) => ({
      dice: previousState.dice.map((die, index) =>
        index !== selectedIndex ? die : { ...die, isFrozen: !die.isFrozen }
      ),
    }));
  };

  resetGame = () => {
    this.setState({ dice: this.getNewDice() });
  };

  render() {
    const isComplete = this.state.dice.every(
      (die) => die.value === this.state.dice[0].value && die.isFrozen
    );

    return (
      <div className="tenzies--board">
        {isComplete && <Confetti width={540} />}
        <div className="tenzies--board--overlay">
          <Title />
          <Dice dice={this.state.dice} handleClick={this.freezeDice} />
          <RollButton
            handleClick={isComplete ? this.resetGame : this.rollDice}
            shouldResetGame={isComplete}
          />
        </div>
      </div>
    );
  }
}
