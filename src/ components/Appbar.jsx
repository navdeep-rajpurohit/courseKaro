import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";


function MyAppBar({email, setEmail}) {
  const navigate = useNavigate();
  
  if(email) {
    return <>
    <div id="appbar-div">
      <AppBar position="static" color="">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
          <img style={{height: "3vw", width: "3vw"}} src='https://www.svgrepo.com/show/515504/china-university-mooc.svg'/>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href=""
              onClick={() => navigate('/')}
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex', flexGrow: 1},
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              courseKaro
            </Typography>
            <Box sx={{ flexGrow: 0 }}>
            <Button 
              variant="contained" 
              onClick={() => {
                localStorage.setItem('token', null)
                setEmail(null);
              }}
            >
              Logout
            </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
    </>
  }
  else {
    return <>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" color="">
              <Toolbar >
              <img style={{height: "3vw", width: "3vw"}} src='https://www.svgrepo.com/show/515504/china-university-mooc.svg'/>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href=""
                  onClick={() => navigate('/')}
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex', flexGrow: 1},
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                courseKaro
                </Typography>
                <Box sx={{ flexGrow: 0, display: 'flex', gap: 1}}>
                <Button onClick={() => navigate('./admin/login')}>Teach on courseKaro</Button>
                <Button  variant="contained" onClick={() => navigate('./user/login')}>Log in</Button>
                <Button variant="contained" onClick={() => navigate('./user/register')}>Sign up</Button>
                </Box>
              </Toolbar>
          </AppBar>
        </Box>
        </>
  }
}
export default MyAppBar;