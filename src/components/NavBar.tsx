import React from 'react';
import AppBar from '@mui/material/AppBar';
import NavBarItems from './NavBarItems';

const pages: string[] = ['About', 'Projects', 'Contact'];

interface NavBarProps {
  toggleDarkMode: () => void;
  darkMode: boolean;
};

const NavBar: React.FC<NavBarProps> = ({ toggleDarkMode, darkMode }) => {  
  return (
    <AppBar 
      position="absolute"
      sx={{
        top: 0,
        width: '100%',
        backgroundColor: 'inherit',
        boxShadow: 'none',
        padding: {
          xs: '1.5em',
          md: '3em 12em',
        },
        color: darkMode ? '#fff' : '#151515',
      }}
    >
      <NavBarItems 
        pages={pages}
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
      />
    </AppBar>
  );
}

export default NavBar;