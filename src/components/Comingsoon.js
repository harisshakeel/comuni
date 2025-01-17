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
        backgroundImage: "url('/info.webp')", // Background image
        backgroundSize: "cover", // Ensures the image covers the entire container
        backgroundPosition: "center", // Centers the image
        backgroundAttachment: "fixed", // Fixes the background image during scroll
        margin: 0, // Removes any margin
        padding: 0, // Ensures no padding around the container
        display: "flex", // Flexbox layout for centering content
        justifyContent: "center", // Center the content horizontally
        alignItems: "center", // Center the content vertically
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          color: "white", // Text color
          padding: 2,
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional background for text readability
          borderRadius: 2,
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 700 }}>
          COMING SOON PAGE
        </Typography>
        <Typography variant="h6" sx={{ marginTop: 2 }}>
          APP IS IN DEVELOPMENT,STAY TUNED
        </Typography>
      </Box>
    </Box>
  );
};

export default Comingsoon;