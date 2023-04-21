// Code Keypad Component Here

import React from "react";

const Keypad = () => {
  const handleInputChange = (e) => {
    console.log("Entering password...");
  };

  return (
    <input type="password" onChange={handleInputChange} />
  );
};

export default Keypad;