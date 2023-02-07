import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Guess({ guesses }) {
  return (
    <div className="guess-result">
      {[...Array(NUM_OF_GUESSES_ALLOWED).keys()].map((index) => {
        const guess = guesses[index] || {
          id: index,
          word: "     ",
          matches: [],
        };

        return (
          <p key={guess.id} className="guess">
            {guess.word.split("").map((char, index) => (
              <span
                key={index}
                className={`cell ${guess.matches[index]?.status}`}
              >
                {char}
              </span>
            ))}
          </p>
        );
      })}
    </div>
  );
}

export default Guess;
