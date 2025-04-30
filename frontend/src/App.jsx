import { useState } from "react";
import "./App.css";
import Editor from "./Editor";
import FileExplorer from "./FileExplorer";

function App() {
    const [currentTab, setCurrentTab] = useState("home.md");
    
    return (
    <>
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
                    <FileExplorer setCurrentTab={setCurrentTab} />
                </div>
                <div className="editor-wrapper">
                    <Editor currentTab={currentTab} setCurrentTab={setCurrentTab} />
                </div>
            </div>
        </div>
    </>
    );
}

export default App;
