import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../Assets/webindustrylogo.jpg'; // Ensure the path is correct

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#ffffff', color: '#333333' }}>
      <Toolbar sx={{ position: 'relative' }}>
        {/* Logo */}
        <Box sx={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)' }}>
          <img src={Logo} alt="Web Industry Logo" style={{ height: '40px' }} />
        </Box>

        {/* Title and Navigation Links */}
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', marginLeft: '60px' }}>
          <Typography
            variant="h6"
            component={Link}
            to="/" // Link to home page
            sx={{
              color: '#333333',
              fontWeight: 'bold',
              textDecoration: 'none', // Remove underline
              marginRight: '20px',
              '&:hover': {
                textDecoration: 'underline', // Optional: underline on hover
              },
            }}
          >
            Web Industry
          </Typography>

          <Button color="inherit" component={Link} to="/courses" sx={{ color: '#333333', textTransform: 'none' }}>
            Courses
          </Button>
          <Button color="inherit" component={Link} to="/contact" sx={{ color: '#333333', textTransform: 'none' }}>
            Contact
          </Button>
          <Button color="inherit" component={Link} to="/web-industry-business" sx={{ color: '#333333', textTransform: 'none' }}>
            Web Industry Business
          </Button>
        </Box>

        {/* Sign Up and Login Buttons */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button
            color="primary"
            component={Link}
            to="/signup"
            sx={{
              backgroundColor: 'white',
              color: '#333333',
              fontWeight: 'bold',
              fontStyle: 'italic',
              textTransform: 'none',
              borderRadius: '8px',
              marginLeft: '8px',
              '&:hover': {
                backgroundColor: '#f5f5f5',
              },
            }}
          >
            Sign Up
          </Button>
          <Button
            color="primary"
            component={Link}
            to="/login"
            sx={{
              backgroundColor: 'white',
              color: '#333333',
              fontWeight: 'bold',
              fontStyle: 'italic',
              textTransform: 'none',
              borderRadius: '8px',
              marginLeft: '8px',
              '&:hover': {
                backgroundColor: '#f5f5f5',
              },
            }}
          >
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
