import React from "react";

import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import Guess from "../Guess";
import Input from "../Input";
import Keyboard from "../Keyboard";
import GameOverBanner from "../GameOverBanner";

function Game({ answer, restartGame }) {
  const [guesses, setGuesses] = React.useState([]);
  const isWinner = guesses.find((guess) => guess.word === answer);
  const isGameOver = isWinner || guesses.length === NUM_OF_GUESSES_ALLOWED;

  const handleAddGuess = (guess) => {
    const matches = checkGuess(guess, answer);

    setGuesses([...guesses, { id: new Date(), word: guess, matches }]);
  };

  return (
    <div key={answer}>
      <Guess guesses={guesses} />
      <Input handleAddGuess={handleAddGuess} disabled={isGameOver} />
      <Keyboard guesses={guesses} />
      <GameOverBanner
        isGameOver={isGameOver}
        isWinner={isWinner}
        numOfGuesses={guesses.length}
        restartGame={restartGame}
      />
    </div>
  );
}

export default Game;
