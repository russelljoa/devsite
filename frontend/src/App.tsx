import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";

// Main editor view component
const HomeRoot = () => {
    
    return (
        <>
        </>
    );
};

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeRoot />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
