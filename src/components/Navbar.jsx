import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-slate-100 py-2 mb-6">
      <nav className="main-container">
        <Link to="/">
          <img
            src="/assets/img/video-logo.png"
            alt="My-Tube"
            className="h-14"
          />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
