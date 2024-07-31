import { Box, Container, Divider, Link, Typography } from "@mui/material";
import '../index.css';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

interface Props {
  darkMode: boolean;
}

const Contact: React.FC<Props> = ({ darkMode }) => {
  return (
    <Box id="contact">
      <Container
        maxWidth='lg'
        sx={{
          padding: { xs: '0', md: '2em 1em' },
          marginTop: { xs: '100px', md: '120px'},
          marginBottom: { xs: '56px' }
        }}
      >
        <Typography variant="h4" sx={{ fontFamily: 'Gill Sans' }}>Contact</Typography>
        <Divider sx={{ width: '115px', height: '3px', bgcolor: '#fa7702', margin: 'auto', marginBottom: '20px' }} />
        <Box sx={{ 
            marginX: { xs: 'none', md: '4em' },
            padding: '0em 3em', 
            bgcolor: 'inherit',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography className="contact" variant="body1" marginY={2}>
            I'm actively seeking new opportunities and project ideas, please feel free to reach out!
          </Typography>
          <Box 
            className="contact-2"
            sx={{
              display: 'flex',
              width: { xs: '100%', sm: '100%', md: '77%' },
              marginTop: '2em',
              marginBottom: '3em',
              gap: 3,
              justifyContent: 'center'
            }}
          >
            <Link href="mailto:alicxxlin@gmail.com, alicexxlin@gmail.com">
              <MdEmail />
            </Link>
            <Link href="https://github.com/alicelinx">
              <FaGithub />
            </Link>
            <Link href="https://www.linkedin.com/in/alicejll/">
              <FaLinkedin />
            </Link>
          </Box>
          <Link href="https://flowcv.com/resume/233h8p8v6m">
            <Typography 
              component="button"
              className="contact-2"
              variant="h5"
              sx={{
                fontFamily: 'Gill Sans',
                border: 'none',
                bgcolor: '#fa7702',
                color: darkMode ? "#FFF" : '#000',
                cursor: 'pointer',
                paddingX: '16px',
                paddingY: '4px',
                borderRadius: '38px',
                '&:hover': {
                  bgcolor: '#fe9f4b'
                }
              }}>
                View My Resume
              </Typography>
          </Link>
          <Box 
            className="contact-2"
            sx={{
              width: { xs: '100%', sm: '100%', md: '77%' },
              display: 'flex',
              justifyContent: 'center',
            }}
          >
          </Box>
        </Box>
      </Container>
    </Box>

  )
}

export default Contact