// src/components/Course.js
import React, { useState } from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Rating,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  TextField,
  Divider,
  Snackbar,
  Alert,
} from '@mui/material';

// Example course data
const courses = [
  { id: 1, title: 'Data Science', rating: 4.5, reviews: 120, details: 'Learn data analysis, machine learning, and data visualization.' },
  { id: 2, title: 'Programming & Development', rating: 4.8, reviews: 200, details: 'Master various programming languages and development tools.' },
  { id: 3, title: 'Artificial Intelligence', rating: 4.7, reviews: 150, details: 'Explore AI concepts, deep learning, and neural networks.' },
  { id: 4, title: 'Business', rating: 4.3, reviews: 80, details: 'Understand business strategies, management, and entrepreneurship.' },
  { id: 5, title: 'Autonomous Systems', rating: 4.6, reviews: 90, details: 'Dive into robotics, automation, and self-driving technologies.' },
  { id: 6, title: 'Product Management', rating: 4.4, reviews: 110, details: 'Learn product lifecycle management, strategy, and market analysis.' },
  { id: 7, title: 'Cloud Computing', rating: 4.9, reviews: 140, details: 'Gain expertise in cloud services, infrastructure, and deployment.' },
];

const CourseCard = ({ course, onClick }) => (
  <Card sx={{ marginBottom: 2, padding: 2 }}>
    <CardContent>
      <Typography variant="h6">{course.title}</Typography>
      <Rating value={course.rating} readOnly precision={0.1} />
      <Typography variant="body2" color="text.secondary">
        {course.reviews} reviews
      </Typography>
      <Typography variant="body1" sx={{ marginTop: 1 }}>
        {course.details}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" onClick={() => onClick(course)}>See More</Button>
    </CardActions>
  </Card>
);

const CoursePage = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleClickOpen = (course) => {
    setSelectedCourse(course);
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleSubmitReview = () => {
    console.log('Submitted review for', selectedCourse.title);
    console.log('Rating:', rating);
    console.log('Review:', review);
    setOpenSnackbar(true);
    setRating(0);
    setReview('');
    handleClose();
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Courses
      </Typography>
      <Grid container spacing={3}>
        {courses.map((course) => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <CourseCard course={course} onClick={handleClickOpen} />
          </Grid>
        ))}
      </Grid>

      <Dialog open={openDialog} onClose={handleClose}>
        <DialogTitle>Course Details</DialogTitle>
        <DialogContent>
          <Typography variant="h6">{selectedCourse?.title}</Typography>
          <Typography variant="body1" sx={{ marginTop: 1 }}>
            {selectedCourse?.details}
          </Typography>
          <Divider sx={{ marginY: 2 }} />
          <Typography variant="h6">Rate and Review</Typography>
          <Box sx={{ marginY: 2 }}>
            <Rating
              name="course-rating"
              value={rating}
              onChange={(event, newValue) => setRating(newValue)}
              precision={0.1}
            />
            <TextField
              label="Write your review"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              value={review}
              onChange={(e) => setReview(e.target.value)}
              sx={{ marginTop: 1 }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmitReview} variant="contained" color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Your review has been submitted successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default CoursePage;
