import React, { useState } from "react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div style={{ 
      backgroundColor: isDarkMode ? "#333" : "#fff", 
      color: isDarkMode ? "#fff" : "#000", 
      padding: "20px", 
      textAlign: "center" 
    }}>
      <h1>{isDarkMode ? "Dark Mode" : "Light Mode"}</h1>
      <button onClick={toggleTheme}>
        Switch to {isDarkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
};

export default ThemeToggle;
