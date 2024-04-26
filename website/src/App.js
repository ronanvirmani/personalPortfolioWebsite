import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Home from './components/Home';
import Contact from './components/Contact';

function App() {
    return (
        <>
            <Navbar />            
            <Home />
            <About />
            <Projects />
            <Contact />
        </>
    );
}

export default App;