"use client";

import React from "react";
import { Box, Typography } from "@mui/material";

const Comingsoon = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh", // Full viewport height
        backgroundImage: "url('/info.jpg')", // Background image
        backgroundSize: "cover", // Ensures the image covers the entire container
        backgroundPosition: "center", // Centers the image
        backgroundAttachment: "fixed", // Fixes the background image during scroll
        margin: 0, // Removes any margin
        padding: 0, // Ensures no padding around the container
        display: "flex", // Flexbox layout for centering content
        justifyContent: "center", // Center the content horizontally
        alignItems: "center", // Center the content vertically
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.4)", // Tint for better text readability
          zIndex: 1,
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          color: "white", // Text color
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: 2,
          }}
        >
          Coming Soon
        </Typography>
        <Typography
          variant="h6"
          sx={{
            marginTop: 2,
            fontStyle: "italic",
            fontWeight: 300,
            letterSpacing: 1,
          }}
        >
          We're building something amazing. Stay tuned for updates!
        </Typography>
      </Box>
    </Box>
  );
};

export default Comingsoon;
