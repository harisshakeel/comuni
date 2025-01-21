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
        backgroundImage: "url('/info.jpg')", // Updated background image
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
          color: "white", // Default text color
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: 2,
            color: "#FFD700", // Primary color (Gold-like for vibrancy)
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)", // Adds depth for better readability
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
            color: "#FF4500", // Highlighter color (Orange-Red for contrast)
            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.6)", // Subtle shadow for better readability
          }}
        >
          We're building something amazing. Stay tuned for updates!
        </Typography>
      </Box>
    </Box>
  );
};

export default Comingsoon;
