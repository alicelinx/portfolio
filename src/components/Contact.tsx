import { Box, Container, Divider, Link, Typography } from "@mui/material";
import '../index.css';
import { FaGithub, FaLink } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
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
              marginTop: '1em',
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
          <Typography className="contact" variant="h5" sx={{ fontFamily: 'Gill Sans' }}>Resume</Typography>
          <Divider sx={{ width: '80px', height: '3px', bgcolor: '#fa7702', margin: 'auto', marginBottom: '30px' }} />
          <Box 
            className="contact-2"
            sx={{
              width: { xs: '100%', sm: '100%', md: '77%' },
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Link href="https://flowcv.com/resume/233h8p8v6m">
              <FaLink />
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>

  )
}

export default Contact