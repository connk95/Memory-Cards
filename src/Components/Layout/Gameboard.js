import React from "react";
import Card from "../Cards/Card";

const Gameboard = ({
  currentCards,
  level,
  clicked,
  setClicked,
  setLevel,
  currentScore,
  setCurrentScore,
}) => {
  //loads home screen if level is 0

  if (level < 1) {
    return (
      <div>
        <h1 onClick={() => setLevel(level + 1)}>Start</h1>
        <p>Instructions</p>
      </div>
    );

    //load cards when level is 1 or higher
  } else {
    return currentCards.map((currentCards, index) => (
      <Card
        key={`flag${index}`}
        index={index}
        currentCards={currentCards}
        clicked={clicked}
        setClicked={setClicked}
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
      />
    ));
  }
};

export default Gameboard;
