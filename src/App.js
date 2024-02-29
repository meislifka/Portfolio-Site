import React from 'react'
import Navbar from './components/NavBar';
import { Home } from './components/Home';
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';
import { Awards } from './components/Awards';
import { Extra } from './components/Extra';
import { Footer } from './components/Footer';



function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutMe />
      <Projects />
      <Awards />
      <Extra />
      <Footer />


    </div>
  );
}

export default App;
