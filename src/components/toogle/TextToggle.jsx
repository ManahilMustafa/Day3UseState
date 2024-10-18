import React, { useState } from "react";
import "./TextToggle.css"; // Ensure this path matches your file structure

const TextToggle = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleText = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="text-toggle-container">
      <button onClick={toggleText} className="toggle-button">
        {isVisible ? "Hide" : "Show"} Text
      </button>
      {isVisible && <p className="toggle-text">Hello, this is the toggled text!</p>}
    </div>
  );
};

export default TextToggle;
