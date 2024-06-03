// Navbar.js
import React from 'react';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#7375de' }}>
      <a className="navbar-brand text-white" href="#">
        Binary Education
      </a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              <i className="material-icons">notifications</i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
