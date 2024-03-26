import { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Intro from './components/Intro';
import ProjectCarousel from './components/ProjectCarousel';

function App() {
  const [darkMode, setDarkMode] = useState(false);

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

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Intro />
      <ProjectCarousel />
    </div>
  )
}

export default App
