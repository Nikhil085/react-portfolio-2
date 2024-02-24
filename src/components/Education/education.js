import React from 'react'
import './education.css';
import Data from './Data';
import Card from './Card';

function education() {
  return (
    <section className='education container section ' id='education'>
        <h2 className='section__title'>Experience</h2>
     <div className='education__container grid'>
        <div className='timeline grid'>
            {Data.map((val, id) => {
                if(val.category === "education"){
                    return (
                        <Card key={id}
                        icon={val.icon}
                        title={val.title} 
                        year = {val.year} 
                        desc={val.desc}
                        />
                    )
                }
            })}
        </div>
        <div className='timeline grid'>
            {Data.map((val, index) => {
                if(val.category === "experience"){
                    return (
                        <Card key={index}
                        icon={val.icon} 
                        title={val.title} 
                        year={val.year} 
                        desc={val.desc}
                        />
                    )
                }
            })}
        </div>
     </div>
    </section>
  )
}

export default education;