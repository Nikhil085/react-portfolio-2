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
    <div className='skill__container' id='skills-section'>
        <h3>What Skill I have -</h3>
        <div className='skills'>
            <div className='skill'>
                <img title='React' src={Reacticon} alt='React icon'/>
            </div>
            <div className='skill'>
                <img title='JavaScript' src={js} alt='JavaScript icon'/>
            </div>
            <div className='skill'>
                <img title='Node.js' src={node} alt='Node.js icon'/>
            </div>
            <div className='skill'>
                <img title='Java' src={java} alt='Java icon'/>
            </div>
            <div className='skill'>
                <img title='MongoDB' src={mongo} alt='MongoDB icon'/>
            </div>
            <div className='skill'>
                <img title='MySQL' src={mysql} alt='MySQL icon'/>
            </div>
            <div className='skill'>
                <img title='HTML' src={html} alt='HTML icon'/>
            </div>
            <div className='skill'>
                <img title='CSS' src={css} alt='CSS icon'/>
            </div>
            <div className='skill'>
                <img title='Bootstrap' src={Bootstrap} alt='Bootstrap icon'/>
            </div>
            <div className='skill'>
                <img title='GSAP' src={gsap} alt='GSAP icon'/>
            </div>
            <div className='skill'>
                <img title='Express' src={Express} alt='Express icon'/>
            </div>
            <div className='skill'>
                <img title='Material UI' src={MUI} alt='Material UI icon'/>
            </div>
        </div>
    </div>
  )
}

export default Skills;