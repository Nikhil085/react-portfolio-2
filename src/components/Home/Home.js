import React,{useState} from 'react';
import '../Home/Home.css';
import Social from './headersocial.js';
import Me from '../../assets/Copilot.jpg';
import Scrolldown from './Scrolldown.js';
import Shapes from './Shapes.js';



function Home() {

  const [zoomIn, setzoomIn] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false); 

  const handleZoomIn = () => {
    setzoomIn(!zoomIn)
  }

  const handleSidebarToggle = () => {
    setShowSidebar(!showSidebar); 
  };

  return (
    <section className='home container' id='home'>
        <div className='intro'>
            <img src={Me} title='View Image' alt='' onClick={handleZoomIn} className='home__img' />
            <p className='hello'>Hello I'M</p>
            <h1 className='home__name'>Nikhil Mahajan</h1>
            <span className='home__education'>I'm a Frontend Developer</span>
            <Social/>
            <a href='#contact' className='btn'>Hire Me</a>
            <Scrolldown/>
        </div>
        <Shapes/>
        {zoomIn && (
        <div className='zoom-in' onClick={handleZoomIn}>
          <img src={Me} alt='zoomed-in img' />
        </div>
      )}
      <label class="hamburger">
  <input type="checkbox"onClick={handleSidebarToggle}/>
  <svg viewBox="0 0 32 32">
    <path class="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
    <path class="line" d="M7 16 27 16"></path>
  </svg>
</label>
    </section>
  )
}

export default Home;