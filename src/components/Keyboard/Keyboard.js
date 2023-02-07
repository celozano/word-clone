import React from "react";

const keyboardKeys = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

function Keyboard({ guesses }) {
  const keyStatus = guesses
    .map((guess) => guess.matches)
    .flat()
    .reduce(
      (acc, curr) => ({
        ...acc,
        [curr.letter]: curr.status,
      }),
      {}
    );

  return (
    <div className="keyboard">
      {keyboardKeys.map((row) => (
        <div className="keyboard-row" key={row}>
          {row.split("").map((key) => (
            <span key={key} className={`keyboard-key ${keyStatus[key]}`}>
              {key}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
