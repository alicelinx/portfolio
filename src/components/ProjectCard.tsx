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
        marginBottom: '20px',
        paddingLeft: 'auto',
      }}
    >
      <Card 
        sx={{
          width: '100%',
          height: mdScreen ? '385px' : '370px',
          borderRadius: '10px',
          minWidth: '240px',
          maxWidth: '456px',
          boxShadow: '0rem 0.43rem 0.43rem -0.33rem #736f72',
          bgcolor: 'inherit',
          border: '0.5px solid #fff',
          color: 'inherit',
        }}
      >
        <CardMedia
          component="img" 
          sx={{
            height: '60%',
            backgroundPosition: 'top center',
            objectFit: 'contain',
          }} 
          src={project.imgUrl}
        />
        <CardContent sx={{ textAlign: 'left' }}>
          <Typography variant="h6" component="div" marginTop={mdScreen ? 1 : -2} marginBottom={1} textAlign='center'>
            {project.name}
          </Typography>
          <Stack direction="row" flexWrap='wrap' gap={0.5} justifyContent="center">
            {project.techStacks.map((stack, index) => (
              <Chip key={index} label={stack} variant="outlined" size="small" sx={{ color: 'inherit' }} />
            ))}
          </Stack>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
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