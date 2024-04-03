import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Link from '@mui/material/Link';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import '../index.css';

interface Project {
  name: string;
  imgUrl: string;
  techStacks: string[];
  githubUrl: string;
  liveUrl?: string;
};

interface ProjectCardProps {
  project: Project;
  mdScreen: boolean;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, mdScreen }) => {
  return (
    <Container
      key={project.name}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: mdScreen ? '40px' : '20px',
        paddingLeft: 'auto',
      }}
    >
      <Card
        className='projects'
        sx={{
          width: '100%',
          height: 'auto',
          borderRadius: '10px',
          minWidth: '240px',
          maxWidth: '456px',
          boxShadow: 'rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px',
          bgcolor: 'inherit',
          border: 'none',
          color: 'inherit',
        }}
      >
        <CardMedia
          component="img" 
          sx={{
            width: 'fill',
            objectFit: 'contain',
            borderRadius: '10px 10px 0 0'
          }} 
          src={project.imgUrl}
        />
        <CardContent sx={{ textAlign: 'left' }}>
          <Typography variant="h6" component="div" marginTop={1} marginBottom={1} textAlign='center'>
            {project.name}
          </Typography>
          <Stack direction="row" flexWrap='wrap' gap={0.5} justifyContent="center">
            {project.techStacks.map((stack, index) => (
              <Chip key={index} label={stack} variant="outlined" size="small" sx={{ color: 'inherit' }} />
            ))}
          </Stack>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
          <Link href={project.githubUrl}>
            <FaGithub size='22px' />
          </Link>
          {project.liveUrl && (
            <Link href={project.liveUrl}>
              <FaLink size='22px' />
            </Link>
          )}
        </CardActions>
      </Card>
    </Container>
  );
};

export default ProjectCard;