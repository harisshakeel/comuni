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
        padding: "4rem 8rem", // Reduced horizontal padding
        backgroundColor: "#fff",
        overflow: "visible", // Allow content to overflow
        //backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.98)), url('/bg.png')`, // Add gradient overlay with 10% opacity
        backgroundSize: "350%", // Make the background image larger than its container
        backgroundPosition: "center", // Center the background image
        backgroundRepeat: "no-repeat", // Avoid repeating the image
      }}
    >
      {/* Heading for Core Memories */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "5rem", // Space between the heading and the grid
          marginTop: "2.5rem", // Add vertical spacing above the heading
          paddingBottom: "1rem", // Add vertical padding below the heading
          fontFamily: "Spicy Rice, cursive",
          color: "#333", // Adjust color to suit your theme
        }}
      >
        Not just an app, your core memories too.
      </Typography>

      <Grid
        container
        spacing={0} // Set spacing to zero to remove default spacing between grid items
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
            lg={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              transform: `rotate(${getRandomRotation()})`,
              marginX: "-1rem", // Add negative margin to create the overlapping effect
              marginY: "2rem", // Add negative margin to create the overlapping effect
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
