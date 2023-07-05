import React, { useEffect } from "react";

const Card = ({ currentCards, clicked, setClicked, index }) => {
  //push additional card to clicked array
  //   useEffect(() => {
  const addClicked = () => {
    setClicked([...clicked, currentCards.flag]);
  };

  console.log(clicked);
  //   });

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
