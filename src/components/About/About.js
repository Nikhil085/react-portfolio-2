import React, { useState, useEffect } from 'react';
import '../About/About.css';
import image from '../../assets/Copilot1.png';
import Resume from '../../assets/Resume.pdf'
import  Backtotop from '../Home/Backtotop.js';


function About() {

  const [zoomIn, setzoomIn] = useState(false);

  const handleZoomIn = () => {
    setzoomIn(!zoomIn)
  }


  return (
    <section className='about container section' id='about'>
         <Backtotop/>
     <h2 className='section__title'>About Me</h2>
     <div className='about__container grid'>
      <img src={image} alt='about img' title='View Image' onClick={handleZoomIn} className='about__img'/>
       <div className='about__data grid'>
        <div className='about__info'>
          <p className='about__description'>As a web designer, my objective is to make a positive impact
              on clients, co-workers, and the Internet using my skills and
               experience to design compelling and attractive websites.A versatile frontend developer proficient in modern web technologies, 
               adept at crafting engaging user interfaces and 
               seamless user experiences. Skilled in HTML, CSS, and JavaScript, with a keen eye for design principles and responsive layouts. </p>
          <a href={Resume} download="" className='btn'>Download CV</a>
          <a href='#contact' style={{marginLeft:"1rem"}} className='btn'>Let's Talk</a>
        </div>
       </div>
     </div>
     {zoomIn && (
        <div className='zoom-in' onClick={handleZoomIn}>
          <img src={image} alt='zoomed-in img' />
        </div>
      )}
    </section>
  )
}

export default About;