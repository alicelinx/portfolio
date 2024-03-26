import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';
import LinkIcon from '@mui/icons-material/Link';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

interface Project {
  name: string;
  imgUrl: string;
  techStacks: string[];
  githubUrl: string;
  liveUrl?: string;
}

interface ProjectCardProps {
  project: Project;
  mdScreen: boolean;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, mdScreen, index }) => {
  return (
    <Container key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
      <Card sx={{
        width: '100%',
        height: '385px',
        borderRadius: '10px',
        minWidth: '240px',
        maxWidth: '456px'
      }}
      >
        <CardMedia sx={{ height: mdScreen ? '60%' : '50%', backgroundPosition: 'top' }} image={project.imgUrl} />
        <CardContent sx={{ textAlign: 'left' }}>
          <Typography gutterBottom variant="subtitle1" component="div">
            {project.name}
          </Typography>
          <Stack direction="row" flexWrap='wrap' gap={0.5}>
            {project.techStacks.map((stack, index) => (
              <Chip key={index} label={stack} variant="outlined" size="small" />
            ))}
          </Stack>
        </CardContent>
        <CardActions sx={{ marginLeft: '10px'}}>
          <Link href={project.githubUrl}>
            <GitHubIcon sx={{
              color: 'gray',
              transition: 'all .2s ease-in-out',
              ':hover': {
                transform: 'scale(1.2)',
              }
            }}
            />
          </Link>
          {project.liveUrl && (
            <Link href={project.liveUrl}>
              <LinkIcon sx={{
                color: 'gray',
                transition: 'all .2s ease-in-out',
                ':hover': {
                transform: 'scale(1.2)',
              }
              }}
              />
            </Link>
          )}
        </CardActions>
      </Card>
    </Container>
    
  )
}

export default ProjectCard;