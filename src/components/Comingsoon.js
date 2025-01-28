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
        overflow: "hidden", // Ensures the video doesn't overflow
        margin: 0, // Removes any margin
        padding: 0, // Ensures no padding around the container
        display: "flex", // Flexbox layout for centering content
        justifyContent: "center", // Center the content horizontally
        alignItems: "center", // Center the content vertically
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover", // Ensures the video covers the entire container
          zIndex: -1, // Places the video behind the content
        }}
      >
        <source src="/comingsoon.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.4)", // Tint for better text readability
          zIndex: 1, // Ensures the overlay is above the video
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          color: "white", // Default text color
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 2,
            marginBottom: 2,
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
          }}
        >
          Launching Soon
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 300,
            letterSpacing: 1,
            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.6)",
          }}
        >
          Stay tuned
        </Typography>
      </Box>
    </Box>
  );
};

export default Comingsoon;
