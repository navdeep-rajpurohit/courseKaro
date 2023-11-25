import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from "react-router-dom";

const settings = ['Profile', 'Dashboard', 'Logout'];

function MyAppBar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const [email, setEmail] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  
  React.useEffect(() => {
      fetch('http://localhost:3000/me', {
         method: "GET",
         headers: {
            "Authorization": "Bearer " + localStorage.getItem('token')
         },
      })
      .then((res) => {
         res.json()
         .then((data) => {
            if(data.email) {
               setEmail(data.email);
            }
         })
      })}, [])

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
                localStorage.setItem('token', null);
                window.location = './';
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
                <Button variant="contained" onClick={() => navigate('./login')}>Log in</Button>&nbsp;
                <Button variant="contained" onClick={() => navigate('./register')}>Sign up</Button>
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
        </div>
        </>
  }
}
export default MyAppBar;