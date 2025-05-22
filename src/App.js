import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Education from './components/Education';
import HomeSection from './components/HomeSection'; // <-- Update import
import './index.css'; // <-- If you renamed Portfolio.css to index.css

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const profilePicUrl = "https://github.com/EthiliSundaravel.png";
  const contactDetails = {
    email: "ethilispsdpe@gmail.com",
    phone: "437-665-8572",
    linkedin: "https://linkedin.com/in/ethili-sundaravel-5815"
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`portfolio-bg ${darkMode ? 'dark' : ''}`}>
      <button
        className="theme-toggle"
        onClick={toggleDarkMode}
        style={{ position: 'fixed', top: 80, right: 20, zIndex: 3000 }}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <Header />
      <HomeSection profilePicUrl={profilePicUrl} /> {/* Updated usage */}
      <main>
        <About profileImage={profilePicUrl} />
        <Experience />
        <Certifications />
        <Education />
        <Skills />
        <Contact contactInfo={contactDetails} />
      </main>
    </div>
  );
}

export default App;
