import { Box, Container, Divider, Link, Typography } from "@mui/material";
import '../index.css';
import { FaGithub } from "react-icons/fa";
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
          <Box 
            className="contact"
            sx={{
              textAlign: 'center',
              width: { xs: '100%', sm: '100%', md: '77%' },
              marginTop: '1em',
            }}
          >
            <Link href="mailto:alicxxlin@gmail.com, alicexxlin@gmail.com">
              <MdEmail />
            </Link>
          </Box>
          <Typography
            variant='h6'
            sx={{
              marginTop: '3em'
            }}
          >
            Or
          </Typography>
          <Box 
            className="contact-2"
            sx={{
              width: { xs: '100%', sm: '100%', md: '77%' },
              marginY: '2em',
              display: 'flex',
              justifyContent: 'center',
              gap: 3
            }}
          >
            <Link href="https://github.com/alicelinx">
              <FaGithub />
            </Link>
            <Link href="https://www.linkedin.com/in/alicejll/">
              <FaLinkedin />
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>

  )
}

export default Contact