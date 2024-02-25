import React from 'react';
import '../src/App.css'
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Services from './components/Services/Services';
import Education from './components/Education/education';
import Projects from './components/projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div>
   <Sidebar/>
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