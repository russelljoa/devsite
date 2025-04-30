import React, { useState } from 'react';
import './FileExplorer.css';
import { tabsData } from '../data/Tabs';

const FileExplorer = ({ setCurrentTab, currentTab }) => {
    const [expandedFolders, setExpandedFolders] = useState({
        portfolio: true,
        src: true,
        about: true
    });

    const toggleFolder = (folder) => {
        setExpandedFolders({
            ...expandedFolders,
            [folder]: !expandedFolders[folder]
        });
    };

    // Find the contact.css tab
    const contactCssTab = tabsData.find(tab => tab.id === "contact.css");
    const resumePdfTab = tabsData.find(tab => tab.id === "resume.pdf");
    
    // Filter tabs to exclude contact.css and resume.pdf from portfolio section
    // They will only be shown in the SRC folder
    const portfolioTabs = tabsData.filter(tab => tab.id !== "contact.css" && tab.id !== "resume.pdf");

    return (
        <div className="file-explorer">
            <div className="explorer-title">
                EXPLORER
            </div>
            
            <div className="folder">
                <div 
                    className="folder-header" 
                    onClick={() => toggleFolder('portfolio')}
                >
                    <span className={`folder-icon ${expandedFolders.portfolio ? 'expanded' : ''}`}><img className = "arrow-icon" src = "public/Icons/arrow.png"></img></span>
                    <span className="folder-name">PORTFOLIO</span>
                </div>
                
                {expandedFolders.portfolio && (
                    <div className="folder-content">
                        {portfolioTabs.map(tab => (
                            <div 
                                key={tab.id}
                                className={`file-item ${currentTab === tab.id ? 'active' : ''}`}
                                onClick={() => setCurrentTab(tab.id)}
                            >
                                <span className="file-icon"><img className = "tab-icon" src = {tab.iconfile}></img></span>
                                {tab.title}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            
            <div className="folder">
                <div 
                    className="folder-header" 
                    onClick={() => toggleFolder('src')}
                >
                    <span className={`folder-icon ${expandedFolders.src ? 'expanded' : ''}`}><img className = "arrow-icon" src = "public/Icons/arrow.png"></img></span>
                    <span className="folder-name">SRC</span>
                </div>
                
                {expandedFolders.src && (
                    <div className="folder-content">
                        {/* Only showing contact.css in SRC folder */}
                        {contactCssTab && (
                            <div 
                                className={`file-item ${currentTab === contactCssTab.id ? 'active' : ''}`}
                                onClick={() => setCurrentTab(contactCssTab.id)}
                            >
                                <span className="file-icon">
                                    <img className="tab-icon" src={contactCssTab.iconfile} />
                                </span>
                                {contactCssTab.title}
                            </div>
                        )}
                        {resumePdfTab && (
                            <div 
                                className={`file-item ${currentTab === resumePdfTab.id ? 'active' : ''}`}
                                onClick={() => setCurrentTab(resumePdfTab.id)}
                            >
                                <span className="file-icon">
                                    <img className="tab-icon" src={resumePdfTab.iconfile} />
                                </span>
                                {resumePdfTab.title}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default FileExplorer;