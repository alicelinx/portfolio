import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import React from 'react';
import Typography from '@mui/material/Typography';
import '../index.css';

const Intro: React.FC = () => {
  return (
    <Container maxWidth='lg' sx={{ padding: '5em 1em' }}>
      <Box sx={{ 
          marginTop: { xs: '112px', md: '160px'},
          marginX: { xs: 'none', md: '4em' },
          padding: '1em 3em', 
          bgcolor: 'inherit',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'column', md: 'row' },
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
            Hey, I'm Alice.
          </Typography>
          <Box
            className='brief-intro'
          >
            <Typography variant="h6">
              I'm a full stack web developer with a passion for front end development.
            </Typography>
            <Typography variant="h6">
              I enjoy building modern web applications that are not only good-looking, 
              but also provide pleasant user experience.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Intro;