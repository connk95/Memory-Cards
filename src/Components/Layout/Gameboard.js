import React from "react";
import Card from "../Cards/Card";

const Gameboard = ({ currentCards, level, clicked, setClicked }) => {
  //loads home screen if level is 0
  if (level < 1) {
    return (
      <div>
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
      />
    ));
  }
};

export default Gameboard;
