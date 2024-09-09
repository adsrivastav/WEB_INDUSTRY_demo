// src/components/WebIndustryBusiness.js
import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Card,
  CardContent,
  Snackbar,
  Alert,
} from '@mui/material';

const WebIndustryBusiness = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  // State to manage snackbar for alert
  const [openSnackbar, setOpenSnackbar] = useState(false);

  // Handle change in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would typically send the form data to a server or backend API
    console.log('Form Data Submitted:', formData);
    setOpenSnackbar(true); // Show success alert
    setFormData({ name: '', email: '', phone: '', company: '', message: '' }); // Clear form fields after submission
  };

  // Handle closing of snackbar alert
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container sx={{ paddingY: 4 }}>
      <Typography variant="h4" gutterBottom>
        Book a Demo with Web Industry
      </Typography>
      <Card sx={{ padding: 3, marginTop: 2 }}>
        <CardContent>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            **Explore how Web Industry’s IT training solutions can elevate your team’s skills.** Fill out the form below to book a personalized demo session and discover how our tailored training can help you:
          </Typography>
          <ul>
            <li>Master essential software development skills in Full Stack, Frontend, and Backend technologies.</li>
            <li>Prepare for industry-recognized certifications such as AWS, Microsoft Azure, and Google Cloud.</li>
            <li>Enhance your team’s proficiency in emerging fields like Data Science, AI, Cybersecurity, and more.</li>
            <li>Prepare for freelancing opportunities with practical, hands-on training and real-world projects.</li>
          </ul>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            **Fill out the form below to get started.** Our experts will reach out to schedule your demo and discuss how we can meet your specific training needs.
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <TextField
              label="Name"
              name="name"
              variant="outlined"
              required
              fullWidth
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              label="Email"
              name="email"
              variant="outlined"
              required
              type="email"
              fullWidth
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              label="Phone Number"
              name="phone"
              variant="outlined"
              required
              type="tel"
              fullWidth
              value={formData.phone}
              onChange={handleChange}
            />
            <TextField
              label="Company Name"
              name="company"
              variant="outlined"
              fullWidth
              value={formData.company}
              onChange={handleChange}
            />
            <TextField
              label="Message"
              name="message"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              value={formData.message}
              onChange={handleChange}
            />
            <Button type="submit" variant="contained" color="primary">
              Book Demo
            </Button>
          </Box>
        </CardContent>
      </Card>
      {/* Snackbar for successful submission alert */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Your demo request has been submitted successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default WebIndustryBusiness;
