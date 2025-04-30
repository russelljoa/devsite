import React from 'react';
import './Editor.css';
import Tab from './Tab';
import { tabsData } from '../data/Tabs';

const Editor = ({ currentTab, setCurrentTab }) => {
    // Find the active tab content
    const activeTab = tabsData.find(tab => tab.id === currentTab) || tabsData[0];

    // Render different content based on file type
    const renderContent = () => {
        if (activeTab.language === 'pdf') {
            return (
                <div className="pdf-viewer" style={{ width: '100%', height: '100%' }}>
                    <iframe 
                        src={activeTab.filePath} 
                        width="100%" 
                        height="100%" 
                        style={{ border: 'none', display: 'block' }}
                        title={activeTab.title}
                    />
                </div>
            );
        }

        return (
            <>
                <div className="line-numbers">
                    {Array.from({ length: (activeTab.content.match(/\n/g) || []).length + 1 }).map((_, i) => (
                        <div key={i} className="line-number">{i + 1}</div>
                    ))}
                </div>
                <div className="code-content">
                    <pre className={`language-${activeTab.language}`}>
                        <code>{activeTab.content}</code>
                    </pre>
                </div>
            </>
        );
    };

    return (
        <div className="editor-container">
            <div className="editor-header">
                <div className="tabs-container">
                    {tabsData.map(tab => (
                        <Tab 
                            key={tab.id}
                            tab={tab}
                            isActive={tab.id === currentTab}
                            onClick={() => setCurrentTab(tab.id)}
                        />
                    ))}
                </div>
                <div className="run-button-container">
                    <div className="run-button-wrapper">
                        <button className="run-button">
                            <img src="/icons/run.png" alt="Run" className="run-icon" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="main-editor-content" style={activeTab.language === 'pdf' ? { padding: 0 } : {}}>
                {renderContent()}
            </div>
        </div>
    );
};

export default Editor;
