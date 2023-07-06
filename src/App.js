import { useEffect, useState } from "react";
import "./App.css";
import flags from "./Components/Cards/Flags";
import Gameboard from "./Components/Layout/Gameboard";
import Header from "./Components/Layout/Header";

const App = () => {
  const [allCards, setCards] = useState(flags);
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

  useEffect(() => {
    const shuffleCurrent = (array) => {
      let currentIndex = array.length,
        randomIndex;

      // While there remain elements to shuffle
      while (currentIndex !== 0) {
        // Pick a remaining element
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }

      return array;
    };
    shuffleCurrent(currentCards);
  });

  useEffect(() => {
    (() => {
      let newArray = currentCards.map((element) => {
        return element.flag;
      });
      if (newArray.every((element) => clicked.includes(element))) {
        setLevel(level + 1);
      }
    })();
  }, [clicked]);

  return (
    <div>
      <div>
        <Header currentScore={currentScore} hiScore={hiScore} />
      </div>
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
