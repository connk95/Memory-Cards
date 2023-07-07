import React, { useState } from "react";

const Instructions = () => {
  const [showText, setShowText] = useState(false);

  //toggle instructions
  const toggleInstructions = () => {
    setShowText(!showText);
  };

  return (
    <div id="instructions">
      <div id="instButton">
        {" "}
        <h2 onClick={toggleInstructions}>Instructions</h2>
      </div>
      {showText}
      <div style={{ display: showText ? "block" : "none" }}>
        <p>Your mission, should you choose to accept it,</p>
        <br></br>
        <p>
          is to identify the locations of enemy operatives around the globe.
        </p>
        <br></br>
        <br></br>
        <p>You must remember the last known location of each spy,</p>
        <br></br>
        <p>
          but be careful not to select the same location twice, lives are at
          stake.
        </p>
      </div>
    </div>
  );
};

export default Instructions;
