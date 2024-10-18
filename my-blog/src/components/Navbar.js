import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // We'll create this CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ toggleTheme, theme }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">My Blog</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <button id="theme-toggle" className="theme-toggle-btn" onClick={toggleTheme}>
            {theme === 'dark-mode' ? (
              <FontAwesomeIcon icon={faSun} /> // Show sun icon for dark mode
            ) : (
              <FontAwesomeIcon icon={faMoon} /> // Show moon icon for light mode
            )}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
