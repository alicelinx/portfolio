import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import React from 'react';
import Typography from '@mui/material/Typography';
import '../index.css';

interface Props {
  darkMode: boolean;
  setActiveSection: (section: string) => void;
}

const Intro: React.FC<Props> = ({ darkMode, setActiveSection }) => {
  return (
    <Container maxWidth='lg'>
      <Box sx={{ 
          marginTop: { xs: '100px', md: '160px'},
          marginX: { xs: 'none', md: '4em' },
          padding: { xs: '0 3em', md: '6em 3em' }, 
          bgcolor: 'inherit',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'column', md: 'colum' },
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            textAlign: 'left',
            width: { xs: '100%', sm: '100%', md: '80%' },
          }}
        >
          <Typography
            className='greeting'
            gutterBottom
            variant="h5"
          >
            Hi, I'm Alice👩‍💻
          </Typography>
          <Box
            className='brief-intro'
          >
            <Typography variant="h6">
              I'm a full stack web developer with a passion for front end development.
            </Typography>
            <Typography variant="h6">
              I enjoy building modern web applications that are not only visually appealing 
              but also provide a pleasant user experience.✨
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            textAlign: { xs: 'center', sm: 'left', md: 'left' },
            width: { xs: '100%', sm: '100%', md: '80%' },
          }}
        >
          <Typography 
            component="button"
            className="brief-intro"
            variant="h5"
            sx={{
              marginTop: '3em',
              fontFamily: 'Gill Sans',
              border: 'none',
              bgcolor: '#fa7702',
              color: darkMode ? "#FFF" : '#000',
              cursor: 'pointer',
              paddingX: '16px',
              paddingY: '4px',
              borderRadius: '38px',
              alignItems: { xs: 'center', sm: 'flex-start', md: 'flex-start' },
              '&:hover': {
                bgcolor: '#fe9f4b'
              }
            }}
            onClick={() => setActiveSection('about')}
            >
              Learn More
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Intro;