import React, { useState, useEffect } from 'react';
import './Cursor.css';

const Cursor = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(prev => !prev);
        }, 500); // Toggle visibility every 500ms

        return () => clearInterval(interval);
    }, []);

    return (
        <span className="cursor" style={{ visibility: visible ? 'visible' : 'hidden' }}>
            █
        </span>
    );
};

export default Cursor;