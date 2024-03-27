import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectCard from './ProjectCard';
import { Typography, Divider, Box, Container } from '@mui/material';
import projects from '../data/projects';
import '../index.css';

interface ProjectCarouselProps {
  mdScreen: boolean;
};

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ mdScreen }) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box id="projects">
      <Container
        maxWidth='lg'
        sx={{
          padding: { xs: '0', md: '2em 1em' },
          marginTop: { xs: '100px', md: '120px'},
          marginBottom: { xs: '56px' }
        }}
      >
        <Typography variant="h4" sx={{ fontFamily: 'Gill Sans' }}>Projects</Typography>
        <Divider sx={{ width: '120px', height: '3px', bgcolor: '#fa7702', margin: 'auto', marginBottom: '20px' }} />
        <Box className='projects' style={{ width: mdScreen ? '40%' : '84%', margin: 'auto' }}>
          <Slider {...settings}>
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} mdScreen={mdScreen} />
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectCarousel;