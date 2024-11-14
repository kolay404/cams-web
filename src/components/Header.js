import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Header.css'; // Adjust the path if necessary

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const handleBackClick = () => {
    window.history.back(); // Go back to the previous page in history
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <button onClick={handleBackClick} className="back-icon"> {/* Make the back icon a button */}
        <i className="fas fa-arrow-left"></i>
      </button>
      <img src="/cit-logo2.png" alt="CITU Logo2" className="logo2-image" />
      <nav>
        <ul>
          <li className="hamburger-icon">
            <button onClick={toggleMenu} className="hamburger-button">
              &#9776; {/* Hamburger icon */}
            </button>
            {menuOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/">Home</Link></li> {/* Updated to use Link */}
                <li><Link to="/Sining">SINING NG PAKIKIPAGTALASTASAN</Link></li> {/* Updated to use Link */}
                <li><Link to="/Pagbasa">PAGBASA AT PAGSULAT SA IBA’T IBANG DISCIPLINA</Link></li> {/* Updated to use Link */}
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
