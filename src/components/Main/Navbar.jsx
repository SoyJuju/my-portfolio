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

function changeStyle(contentArray, contentStyle, contentValue) {
  for (let i = 0; i < contentArray.length; i++) {
    contentArray[i].style[contentStyle] = contentValue;
  }
}
console.log(timelineTag);

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => setMobileMenu(false));

    return () => {
      removeEventListener('resize', () => setMobileMenu(false));
    };
  }, [mobileMenu]);

  if (mobileMenu) {
    document.body.style.overflow = 'hidden';
    changeStyle(timelineContainer, 'background', 'transparent');
    changeStyle(timelineArrowTag, 'border-right-color', 'rgb(119, 124, 124)');
    changeStyle(timelineYear, 'color', 'rgb(119, 124, 124)');
    changeStyle(timelineTag, 'opacity', '0.7');
    changeStyle(timelineImage, 'opacity', '0.3');
  } else {
    document.body.style.overflow = 'auto';
    changeStyle(timelineContainer, 'background', '#fff');
    changeStyle(timelineArrowTag, 'border-right-color', '#fff');
    changeStyle(timelineYear, 'color', '#fff');
    changeStyle(timelineTag, 'opacity', '1');
    changeStyle(timelineImage, 'opacity', '1');
  }

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
                  <a href="/blog/">Blog</a>
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
