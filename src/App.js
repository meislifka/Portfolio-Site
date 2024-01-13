import React from 'react'
import Navbar from './components/NavBar';
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';
import { Resume } from './components/Resume';
import { Footer } from './components/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <Projects />
      <Resume />
      <Footer />


    </div>
  );
}

export default App;
