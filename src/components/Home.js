// src/components/Home.js
import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardActions, Button, Divider, Box, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

// Styling for the header and footer
const Header = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.default,
  marginBottom: theme.spacing(4),
}));

const Footer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.background.paper,
  marginTop: theme.spacing(4),
}));

// Example course data
const featuredCourses = [
  { title: 'Introduction to Programming', duration: '5 months', level: 'Beginner' },
  { title: 'Data Analyst', duration: '2 months', level: 'Intermediate' },
  { title: 'Deep Learning', duration: '3 months', level: 'Intermediate' },
  { title: 'Business Analytics', duration: '3 months', level: 'Beginner' },
  { title: 'Digital Marketing', duration: '3 months', level: 'Beginner' },
  // Add more courses as needed
];

const Home = () => {
  return (
    <Container>
      <Header>
        <Typography variant="h2" gutterBottom>
          Welcome to MyCourses
        </Typography>
        <Typography variant="h6" paragraph>
          Bootcamp-level quality, at a fraction of the cost with freelance work.
        </Typography>
      </Header>

      <Typography variant="h4" gutterBottom>
        Featured Courses
      </Typography>
      <Grid container spacing={4}>
        {featuredCourses.map((course, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  {course.title}
                </Typography>
                <Typography color="text.secondary">
                  Duration: {course.duration}
                </Typography>
                <Typography color="text.secondary">
                  Level: {course.level}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" component={Link} to="/courses">
                  View Courses
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h4" gutterBottom>
        Explore More
      </Typography>
      <Typography paragraph>
        Discover a wide range of courses in Data Science, Programming & Development, Artificial Intelligence, Business, Autonomous Systems, Product Management, and Cloud Computing. Enhance your skills and take your career to the next level.
      </Typography>

      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Button variant="contained" color="primary" component={Link} to="/courses">
          Browse All Courses
        </Button>
      </Box>

      <Footer>
        <Divider />
        <Typography variant="body1">
          © 2024 MyCourses. All rights reserved.
        </Typography>
        <Typography variant="body2">
          <Link to="/privacy-policy">Privacy Policy</Link> | <Link to="/terms-of-service">Terms of Service</Link>
        </Typography>
      </Footer>
    </Container>
  );
};

export default Home;
