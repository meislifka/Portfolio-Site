import React from 'react'
import Navbar from './components/NavBar';
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <Projects />
      <Resume />
      <Contact />

    </div>
  );
}

export default App;
