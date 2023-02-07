import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Game from "../Game";
import Header from "../Header";

function App() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));

  const restartGame = () => setAnswer(sample(WORDS));

  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <Game key={answer} answer={answer} restartGame={restartGame} />
      </div>
    </div>
  );
}

export default App;
