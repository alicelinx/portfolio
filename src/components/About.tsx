import { Divider, Typography, Box, Container,  } from "@mui/material";
import TechSkills from "./TechSkills";

const About = () => {

  return (
    <Box id="about">
      <Container
        maxWidth='lg'
        sx={{
          padding: { xs: '0', md: '2em 1em' },
          marginTop: { xs: '100px', md: '120px'},
          marginBottom: { xs: '60px' }
        }}
      >
        <Typography variant="h4" sx={{ fontFamily: 'Gill Sans' }}>About</Typography>
        <Divider sx={{ width: '90px', height: '3px', bgcolor: '#fa7702', margin: 'auto', marginBottom: '20px' }} />
        <Box sx={{ 
            marginX: { xs: 'none', md: '4em' },
            padding: '0em 3em', 
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
              textAlign: 'center',
              width: { xs: '100%', sm: '100%', md: '77%' }
            }}
          >
            <Typography className="about" gutterBottom variant="body1" marginBottom={3}>
              In late 2019, I moved to Calgary, Canada to study supply chain management. 
              At first, I found it satisfying getting a job in the field right before graduation, 
              but soon I realized that was not the career path for me.
              That is when I started coding, and I still remember how excited 
              I felt when completing my first Twitter clone on CodePen.
              What attracts me most about coding is its power - 
              with just a few lines of code, I can create beautiful applications and solve problems. 
            </Typography>
            <Typography className="skills" variant="h5" sx={{ fontFamily: 'Gill Sans' }}>Soft Skills</Typography>
            <Divider sx={{ width: '100px', height: '3px', bgcolor: '#fa7702', margin: 'auto', marginBottom: '20px' }} />
            <Typography className="about" gutterBottom variant="body1" marginBottom={3}>
              With my background in procurement and business administration, 
              I have honed my soft skills including problem solving, efficient time management, 
              and effective teamwork and communication.
            </Typography>
            <TechSkills />
            <Typography className="about" gutterBottom variant="body1">
              Outside of coding, you will often find me either traveling, 
              lifting weights at the gym, exploring good foods in the city, or playing video games at home.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;