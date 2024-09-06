import React, { useState, useEffect, useRef } from "react";
import "./TypeJs.css"; // Import the CSS styles

const TypeJs = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [counter, setCounter] = useState(0); // Start counter at 0
  const text = "We are the Society of Automotive Engineers Collegiate Club of National Institute of Technology Durgapur";
  const intervalRef = useRef(null);

  const typingSpeed = 75; 

  useEffect(() => {
    const typeJs = () => {
     
      setCounter((prevCounter) => {
        if (prevCounter < text.length) {
          setDisplayedText((prevText) => prevText + text.charAt(prevCounter)); 
          return prevCounter + 1;
        } else {
          clearInterval(intervalRef.current); 
          return prevCounter;
        }
      });
    };


    intervalRef.current = setInterval(typeJs, typingSpeed);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalRef.current);
  }, [text, typingSpeed]); // Add typingSpeed to the dependency array

  return (
    <div className="hom-typeJsWrapper">
      <div className="hom-container mx-auto">
        <p className="hom-typeJsText">{displayedText}</p>
      </div>
    </div>
  );
};

export default TypeJs;
