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

  useEffect(() => {
    const loadLevel = () => {
      if (level > 0) {
        setCurrentCards(flags.slice(0, 2 * level + 2));
      }
    };

    loadLevel();
  }, [level]);

  //console.log(currentCards);

  return (
    <div>
      <div>
        <Header currentScore={currentScore} hiScore={hiScore} />
      </div>
      <div>
        <Gameboard
          currentCards={currentCards}
          level={level}
          clicked={clicked}
          setClicked={setClicked}
        />
        <button onClick={() => setLevel(level + 1)}></button>
      </div>
    </div>
  );
};

export default App;
