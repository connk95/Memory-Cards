import React from "react";

const Header = ({ currentScore, hiScore }) => {
  return (
    <div>
      <p>Current Score: {currentScore}</p>
      <p>Hi-Score: {hiScore}</p>
    </div>
  );
};

export default Header;
