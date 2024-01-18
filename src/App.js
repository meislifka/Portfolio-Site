import React from 'react'
import Navbar from './components/NavBar';
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';
import { Extra } from './components/Extra';
import { Footer } from './components/Footer';
import { Home } from './components/Home';


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutMe />
      <Projects />
      <Extra />
      <Footer />


    </div>
  );
}

export default App;
