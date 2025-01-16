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
  "Sunset bliss",
  "New beginnings",
];

const Memories = () => {
  // Function to generate a random rotation between -15 and 15 degrees
  const getRandomRotation = () => {
    return `${Math.floor(Math.random() * 31) - 15}deg`;
  };

  return (
    <Box
      sx={{
        padding: "2rem 1rem", // Reduced horizontal padding more (1rem on the sides)
        backgroundColor: "#fff",
        overflow: "hidden",
      }}
    >
      {/* Heading for Core Memories */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "2rem", // Space between the heading and the images
          fontFamily: "Spicy Rice, cursive",

          color: "#333", // Adjust color to suit your theme
        }}
      >
        Not just an app,your core memories too.
      </Typography>

      <Grid
        container
        spacing={1} // Reduced spacing between items
        justifyContent="center"
        sx={{
          position: "relative",
          height: "auto",
        }}
      >
        {captions.map((caption, index) => (
          <Grid
            key={index}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3} // Adjust for different screen sizes
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              transform: `rotate(${getRandomRotation()})`, // Apply random rotation
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
