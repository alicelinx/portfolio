import React from 'react';
import AppBar from '@mui/material/AppBar';
import NavBarItems from './NavBarItems';

const pages: string[] = ['About', 'Projects', 'Contact'];

const NavBar: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleCloseNavMenu = () => {
    setAnchorEl(null);
  };
  
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
        }
      }}
    >
      <NavBarItems 
        pages={pages}
        anchorEl={anchorEl}
        handleOpenNavMenu={handleOpenNavMenu}
        handleCloseNavMenu={handleCloseNavMenu}
      />
    </AppBar>
  );
}

export default NavBar;