import { useEffect, useState } from "react";
import "./App.css";
import flags from "./Components/Cards/Flags";
import Gameboard from "./Components/Layout/Gameboard";
import Header from "./Components/Layout/Header";
import shuffle from "./Components/Utilities/Shuffle";

const App = () => {
  const [clicked, setClicked] = useState([]);
  const [level, setLevel] = useState(0);
  const [currentCards, setCurrentCards] = useState(
    flags.slice(0, 2 * level + 2)
  );
  const [currentScore, setCurrentScore] = useState(0);
  const [hiScore, setHiScore] = useState(0);

  //loads 2*level+2 cards when level state changes
  useEffect(() => {
    const loadLevel = () => {
      if (level > 0) {
        setCurrentCards(flags.slice(0, 2 * level + 2));
      }
    };

    loadLevel();
  }, [level]);

  //shuffle cards every round
  useEffect(() => {
    shuffle(currentCards);
  });

  useEffect(() => {
    //check for double cards, reset game, and record high score
    (() => {
      if (new Set(clicked).size !== clicked.length) {
        if (currentScore > hiScore) {
          setHiScore(currentScore);
        }
        setCurrentScore(0);
        setLevel(0);
        setClicked([]);
      }

      //check that all cards on this level have been clicked
      let newArray = currentCards.map((element) => {
        return element.flag;
      });
      if (newArray.every((element) => clicked.includes(element))) {
        setClicked([]);
        setLevel(level + 1);
      }
    })();
  }, [clicked]);

  return (
    <div>
      <Header currentScore={currentScore} hiScore={hiScore} />
      <div id="gameboard">
        <Gameboard
          currentCards={currentCards}
          level={level}
          clicked={clicked}
          setClicked={setClicked}
          setLevel={setLevel}
          currentScore={currentScore}
          setCurrentScore={setCurrentScore}
        />
      </div>
    </div>
  );
};

export default App;
