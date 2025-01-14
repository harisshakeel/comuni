import { Box, Typography } from '@mui/material';

export default function About() {
  return (
    <Box
      sx={{
        backgroundColor: '#121212', // Dark background
        color: '#ffffff',          // White text
        minHeight: '100vh',        // Full viewport height
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,                 // Remove any margin
        padding: 0,                // Remove any padding
      }}
    >
      <Typography
        variant="h1"
        component="h1"
        sx={{
          fontSize: '2rem',
          textAlign: 'center',
          margin: 0,              // Remove margin for Typography
          padding: 0,             // Remove padding for Typography
        }}
      >
        About US
      </Typography>
    </Box>
  );
}
