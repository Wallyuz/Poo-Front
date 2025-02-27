import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export default function Header({ isLoggedIn, onLogout, userId }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="containerLogin">
        <Link to="/">
          <svg viewBox="-1.8 -1.8 23.60 23.60" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="" transform="rotate(0)" stroke="">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.04"></g>
            <g id="SVGRepo_iconCarrier">
              <title>hospital [#1213]</title>
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g id="Page-1" strokeWidth="0.16" fill="none" fillRule="evenodd">
                <g id="Dribbble-Light-Preview" transform="translate(-420.000000, -2719.000000)" fill="#000000">
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path d="M377,2566 L377,2572 C377,2572.552 376.552,2573 376,2573 C375.448,2573 375,2572.552 375,2572 L375,2570 L373,2570 L373,2572 C373,2572.552 372.552,2573 372,2573 C371.448,2573 371,2572.552 371,2572 L371,2566 C371,2565.448 371.448,2565 372,2565 C372.552,2565 373,2565.448 373,2566 L373,2568 L375,2568 L375,2566 C375,2565.448 375.448,2565 376,2565 C376.552,2565 377,2565.448 377,2566 L377,2566 Z M382,2576 C382,2576.552 381.552,2577 381,2577 L367,2577 C366.448,2577 366,2576.552 366,2576 L366,2562 C366,2561.448 366.448,2561 367,2561 L381,2561 C381.552,2561 382,2561.448 382,2562 L382,2576 Z M382,2559 L366,2559 C364.895,2559 364,2559.895 364,2561 L364,2577 C364,2578.104 364.895,2579 366,2579 L382,2579 C383.105,2579 384,2578.104 384,2577 L384,2561 C384,2559.895 383.105,2559 382,2559 L382,2559 Z" id="hospital-[#1213]"></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </Link>
        <div className="hamburger" onClick={toggleMenu}>
          &#9776;
        </div>
        <div className={`links ${menuOpen ? 'open' : ''}`}>
          {isLoggedIn ? (
            <>
              <Link to={`/account-details/${userId}`} className="Login">Minha Conta</Link>
              <button onClick={onLogout} className="Login">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="Login">Login</Link>
              <Link to="/register" className="Login">Registrar</Link>
            </>
          )}
          <Link to="/ServiceRedirect" className="Login">Serviços</Link>
        </div>
      </div>
    </header>
  );
}