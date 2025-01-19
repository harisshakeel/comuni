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
        paddingY: ["5rem", "5rem", "4rem 8rem"], // Responsive padding: [mobile, tablet, desktop]
        paddingX: ["0", "1rem", "4rem 8rem"], // Responsive padding: [mobile, tablet, desktop]

        backgroundColor: "#fff",
        overflow: "visible",
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
          marginBottom: ["2rem", "4rem", "5rem"], // Responsive bottom margin
          marginTop: ["1rem", "2rem", "2.5rem"], // Responsive top margin
          paddingBottom: "1rem", // Padding below the heading
          fontFamily: "Spicy Rice, cursive",
          color: "#333", // Adjust color to suit your theme
          fontSize: ["1.2rem", "1.8rem", "2.5rem"], // Responsive font sizes
        }}
      >
        Not just an app, your core memories wall.
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
