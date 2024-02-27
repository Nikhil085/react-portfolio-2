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
        href='#home-section' 
        onMouseEnter={() => handleMouseEnter('#home-section')}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        className={activeNav === '#home-section' ? 'active' : ''}
      >
        <span style={{ opacity: showTips && activeNav === '#home-section' ? 1 : 0 }} className="tips">Home</span>
        <AiOutlineHome />
      </a>
      <a 
        href='#about-section' 
        onMouseEnter={() => handleMouseEnter('#about-section')}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        className={activeNav === '#about-section' ? 'active' : ''}
      >
        <span style={{ opacity: showTips && activeNav === '#about-section' ? 1 : 0 }} className="tips">About</span>
        <AiOutlineUser />
      </a>
      <a 
        href='#skills-section' 
        onMouseEnter={() => handleMouseEnter('#skills-section')}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        className={activeNav === '#skills-section' ? 'active' : ''}
      >
        <span style={{ opacity: showTips && activeNav === '#skills-section' ? 1 : 0 }} className="tips">Skill</span>
        <BiBook/>
      </a>
      <a 
        href='#work-section' 
        onMouseEnter={() => handleMouseEnter('#work-section')}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        className={activeNav === '#work-section' ? 'active' : ''}
      >
        <span style={{ opacity: showTips && activeNav === '#work-section' ? 1 : 0 }} className="tips">Project</span>
        <RiServiceLine />
      </a>
      <a 
        href='#contact-section' 
        onMouseEnter={() => handleMouseEnter('#contact-section')}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        className={activeNav === '#contact-section' ? 'active' : ''}
      >
        <span style={{ opacity: showTips && activeNav === '#contact-section' ? 1 : 0 }} className="tips">Contact</span>
        <MdOutlineMessage />
      </a>
    </nav>
  );
}

export default Nav;
