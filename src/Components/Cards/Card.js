import React, { useEffect } from "react";

const Card = ({ currentCards, clicked, setClicked }) => {
  //push additional card to clicked array
  useEffect(() => {
    const addClicked = () => {
      setClicked([...clicked, currentCards.flag]);
    };

    document.addEventListener("click", addClicked);
    console.log(clicked);
  });

  return (
    <div id="card">
      <img className="flag" src={`${currentCards.asset}`}></img>
    </div>
  );
};

export default Card;
