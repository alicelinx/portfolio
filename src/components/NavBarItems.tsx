import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

interface NavBarItemsProps {
  pages: string[];
  anchorEl: HTMLElement | null;
  handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
  handleCloseNavMenu: () => void;
  toggleDarkMode: () => void;
  darkMode: Boolean;
};

const NavBarItems: React.FC<NavBarItemsProps> = ({
  pages,
  anchorEl,
  handleOpenNavMenu,
  handleCloseNavMenu,
  toggleDarkMode,
  darkMode,
}) => {
  return (
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            fontFamily: 'Gill Sans',
            fontWeight: 700,
            letterSpacing: '.2rem',
            color: darkMode ? '#fff' : '#151515',
            textDecoration: 'none',
          }}
        >
          A. Lin
        </Typography>
        <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1, justifyContent: 'end' }}>
          <IconButton
            size="large"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
          >
            <MenuIcon sx={{ color: darkMode ? '#fff' : '#151515' }} />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorEl)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
            PaperProps={{
              sx: {
                backgroundColor: darkMode ? '#353b3c' : '#c3b5b5',
                color: darkMode ? '#fff' : '#151515'
              }
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography>{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'end', gap: 5 }}>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{ 
                textTransform: 'none',
                my: 2,
                color: darkMode ? '#fff' : '#151515',
                display: 'block',
                background: 'none',
                border: 'none',
                padding: '1px 10px',
                fontWeight: 500,
                fontSize: '16px',
                transform: 'translateY(0)',
                transition: 'all 0.2s linear',
                ':hover': {
                  background: '#736f72',
                  color: 'white',
                  boxShadow: '0rem 0.43rem 0.43rem -0.33rem #736f72',
                  transform: 'translateY(-0.1rem)',
                }
              }}
            >
              {page}
            </Button>
          ))}
        </Box>
        {!darkMode && <DarkModeIcon sx={{ paddingLeft: '40px', color: '#151515', fontSize: 'large' }} onClick={toggleDarkMode} />}
        {darkMode && <LightModeIcon sx={{ paddingLeft: '40px', color: '#fff', fontSize: 'large' }} onClick={toggleDarkMode} />}
      </Toolbar>
    </Container>
  );
}

export default NavBarItems;