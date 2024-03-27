import React from 'react';
import AppBar from '@mui/material/AppBar';
import NavBarItems from './NavBarItems';

const sections: string[] = ['About', 'Projects', 'Contact'];

interface NavBarProps {
  toggleDarkMode: () => void;
  darkMode: boolean;
  handleSectionClick: (section: string) => void;
  mdScreen: boolean;
};

const NavBar: React.FC<NavBarProps> = ({ toggleDarkMode, darkMode, handleSectionClick, mdScreen }) => {  
  return (
    <AppBar 
      position="absolute"
      sx={{
        top: 0,
        width: '100%',
        bgcolor: 'inherit',
        boxShadow: 'none',
        padding: {
          xs: '.5em',
          sm: '1em 1em',
          md: '3em 7em'
        },
        margin: 'auto',
        color: darkMode ? '#fff' : '#151515',
      }}
    >
      <NavBarItems 
        sections={sections}
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
        handleSectionClick={handleSectionClick}
        mdScreen={mdScreen}
      />
    </AppBar>
  );
}

export default NavBar;