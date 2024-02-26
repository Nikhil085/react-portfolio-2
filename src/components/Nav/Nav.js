import React, { useState, useEffect } from 'react';
import './Nav.css';
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { MdOutlineMessage } from "react-icons/md";

function Nav() {
  const [activeNav, setActiveNav] = useState("");
  const [showTips, setShowTips] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const handleMouseEnter = (navId) => {
    if (activeNav !== navId) {
      setActiveNav(navId);
      setShowTips(true);
    }
  };

  const handleMouseLeave = () => {
    setShowTips(false);
  };

  const handleClick = () => {
    setActiveNav("");
    setShowTips(false);
  };

  return (
    <nav className={`nav-div ${visible ? 'show' : 'hide'}`}>
      <a 
        href='#' 
        onMouseEnter={() => handleMouseEnter('#')}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        className={activeNav === '#' ? 'active' : ''}
      >
        <span style={{ opacity: showTips && activeNav === '#' ? 1 : 0 }} className="tips">Home</span>
        <AiOutlineHome />
      </a>
      <a 
        href='#about' 
        onMouseEnter={() => handleMouseEnter('#about')}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <span style={{ opacity: showTips && activeNav === '#about' ? 1 : 0 }} className="tips">About</span>
        <AiOutlineUser />
      </a>
      <a 
        href='#skills' 
        onMouseEnter={() => handleMouseEnter('#skills')}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        className={activeNav === '#skills' ? 'active' : ''}
      >
        <span style={{ opacity: showTips && activeNav === '#skills' ? 1 : 0 }} className="tips">Skill</span>
        <BiBook/>
      </a>
      <a 
        href='#work' 
        onMouseEnter={() => handleMouseEnter('#work')}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        className={activeNav === '#work' ? 'active' : ''}
      >
        <span style={{ opacity: showTips && activeNav === '#work' ? 1 : 0 }} className="tips">Project</span>
        <RiServiceLine />
      </a>
      <a 
        href='#contact' 
        onMouseEnter={() => handleMouseEnter('#contact')}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <span style={{ opacity: showTips && activeNav === '#contact' ? 1 : 0 }} className="tips">Contact</span>
        <MdOutlineMessage />
      </a>
    </nav>
  );
}

export default Nav;
