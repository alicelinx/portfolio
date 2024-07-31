import { Box, Container, Divider, Typography } from "@mui/material";
import ProjectCard from './ProjectCard';
import projects from '../data/projects';
import '../index.css';
import ProjectCarousel from "./ProjectCarousel";

interface ProjectsProps {
  mdScreen: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ mdScreen }) => {
  return (
    <>
      {mdScreen ? (
        <Box>
          <Container
            sx={{
              padding: { xs: '0', md: '2em 1em' },
              marginTop: { xs: '100px', md: '120px'},
            }}
          >
            <Typography variant="h4" sx={{ fontFamily: 'Gill Sans' }}>Projects</Typography>
            <Divider sx={{ width: '120px', height: '3px', bgcolor: '#fa7702', margin: 'auto', marginBottom: '20px' }} />
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} mdScreen={mdScreen} />
            ))}
          </Container>
        </Box>
      ) : (
        <ProjectCarousel mdScreen={mdScreen} />
      )}
    </>
  )
}

export default Projects