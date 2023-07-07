import React from "react";

const Header = ({ currentScore, hiScore }) => {
  //track current and high score
  return (
    <div id="header">
      <p>Current Score: {currentScore}</p>
      <p>Hi-Score: {hiScore}</p>
    </div>
  );
};

export default Header;
