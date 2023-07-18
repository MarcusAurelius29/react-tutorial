import React from 'react'
import exampleImage from './images/react-logo.png';

function Header() {
    return (
        <header>
          <nav className='nav'>
            <img src={exampleImage} width = "120px" alt="react-logo" className="nav-logo"></img>
            <ul className = 'nav-items'>
              <li>Pricing</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </header>
    )
  }

export default Header