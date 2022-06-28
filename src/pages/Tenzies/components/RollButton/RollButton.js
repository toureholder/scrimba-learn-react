import React from "react";
import "./RollButton.css";

export default function RollButton({ handleClick, shouldResetGame }) {
  return (
    <button className="tenzies--roll-button" onClick={handleClick}>
      {shouldResetGame ? "Reset game" : "Roll"}
    </button>
  );
}
