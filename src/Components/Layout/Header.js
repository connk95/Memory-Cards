import React from "react";

const Header = ({ currentScore, hiScore }) => {
  return (
    <div id="header">
      <p>Current Score: {currentScore}</p>
      <p>Hi-Score: {hiScore}</p>
    </div>
  );
};

export default Header;
