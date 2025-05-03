import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, speed = 100, onComplete }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        if (index < text.length) {
            const randomSpeed = speed + Math.floor(Math.random() * 200) - 100; // Random speed within ±75
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text[index]);
                setIndex((prev) => prev + 1);
            }, randomSpeed);
            return () => clearTimeout(timeout);
        } else {
            const completionTimeout = setTimeout(() => {
                setShowCursor(false); // Stop showing the cursor when typing is finished
                
                if (onComplete) onComplete(); // Trigger onComplete callback
            }, 1000); // Wait 1 second before completing
            return () => clearTimeout(completionTimeout);
        }
    }, [index, text, speed, onComplete]);

    useEffect(() => {
        if (index < text.length) {
            const cursorInterval = setInterval(() => {
                setShowCursor((prev) => !prev);
            }, 500); // Blink cursor every 500ms
            return () => clearInterval(cursorInterval);
        }
    }, [index]);

    return <span>{displayedText}{showCursor && '█'}</span>;
};

export default Typewriter;