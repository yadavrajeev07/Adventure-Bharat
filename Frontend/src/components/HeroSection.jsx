import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

import { Link } from 'react-router-dom';
function HeroSection() {

  return (
    <div className='hero-container'>
      <video src='/videos/No Copyright, Copyright Free Videos, sunset, beach, sea, waves.mp4' autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
      <Link to="/Signup" ><Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button></Link>
      
        <Link to="/Trailer" ><Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
         
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button></Link>
      </div>
    </div>
  );
}

export default HeroSection;






