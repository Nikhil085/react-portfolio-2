import React, { useState } from 'react'
import PData from './Pdata';
import './Projects.css'

function Projects () {

    const [projects, setProjects] = useState(PData);
     const filterItem = (categoryItem) => {
      const updatedItems = PData.filter((curElem) => {
        return curElem.category === categoryItem
      })

      setProjects(updatedItems);

     }




  return (
    <section className='work container section' id='work-section'>
          <h2 className='section__title'>Recent Works</h2>
          <div className='work__filter'>
            <span className='work__item' onClick={() => setProjects(PData)}>Everything</span>
            <span className='work__item' onClick={() => filterItem("Creative")}>Creative</span>
            <span className='work__item' onClick={() => filterItem("Major")}>Major</span>
            <span className='work__item'onClick={() => filterItem("Design")}>Design</span>
            <span className='work__item'onClick={() => filterItem("Branding")}>Animated Element</span>
          </div>
          <div className='work__container grid'>
                {projects.map((elem) => {
                    const {id, image, title, category, url} = elem;
                    return (
                        <div className='work__card' key={id}>
                            <div className='work__thumbnail'>
                                <img src={image} alt='' className='work__img'/>
                                <div className='work__mask'></div>
                            </div>
                            <span className='work__category'>{category}</span>  
                            <h3 className='work__title'>{title}</h3>
                            <a href={url} className='work__button'>
                            <lord-icon
                            className="live"
                             src="https://cdn.lordicon.com/mqwitsmv.json"
                             trigger="hover">
                            </lord-icon>   
                            </a>  
                        </div>
                    )
                })}
          </div>
    </section>
  )
}

export default Projects;