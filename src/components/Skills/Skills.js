import React from 'react';
import './Skills.css'
import Reacticon from '../../assets/react.png'
import js from '../../assets/javascript.png'
import css from '../../assets/css.png'
import mysql from '../../assets/mysql.png'
import mongo from '../../assets/mongo-db.png'
import node from '../../assets/nodejs.png'
import java from '../../assets/java.png'
import html from '../../assets/html.png'
import Bootstrap from '../../assets/bootstrap.png'
import MUI from '../../assets/mui.png'
import gsap from '../../assets/gsap-greensock.svg'
import Express from '../../assets/express.png';

function Skills() {
  return (
    <div className='skill__container' id='skills'>
        <h3>What Skill I have -</h3>
        <div className='skills'>
            <a className='skill'>
                <img title='React' src={Reacticon} alt='react-icon'/>
            </a>
            <a className='skill'>
                <img title='javaScript' src={js} alt='react-icon'/>
            </a>
            <a className='skill'>
                <img title='Node.js' src={node} alt='react-icon'/>
            </a>
            <a className='skill'>
                <img title='Java' src={java} alt='react-icon'/>
            </a>
            <a className='skill'>
                <img title='Mongodb' src={mongo} alt='react-icon'/>
            </a>
            <a className='skill'>
                <img title='MySql' src={mysql} alt='react-icon'/>
            </a>
            <a className='skill'>
                <img title='HTML' src={html} alt='react-icon'/>
            </a>
            <a className='skill'>
                <img title='CSS' src={css} alt='react-icon'/>
            </a>
            <a className='skill'>
                <img title='Bootstrap' src={Bootstrap}/>
            </a>
            <a className='skill'>
                <img title='GSAP' src={gsap}/>
            </a>
            <a className='skill'>
                <img title='express' src={Express}/>
            </a>
            <a className='skill'>
                <img title='Material UI' src={MUI}/>
            </a>
        </div>
       
    </div>
  )
}

export default Skills;