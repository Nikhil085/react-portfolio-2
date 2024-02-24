import React from 'react';
import instagram from '../../assets/instagram.png';
import git from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
import Twitter from '../../assets/twitter.png';

function headersocial() {
  return (
    <div className='home__socials'>
         <a  href='https://www.instagram.com/its_nikhil_0101/' className='home__social-link' target='_blank'>
         <img src={instagram} alt='instagram img'/>
         </a>
         <a  href='https://www.linkedin.com/in/nikhil-mahajan-085' className='home__social-link' target='_blank'>
         <img src={linkedin} alt='instagram img'/>
         </a>
         <a  href='https://github.com/Nikhil085' className='home__social-link' target='_blank'>
         <img src={git} alt='instagram img'/>
         </a>
         <a  href='https://twitter.com' className='home__social-link' target='_blank'>
         <img src={Twitter} alt='instagram img'/>
         </a>
        
    </div>
  )
}

export default headersocial;