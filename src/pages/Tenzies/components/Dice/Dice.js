import React from "react";
import "./Dice.css";

export default class Dice extends React.Component {
  render() {
    const diceComponents = this.props.dice.map((die, index) => (
      <div
        key={index}
        className={`tenzies--board--dice--die ${die.isFrozen ? "frozen" : ""}`}
        onClick={() => this.props.handleClick(index)}
      >
        <span>{die.value}</span>
      </div>
    ));

    return <div className="tenzies--board--dice">{diceComponents}</div>;
  }
}
