import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectCard from './ProjectCard';
import { useTheme, useMediaQuery, Typography, Divider } from '@mui/material';
import projects from '../data/projects';

const ProjectCarousel = () => {
  const theme = useTheme();
  const mdScreen = useMediaQuery(theme.breakpoints.up('md'));

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <>
      <Typography variant="h5" sx={{ fontFamily: 'Gill Sans' }}>Projects</Typography>
      <Divider sx={{ width: '100px', height: '2px', bgcolor: '#FF9B42', margin: 'auto', marginBottom: '20px' }} />
      <div style={{ width: mdScreen ? '40%' : '80%', margin: 'auto' }}>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} mdScreen={mdScreen} index={index} />
          ))}
        </Slider>
      </div>
    </>
  )
}

export default ProjectCarousel;