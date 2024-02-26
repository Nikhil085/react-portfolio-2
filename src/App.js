import React from 'react';
import '../src/App.css'
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Services from './components/Services/Services';
import Education from './components/Education/education';
import Projects from './components/projects/Projects';
import Contact from './components/Contact/Contact';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div>
      <Nav/>
   <main className='main'>
    <Home/>
    <About/>
    <Skills/>
    <Projects/>
    <Education/>
    <Services/>
    <Contact/>
    </main>
    </div>
  )
}

export default App;