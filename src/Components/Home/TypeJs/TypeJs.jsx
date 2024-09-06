import React, { useState, useEffect, useRef } from "react";
import "./TypeJs.css"; // Import the CSS styles

const TypeJs = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [counter, setCounter] = useState(0); // Initialize the counter at 0
  const text = "We are the Society of Automotive Engineers Collegiate Club of National Institute of Technology Durgapur";
  const intervalRef = useRef(null);

  useEffect(() => {
    const typeJs = () => {
      if (counter < text.length) {
        setDisplayedText((prev) => prev + text.charAt(counter)); // Add the next character
        setCounter((prev) => prev + 1); // Move to the next character
      } else {
        clearInterval(intervalRef.current); // Clear the interval when typing is complete
      }
    };

    // Set up the interval for typing
    intervalRef.current = setInterval(typeJs, 100);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalRef.current);
  }, [counter, text]);

  return (
    <div className="hom-typeJsWrapper">
      <div className="hom-container">
        <p className="hom-typeJsText">{displayedText}</p>
      </div>
    </div>
  );
};

export default TypeJs;
