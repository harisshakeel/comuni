import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';

const Heading = ({ heading, subheading }) => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        backgroundColor: '#e129fa', // Setting background color
        padding: '0', // Remove padding to eliminate extra space
        margin: 0, // Ensure no margin is added
        height: '40vh', // Set height to 40% of the viewport height
        display: 'flex', // Using flex to center content vertically
        flexDirection: 'column', // Stack elements vertically
        justifyContent: 'center', // Center content vertically
        alignItems: 'center', // Center content horizontally
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          fontSize: '2rem', // Adjust size as needed
          color: '#fff', // Set text color to white for contrast
          margin: 0, // Remove any margin from the typography elements
        }}
      >
        {heading}
      </Typography>
      {subheading && (
        <Typography
          variant="h6"
          sx={{
            fontWeight: 400,
            fontSize: '1.2rem',
            marginTop: '8px',
            color: '#fff', // White color for subheading to match
            margin: 0, // Remove any margin from the subheading
          }}
        >
          {subheading}
        </Typography>
      )}
    </Box>
  );
};

Heading.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string,
};

export default Heading;
