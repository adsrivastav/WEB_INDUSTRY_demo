// src/components/Footer.js
import React from 'react';
import { Container, Typography, Box, Link } from '@mui/material';

const Footer = () => (
  <Box sx={{ padding: 3, backgroundColor: '#333', color: '#fff', marginTop: 4 }}>
    <Container>
      <Typography variant="h6">Web Industry</Typography>
      <Typography variant="body2" sx={{ marginY: 2 }}>
        Scale skills development for your organization with hands-on project-based learning and top content co-developed with industry leaders.
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Link href="#" color="inherit">About Us</Link>
        <Link href="#" color="inherit">Blog</Link>
        <Link href="#" color="inherit">Jobs at Web Industry</Link>
        <Link href="#" color="inherit">Become a Mentor</Link>
        <Link href="#" color="inherit">Partner with Web Industry</Link>
        <Link href="#" color="inherit">Help and FAQ</Link>
        <Link href="#" color="inherit">Scholarships</Link>
      </Box>
      <Typography variant="body2" sx={{ marginTop: 2 }}>
        © 2024 Web Industry. All rights reserved.
      </Typography>
    </Container>
  </Box>
);

export default Footer;
