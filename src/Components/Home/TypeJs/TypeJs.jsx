import React, { useState, useEffect, useRef } from "react";
import "./TypeJs.css"; // Import the CSS styles

const TypeJs = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [counter, setCounter] = useState(0); // Start counter at 0 instead of -1
  const text = "We are the Society of Automotive Engineers Collegiate Club of National Institute of Technology Durgapur";
  const intervalRef = useRef(null);

  useEffect(() => {
    const typeJs = () => {
      // Check if counter is less than text length
      setCounter((prevCounter) => {
        if (prevCounter < text.length) {
          setDisplayedText((prevText) => prevText + text.charAt(prevCounter)); // Add character to text
          return prevCounter + 1;
        } else {
          clearInterval(intervalRef.current); // Stop interval once text is fully typed
          return prevCounter;
        }
      });
    };

    // Set up the interval for typing
    intervalRef.current = setInterval(typeJs, 100);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalRef.current);
  }, [text]);

  return (
    <div className="hom-typeJsWrapper">
      <div className="hom-container mx-auto">
        <p className="hom-typeJsText">{displayedText}</p>
      </div>
    </div>
  );
};

export default TypeJs;
