import React from "react";
import "./Dice.css";

export default function Dice({ dice, handleClick }) {
  const diceComponents = dice.map((die, index) => (
    <div
      key={index}
      className={`tenzies--board--dice--die ${die.isFrozen ? "frozen" : ""}`}
      onClick={() => handleClick(index)}
    >
      <span>{die.value}</span>
    </div>
  ));

  return <div className="tenzies--board--dice">{diceComponents}</div>;
}
