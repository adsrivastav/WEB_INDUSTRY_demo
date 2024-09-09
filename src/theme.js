import { createTheme } from '@mui/material/styles';

// Create a custom theme with a more professional look
const theme = createTheme({
  palette: {
    primary: {
      main: '#0d47a1', // Darker blue for a more professional look
      contrastText: '#ffffff', // White text on primary
    },
    secondary: {
      main: '#c62828', // Dark red for secondary elements
      contrastText: '#ffffff', // White text on secondary
    },
    background: {
      default: '#f5f5f5', // Light grey for background
      paper: '#ffffff', // White paper color for cards and inputs
    },
    text: {
      primary: '#333333', // Dark grey for primary text
      secondary: '#666666', // Light grey for secondary text
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 700,
      fontSize: '2rem', // Bigger, bold headers for emphasis
      color: '#0d47a1', // Match primary for headers
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      color: '#333333',
    },
    button: {
      textTransform: 'none', // Remove all caps from buttons for a modern look
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Rounded corners for buttons
          padding: '10px 20px',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: '16px',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none', // Remove shadow for a cleaner look
          borderBottom: '1px solid #ddd', // Add a subtle border for separation
        },
      },
    },
  },
});

export default theme;
