import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import React from 'react';
import Typography from '@mui/material/Typography';

const Intro: React.FC = () => {
  return (
    <Container maxWidth='lg'>
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
          gap: 3,
        }}
      >
        <Box sx={{
          textAlign: 'left',
          width: { xs: '100%', sm: '100%', md: '73%' }
          }}
        >
          <Typography gutterBottom variant="body1">
            Hey, I'm Alice.
          </Typography>
          <Typography variant="body1">
            I'm a full-stack web developer with a keen focus on front-end development.
          </Typography>
          <Typography variant="body1">
            My passion lies in building visually appealing web applications with intuitive user interfaces.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Intro;