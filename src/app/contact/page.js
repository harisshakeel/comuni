import { Box, Typography } from '@mui/material';

export default function Contact() {
  return (
    <Box
      sx={{
        background: "linear-gradient(to right, rgba(234, 41, 250, 0.5), rgba(255, 0, 148, 0.5), rgba(255, 1, 81, 0.5), rgba(202, 0, 243, 0.5))", // Transparent gradient background
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
        Contact US
      </Typography>
    </Box>
  );
}
