import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectCard from './ProjectCard';
import { useTheme, useMediaQuery } from '@mui/material';
import projects from '../data/projects';


const ProjectCarousel = () => {
  const theme = useTheme();
  const mdScreen = useMediaQuery(theme.breakpoints.up('md'));

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.lg,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: theme.breakpoints.values.md,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <div style={{ width: mdScreen ? '70%' : '80%', margin: 'auto' }}>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} mdScreen={mdScreen} index={index} />
        ))}
      </Slider>
    </div>
  )
}

export default ProjectCarousel;