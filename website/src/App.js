import React from 'react';
import Navbar from './components/Navbar';
import About from './pages/About';
import Projects from './pages/Projects';
import Home from './pages/Home';
import Contact from './pages/Contact';

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