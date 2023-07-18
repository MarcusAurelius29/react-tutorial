import React from 'react'
import exampleImage from './images/react-logo.png';

function Header() {
    return (
      <nav className='nav-title'>
        <img src={exampleImage} alt="logo" />
        <h3>ReactFacts</h3>
        <h4>React Course - Project 1</h4>
      </nav>
    )
  }

export default Header