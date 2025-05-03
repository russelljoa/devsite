import React, { useEffect } from 'react';
import './Editor.css';
import Tab from './Tab';
import Cursor from './Cursor';
import { tabsData } from '../data/Tabs';
import Typewriter from './Typewriter';
// Import Prism properly
import Prism from 'prismjs';
// Import basic languages that don't depend on others
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
// The rest can be imported after the core languages
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-java';

// Import line numbers plugin if needed
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

const Editor = ({ currentTab, setCurrentTab }) => {
    // Find the active tab content
    const activeTab = tabsData.find(tab => tab.id === currentTab) || tabsData[0];

    // Effect to trigger Prism highlighting when content or language changes
    useEffect(() => {
        if (activeTab && activeTab.language !== 'pdf') {
            // Delay slightly to ensure DOM is ready
            setTimeout(() => {
                Prism.highlightAll();
            }, 0);
        }
    }, [currentTab, activeTab?.content, activeTab?.language]);

    // Map file extensions to Prism language names if needed
    const mapLanguageToPrism = (language) => {
        const mapping = {
            'js': 'javascript',
            'py': 'python',
            'md': 'markdown',
            'html': 'markup',
            'htm': 'markup',
            'xml': 'markup',
            'ts': 'typescript',
            'jsx': 'jsx',
            'json': 'json',
            'css': 'css',
            'java': 'java',
            // Add more mappings as needed
        };
        
        return mapping[language] || language || 'clike';
    };

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

        const prismLanguage = mapLanguageToPrism(activeTab.language);
        const lineCount = (activeTab.content.match(/\n/g) || []).length + 1;

        return (
            <>
            <div className="editor-content-wrapper">
                <div className="editor-synchronized-container">
                    <div className="line-numbers">
                        {Array.from({ length: lineCount }).map((_, i) => (
                            <div key={i} className="line-number">{i + 1}</div>
                        ))}
                    </div>
                    <div className="code-content">
                        <pre className="code-block">
                            <code className={`language-${prismLanguage}`}>
                                {activeTab.content}
                            </code>
                        </pre>
                    </div>
                </div>
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
            <div className="terminal-wrapper">
                <div className="terminal-header">TERMINAL</div>
                <div className="terminal-content">
                    <div className="terminal-lines">
                    PS C:\Users\rjoar\Documents\GitHub\portfolio&gt; <span> </span>
                        <Typewriter
                        speed = {150}
                        text = "echo $intro_msg"
                        onComplete={() => {
                            document.getElementById('read-below-message').style.display = 'block';
                        }}
                        />
                        <br></br>
                        <div id="read-below-message" style={{ display: 'none' }}>
                            ====== Read Below ======<br></br>
                            Hey! If you have a hard time reading code,<br></br>
                            click the RUN button in the top right<br></br>
                            of the header to see the content better!<br></br>
                            <Cursor/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Editor;
