import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import './HomeHeader.css';
import HomeHeader from './HomeHeader'; 
import Typer from './Typer';

export default function Home() {
  return (
    <div className="home-body">
        <div className="home-inner">
          <HomeHeader />
          <h1 className="home-title doto">HI, I'M RUSSELL</h1>
            
            
        </div>
    </div>
  );
};