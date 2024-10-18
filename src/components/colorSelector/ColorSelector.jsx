import React, { useState } from "react";

const ColorSelector = () => {
  const [color, setColor] = useState("");

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div>
      <h2>Select Your Favorite Color:</h2>
      <select value={color} onChange={handleColorChange}>
        <option value="">Select a color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </select>
      {color && <p>Your favorite color is: {color}</p>}
    </div>
  );
};

export default ColorSelector;
