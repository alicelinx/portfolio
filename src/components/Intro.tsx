import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import React from 'react';
import Typography from '@mui/material/Typography';
import '../index.css';

const Intro: React.FC = () => {
  return (
    <Container maxWidth='lg'>
      <Box sx={{ 
          marginTop: { xs: '100px', md: '160px'},
          marginX: { xs: 'none', md: '4em' },
          padding: { xs: '0 3em', md: '6em 3em' }, 
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
            Hey, I'm Alice.👩‍💻
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
            {/* <Box component='br'></Box>
            <Box component='br'></Box>
            <Typography component='a' className='see-projects'>See my work</Typography> */}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Intro;