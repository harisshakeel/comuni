"use client";

import React from "react";
import Polaroid from "./Polaroid";
import { Box, Grid, Typography } from "@mui/material";
import "@fontsource/spicy-rice"; // Import the Spicy Rice font

const captions = [
  "A beautiful moment",
  "Unforgettable day",
  "Cherished memory",
  "Time stood still",
  "Pure happiness",
  "Adventure awaits",
  "Laughter echoes",
  "Magical encounter",
  "Precious time",
  "Forever young",
  "Golden hour",
  "City lights",
  "Seaside breeze",
  "Timeless bond",
  "Wanderlust calls",
];

const Memories = () => {
  // Function to generate a random rotation between -15 and 15 degrees
  const getRandomRotation = () => {
    return `${Math.floor(Math.random() * 31) - 15}deg`;
  };

  return (
    <Box
      sx={{
        paddingY: ["3rem", "4rem", "5rem"], // Keep the same responsive padding for top and bottom
        paddingX: ["0.1rem", "1rem", "4rem"], // Adjusted side margins: [mobile, tablet, desktop]
        backgroundColor: "#fff",
        overflow: "visible",
        backgroundSize: "350%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Heading for Core Memories */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: ["0rem", "1rem", "4rem"], // Responsive bottom margin
          marginTop: ["1rem", "1rem", "1rem"], // Responsive top margin
          paddingBottom: "1rem", // Padding below the heading
          fontFamily: "Spicy Rice, cursive",
          color: "#333", // Adjust color to suit your theme
          fontSize: ["1.2rem", "1.9rem", "2.5rem"], // Responsive font sizes
        }}
      >
        Not just an app, your core memories wall.
      </Typography>

      <Grid
        container
        justifyContent="center"
        sx={{
          position: "relative",
          height: "auto",
          backgroundColor: "#fff",
        }}
      >
        {captions.map((caption, index) => (
          <Grid
            key={index}
            item={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              transform: `rotate(${getRandomRotation()})`,
              marginX: "0.5rem", // Add some horizontal spacing
              marginY: "2rem", // Add some vertical spacing
            }}
          >
            <Polaroid imgUrl={`/image (${index + 1}).jpg`} caption={caption} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Memories;
