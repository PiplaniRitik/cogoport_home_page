import React, { useEffect, useState } from 'react';
import './Navbar.css'
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdown1Open, setDropdown1Open] = useState(false);
  const [dropdown2Open, setDropdown2Open] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleDropdown1 = () => {
    setDropdown1Open(!dropdown1Open);
  };

  const handleDropdown2 = () => {
    setDropdown2Open(!dropdown2Open);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'white-bg' : 'yellow-bg'}`}>
      <div className="logo">
        <img src="path/to/logo.png" alt="Logo" />
      </div>
      <div className="nav-items">
        <div className="dropdown">
          <span className="dropdown-trigger" onClick={handleDropdown1}>
            Product &#9660;
          </span>
        </div>
        <div className="dropdown">
          <span className="dropdown-trigger" onClick={handleDropdown2}>
            Partner &#9660;
          </span>
        </div>
        <div className="dropdown">
          <span className="dropdown-trigger" onClick={handleDropdown1}>
            Tool &#9660;
          </span>
        </div>
        <div className="dropdown">
          <span className="dropdown-trigger" onClick={handleDropdown1}>
            Company &#9660;
          </span>
        </div>
        <div className="dropdown">
          <span className="dropdown-trigger" onClick={handleDropdown1}>
            Knowledge Center &#9660;
          </span>
        </div>
        <a href="#" className="Contact">Contact Us</a>
      </div>
      <div className="auth-buttons">
      <button className="login-button">Login</button>
        <button className="signup-button">Signup</button>
      </div>
    </nav>
  );
};

export default Navbar;
