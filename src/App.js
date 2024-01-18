import React from 'react'
import Navbar from './components/NavBar';
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';
import { Resume } from './components/Resume';
import { Footer } from './components/Footer';
import { Home } from './components/Home';


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutMe />
      <Projects />
      <Resume />
      <Footer />


    </div>
  );
}

export default App;
