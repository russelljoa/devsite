import React from 'react';
import './Tab.css';

const Tab = ({ tab, isActive, onClick }) => {
    const getFileIcon = () => {
        switch (tab.language) {
            case 'markdown':
                return tab.iconfile;
            case 'python':
                return tab.iconfile;
            case 'json':
                return tab.iconfile;
            case 'jsx':
                return tab.iconfile;
            default:
                return tab.iconfile;
        }
    };

    return (
        <div 
            className={`tab ${isActive ? 'active' : ''}`} 
            onClick={onClick}
        >
            <span className="file-icon"><img className = "tab-icon" src = {getFileIcon()}></img></span>
            <span className="file-name">{tab.title}</span>
            <span className="close-tab">×</span>
        </div>
    );
};

export default Tab;