import '../styles/main.css';
import { useState, useEffect } from 'react';

import github_icon from '../assets/icon-github.svg';
import hamburger_icon from '../assets/icon-hamburger.svg';

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => setMobileMenu(false));
  }, [mobileMenu]);

  mobileMenu
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = 'auto');

  return (
    <header className="navbar | bg-primary-100">
      <div className={mobileMenu ? 'navbar--mobile-shadow' : ''}>
        <div className="container">
          <div className="navbar--wrapper">
            <a
              href=""
              className="fw-bold fs-small-700 text-secondary-400 tracking-in-expand"
            >
              julian.hein
            </a>
            <button
              onClick={() => {
                setMobileMenu(!mobileMenu);
              }}
              className="navbar--mobile-toggle"
              aria-controls="mobile-navigation"
              aria-expanded="false"
            >
              <img
                className="navbar--icon-hamburger"
                src={hamburger_icon}
                alt=""
                aria-hidden="true"
              />
              <span className="visually-hidden">Menu</span>
            </button>
            <nav
              className={'navbar--navigation' + (mobileMenu ? '-mobile' : '')}
            >
              <ul role="list" className="navbar--list">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Projects</a>
                </li>
                <li>
                  <a href="#">Contact Me</a>
                </li>
              </ul>
            </nav>
            <a href="https://github.com/SoyJuju" target="_blank">
              <img className="navbar--github-icon" src={github_icon} alt="" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
