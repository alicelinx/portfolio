import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MobileBottomNavBar from './MobileBottomNavBar';

interface NavBarItemsProps {
  sections: string[];
  toggleDarkMode: () => void;
  darkMode: boolean;
  handleSectionClick: (section: string) => void;
  mdScreen: boolean;
};

const NavBarItems: React.FC<NavBarItemsProps> = ({
  sections,
  toggleDarkMode,
  darkMode,
  handleSectionClick,
  mdScreen,
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
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', gap: 5 }}>
          {sections.map((section) => (
            <Button
              key={section}
              onClick={() => handleSectionClick(section.toLowerCase())}
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
                  background: '#fa7702',
                  color: 'white',
                  boxShadow: '0rem 0.43rem 0.43rem -0.33rem #736f72',
                  transform: 'translateY(-0.1rem)',
                }
              }}
            >
              {section}
            </Button>
          ))}
        </Box>
        <Box sx={{ flexGrow: mdScreen ? '0' : '1', display: 'flex', justifyContent: 'flex-end' }}>
          {!darkMode && (
            <DarkModeIcon
              sx={{
                paddingLeft: '40px',
                color: '#151515',
                fontSize: 'large',
                '&:hover': { 
                  cursor: 'pointer'
                }
              }}
              onClick={toggleDarkMode} 
            />
          )}
          {darkMode && (
            <LightModeIcon
              sx={{
                paddingLeft: '40px',
                color: '#fff',
                fontSize: 'large',
                '&:hover': {
                  cursor: 'pointer',
                }
              }}
              onClick={toggleDarkMode}
            />
          )}
        </Box>
      </Toolbar>
      {!mdScreen && 
        <MobileBottomNavBar
          sections={sections}
          handleSectionClick={handleSectionClick}
          darkMode={darkMode}
        />
      }
    </Container>
  );
};

export default NavBarItems;