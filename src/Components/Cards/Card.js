import React, { useEffect } from "react";

const Card = ({
  currentCards,
  clicked,
  setClicked,
  index,
  currentScore,
  setCurrentScore,
}) => {
  //push additional card to clicked array
  const addClicked = () => {
    setClicked([...clicked, currentCards.flag]);
    setCurrentScore(currentScore + 1);
  };

  return (
    <div id={`${index}card`}>
      <img
        className="flag"
        src={`${currentCards.asset}`}
        onClick={addClicked}
      ></img>
    </div>
  );
};

export default Card;
