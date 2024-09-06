import { Divider, Typography, Box, Container } from "@mui/material";
import TechSkills from "./TechSkills";

const About = () => {

  return (
    <Box id="about">
      <Container
        maxWidth='lg'
        sx={{
          padding: { xs: '0', md: '2em 1em' },
          marginTop: { xs: '100px', md: '120px'},
          marginBottom: { xs: '56px' }
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
            <Box
              sx={{ 
                width: '30%',
                height: 'auto',
                borderRadius: '100%',
                border: '1px solid #fff',
                marginBottom: '15px'
              }}
              component="img"
              src="https://avatars.githubusercontent.com/u/109875850?v=4"
            />
            <Typography className="about" gutterBottom variant="body1" marginBottom={3}>
              In late 2019, I moved to Canada from Taiwan. 
              During my time here, I was introduced to the world of coding by my partner, 
              who is a software developer. His encouragement led me to explore coding, 
              and I quickly found a passion for it!
              I still remember the excitement of completing my first Twitter clone on CodePen. 
              What attracts me most about coding is its power - with just a few lines of code, 
              I can create beautiful applications and solve problems. <br /><br />
              I have one year of hands-on experience creating responsive web applications using React, JavaScript/TypeScript, HTML, and CSS. 
              I’m currently looking for new opportunities as a front-end developer. 
              I’m open to onsite or hybrid work in Calgary, remote work across Canada, and would consider relocating for the perfect opportunity.
            </Typography>
            <Typography className="skills" variant="h5" sx={{ fontFamily: 'Gill Sans' }}>Soft Skills</Typography>
            <Divider sx={{ width: '100px', height: '3px', bgcolor: '#fa7702', margin: 'auto', marginBottom: '20px' }} />
            <Typography className="about" gutterBottom variant="body1" marginBottom={3}>
            With a diverse background in business operations, international relations, and supply chain procurement, 
            I bring a unique combination of strategic thinking and technical expertise. 
            I've developed strong soft skills in problem-solving, time management, and effective teamwork and communication. 
            I'm dedicated to creating high-quality, user-friendly interfaces that meet clients' needs and expectations.
            </Typography>
            <TechSkills />
            <Typography className="skills" variant="h5" sx={{ fontFamily: 'Gill Sans' }}>Interests</Typography>
            <Divider sx={{ width: '90px', height: '3px', bgcolor: '#fa7702', margin: 'auto', marginBottom: '20px' }} />
            <Typography className="about" gutterBottom variant="body1">
              Outside of coding, you will often find me either traveling, 
              lifting weights at the gym, exploring good foods in Calgary, or playing video games at home.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;