import { JSX } from "react";
import { Divider, Typography, Box, Container,  } from "@mui/material";
import { frontEndStacks, backEndStacks, otherStacks } from "../data/stacks";
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

interface StackItem {
  name: string;
  component: JSX.Element;
};

const TechSkills = () => {
  return (
    <Container>
      <Typography className="skills" variant="h5" sx={{ fontFamily: 'Gill Sans' }}>Tech Skills</Typography>
      <Divider sx={{ width: '100px', height: '3px', bgcolor: '#fa7702', margin: 'auto', marginBottom: '20px' }} />
      <Box 
        sx={{ 
          marginX: { xs: 'none', md: '4em' },
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
            width: { xs: '100%', sm: '100%', md: '100%' },
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'center', sm: 'center', md: 'flex-start' }
          }}
        >
          <Box
            className='tech-stacks'
            sx={{
              width: { xs: '80%', sm: '80%', md: '30%' },
              marginBottom: '2em'
            }}
          >
            <Typography gutterBottom variant='h6'>Front End</Typography>
            {frontEndStacks.map((stack: StackItem) => (
              <Tooltip title={stack.name} arrow>
                <IconButton>
                  {stack.component}
                </IconButton>
              </Tooltip>
            ))}
          </Box>
          <Box
            className='tech-stacks'
            sx={{
              width: { xs: '80%', sm: '80%', md: '30%' },
              marginBottom: '2em',
            }}
          >
            <Typography gutterBottom variant='h6'>Back End</Typography>
            {backEndStacks.map((stack: StackItem) => (
              <Tooltip title={stack.name} arrow>
                <IconButton>
                  {stack.component}
                </IconButton>
              </Tooltip>
            ))}
          </Box>
          <Box
            className='tech-stacks'
            sx={{
              width: { xs: '80%', sm: '80%', md: '30%' },
              marginBottom: '2em',
            }}
          >
            <Typography gutterBottom variant='h6'>Others</Typography>
            {otherStacks.map((stack: StackItem) => (
              <Tooltip title={stack.name} arrow>
                <IconButton>
                  {stack.component}
                </IconButton>
              </Tooltip>
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default TechSkills;