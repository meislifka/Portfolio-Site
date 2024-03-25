import React from 'react'
import Navbar from './components/NavBar';
import { Home } from './components/Home';
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';
import { Extras } from './components/Extras';
import { Footer } from './components/Footer';



function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutMe />
      <Projects />
      <Extras />
      <Footer />


    </div>
  );
}

export default App;
