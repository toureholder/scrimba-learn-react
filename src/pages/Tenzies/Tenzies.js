import React from "react";
import Title from "./components/Title/Title";
import Dice from "./components/Dice/Dice";
import RollButton from "./components/RollButton/RollButton";
import "./Tenzies.css";

import Confetti from "react-confetti";

export default function Tenzies() {
  function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
  }

  function getNewDice() {
    return Array.from({ length: 10 }, () => ({
      value: getRandomNumber(),
      isFrozen: false,
    }));
  }

  const [dice, setDice] = React.useState(() => getNewDice());

  function rollDice() {
    setDice((previous) =>
      previous.map((die) =>
        die.isFrozen ? die : { ...die, value: getRandomNumber() }
      )
    );
  }

  function freezeDice(selectedIndex) {
    setDice((previous) =>
      previous.map((die, index) =>
        index !== selectedIndex ? die : { ...die, isFrozen: !die.isFrozen }
      )
    );
  }

  function resetGame() {
    setDice(getNewDice());
  }

  const isComplete = dice.every(
    (die) => die.value === dice[0].value && die.isFrozen
  );

  return (
    <div className="tenzies--board">
      {isComplete && <Confetti width={540} />}
      <div className="tenzies--board--overlay">
        <Title />
        <Dice dice={dice} handleClick={freezeDice} />
        <RollButton
          handleClick={isComplete ? resetGame : rollDice}
          shouldResetGame={isComplete}
        />
      </div>
    </div>
  );
}
