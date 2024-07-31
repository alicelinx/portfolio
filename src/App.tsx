import { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Intro from './components/Intro';
import About from './components/About';
import { IconContext } from "react-icons";
import Contact from './components/Contact';
import { useMediaQuery, useTheme } from '@mui/material';
import Projects from './components/Projects';

function App() {
  const theme = useTheme();
  const mdScreen = useMediaQuery(theme.breakpoints.up('md'));

  const [darkMode, setDarkMode] = useState(() => {
    const preference = localStorage.getItem('darkMode');
    return preference ? preference === 'true' : false;
  });
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);
  
  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <IconContext.Provider
      value={{
        className: darkMode ? 'dark-mode icon' : 'light-mode icon',
        size: '30px',
        style: {
          transition: 'all .2s ease-in-out',
        }
      }}
    >
      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        <NavBar
          toggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
          handleSectionClick={handleSectionClick}
          mdScreen={mdScreen}
        />
        {activeSection === 'intro' && <Intro darkMode={darkMode} setActiveSection={setActiveSection} />}
        {activeSection === 'about' && <About />}
        {activeSection === 'projects' && <Projects mdScreen={mdScreen} />}
        {activeSection === 'contact' && <Contact darkMode={darkMode} />}
      </div>
    </IconContext.Provider>
  )
}

export default App
