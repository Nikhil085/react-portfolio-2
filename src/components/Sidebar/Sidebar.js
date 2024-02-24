import React from 'react';
import '../Sidebar/Sidebar.css';
import '../../App.css'
import Logo from '../../assets/—Pngtree—assasin logo mascot_3631773.png';

function Sidebar() {
  return (
   <>
    <aside className='aside'>
      <a href='#home' className='nav__logo'>
        <img src={Logo}/>
      </a>
      <nav className='nav'>
         <div className='nav__menu'>
          <ul className='nav__list'>
            <li className='nav__item'>
              <a href='#home' className='nav__link'>
              <lord-icon
              className="ani"
               src="https://cdn.lordicon.com/cnpvyndp.json"
               trigger="hover"
               ></lord-icon>
              </a>
            </li>
            <li className='nav__item'>
              <a href='#about' className='nav__link'>
              <lord-icon
               src="https://cdn.lordicon.com/kthelypq.json"
               trigger="hover"
               ></lord-icon>
              </a>
            </li>
            <li className='nav__item'>
              <a href='#skills' className='nav__link'>
              <lord-icon
               src="https://cdn.lordicon.com/lzgmgrnn.json"
               trigger="hover"
               ></lord-icon>
              </a>
            </li>
            <li className='nav__item'>
              <a href='#work' className='nav__link'>
              <lord-icon
               src="https://cdn.lordicon.com/ppyvfomi.json"
               trigger="hover"
               ></lord-icon>
              </a>
            </li>
            <li className='nav__item'>
              <a href='#education' className='nav__link'>
              <lord-icon
               src="https://cdn.lordicon.com/zyzoecaw.json"
               trigger="hover"
               ></lord-icon>
              </a>
            </li>
            <li className='nav__item'>
              <a href='#contact' className='nav__link'>
              <lord-icon
               src="https://cdn.lordicon.com/rsvfayfn.json"
               trigger="hover"
               ></lord-icon>
              </a>
            </li>
          </ul>
         </div>
      </nav>

      <div className='nav__footer'>
        <span className='copyright'>2023 - 2024</span>
      </div>
    </aside>
    <div className='nav__toggle'>
      <i className='icon-menu'></i>
    </div>
    </>
  )
}

export default Sidebar;