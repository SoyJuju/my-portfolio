import '../../styles/main.css';
import { useState, useEffect } from 'react';

import github_icon from '../../assets/icon-github.svg';
import hamburger_icon from '../../assets/icon-hamburger.svg';

const timelineContainer = document.getElementsByClassName(
  'vertical-timeline-element-content bounce-in'
);

const timelineArrowTag = document.getElementsByClassName(
  'vertical-timeline-element-content-arrow'
);

const timelineYear = document.getElementsByClassName('timeline--year');

const timelineTag = document.getElementsByClassName('timeline--tag');

const timelineImage = document.getElementsByClassName('timeline--image');

console.log(timelineTag);

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => setMobileMenu(false));

    if (mobileMenu) {
      for (let i = 0; i < timelineContainer.length; i++) {
        document.body.style.overflow = 'hidden';
        timelineContainer[i].style['background'] = 'transparent';
        timelineArrowTag[i].style['border-right-color'] = 'rgb(119, 124, 124)';
        timelineYear[i].style['color'] = 'rgb(119, 124, 124)';
        timelineTag[i].style['opacity'] = '0.7';
        timelineImage[i].style['opacity'] = '0.3';
      }
    } else {
      for (let i = 0; i < timelineContainer.length; i++) {
        document.body.style.overflow = 'auto';
        timelineContainer[i].style['background'] = '#fff';
        timelineArrowTag[i].style['border-right-color'] = '#fff';
        timelineYear[i].style['color'] = '#fff';
        timelineTag[i].style['opacity'] = '1';
        timelineImage[i].style['opacity'] = '1';
      }
    }

    return () => {
      removeEventListener('resize', () => setMobileMenu(false));
    };
  }, [mobileMenu]);

  return (
    <header className="navbar | bg-primary-100">
      <div className={mobileMenu ? 'navbar--mobile-shadow' : ''}>
        <div className="container">
          <div className="navbar--wrapper">
            <a href="" className="fw-bold fs-small-700 text-secondary-400">
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
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/blog/">About</a>
                </li>
                <li>
                  <a href="/projects/">Projects</a>
                </li>
                <li>
                  <a href="/contact/">Contact Me</a>
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
