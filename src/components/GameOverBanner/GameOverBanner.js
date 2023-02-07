import React from "react";

function GameOverBanner({ isGameOver, isWinner, numOfGuesses, restartGame }) {
  if (!isGameOver) {
    return null;
  }

  return (
    <div className={`${isWinner ? "happy" : "sad"} banner`}>
      {isWinner ? (
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>
            {numOfGuesses} {numOfGuesses === 1 ? "guess" : "guesses"}
          </strong>
          .
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>LEARN</strong>.
        </p>
      )}
      <button onClick={() => restartGame()}>Restart Game</button>
    </div>
  );
}

export default GameOverBanner;
