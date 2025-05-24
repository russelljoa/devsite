import React, { useState, useEffect } from 'react';
import './Typer.css';

/**
 * Typer component that cycles through different fonts and displays text
 * @param {Object} props
 * @param {string} props.text - Text to display and animate
 * @param {number} props.delay - Delay between font changes in milliseconds
 */
const Typer = ({ text = "Hello World", delay = 2000 }) => {
  const fontClasses = [
    'doto-default',
    'cardo-regular',
    'space-mono-regular',
    'ibm-plex-mono-regular'
  ];
  
  const [currentFontIndex, setCurrentFontIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Set visible when component mounts
    setIsVisible(true);

    // Display the first font before starting the interval
    const timeoutId = setTimeout(() => {
      if (!animationComplete) {
        const intervalId = setInterval(() => {
          setCurrentFontIndex(prevIndex => {
            const nextIndex = prevIndex + 1;
            // If we've reached the last font (ibm-plex-mono-regular), clear interval and set animation complete
            if (nextIndex >= fontClasses.length - 1) {
              clearInterval(intervalId);
              setAnimationComplete(true);
              return fontClasses.length - 1; // Set to last index (ibm-plex-mono-regular)
            }
            return nextIndex;
          });
        }, delay);

        // Clean up interval on unmount
        return () => clearInterval(intervalId);
      }
    }, delay);

    // Clean up timeout on unmount
    return () => clearTimeout(timeoutId);
  }, [delay, animationComplete, fontClasses.length]);

  return (
    <div className={`typer-container ${isVisible ? 'visible' : 'hidden'}`}>
      <span className={fontClasses[currentFontIndex]}>
        {text}
      </span>
    </div>
  );
};

export default Typer;