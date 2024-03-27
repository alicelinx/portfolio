import { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Intro from './components/Intro';
import ProjectCarousel from './components/ProjectCarousel';
import About from './components/About';
import { IconContext } from "react-icons";
import Contact from './components/Contact';
import { useMediaQuery, useTheme } from '@mui/material';

function App() {
  const theme = useTheme();
  const mdScreen = useMediaQuery(theme.breakpoints.up('md'));

  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
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
        {activeSection === 'intro' && <Intro />}
        {activeSection === 'about' && <About />}
        {activeSection === 'projects' && <ProjectCarousel mdScreen={mdScreen} />}
        {activeSection === 'contact' && <Contact />}
      </div>
    </IconContext.Provider>
  )
}

export default App
