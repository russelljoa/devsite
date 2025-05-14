import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Editor from "./Editor";
import FileExplorer from "./FileExplorer";
import Home from "./home/Home.jsx";

// Main editor view component
const EditorView = () => {
    const [currentTab, setCurrentTab] = useState("about.md");
    
    return (
        <div className="vscode-container">
            <div className="titlebar">
                <div className="window-title">Russell Joarder Portfolio - Visual Studio Code</div>
                <div className="window-controls">
                    <span className="control minimize"></span>
                    <span className="control maximize"></span>
                    <span className="control close"></span>
                </div>
            </div>
            <div className="wrapper">
                <div className="explorer-wrapper">
                    <FileExplorer setCurrentTab={setCurrentTab} currentTab={currentTab} />
                </div>
                <div className="editor-wrapper">
                    <Editor currentTab={currentTab} setCurrentTab={setCurrentTab} />
                </div>
            </div>
        </div>
    );
};

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<EditorView />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
