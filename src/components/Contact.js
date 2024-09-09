// src/components/Contact.js
import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Your message has been sent!');
  };

  return (
    <Container sx={{ paddingY: 4 }}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 2 }}>
        We'd love to hear from you! Please fill out the form below and we'll get in touch.
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          maxWidth: 600,
        }}
      >
        <TextField label="Name" variant="outlined" required fullWidth />
        <TextField label="Email" variant="outlined" required type="email" fullWidth />
        <TextField label="Message" variant="outlined" required multiline rows={4} fullWidth />
        <Button type="submit" variant="contained" color="primary">
          Send Message
        </Button>
      </Box>
    </Container>
  );
};

export default Contact;
