import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
    </div>
  )
}

export default App
