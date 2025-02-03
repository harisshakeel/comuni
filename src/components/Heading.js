"use client";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";

const Heading = ({ heading, subheading }) => {
  const [animateBox, setAnimateBox] = useState(false);
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    setAnimateBox(true); // Start box animation immediately
    const textAnimationTimeout = setTimeout(() => {
      setAnimateText(true);
    }, 2700); // Start text animation after box transition

    return () => clearTimeout(textAnimationTimeout);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "#f6a6ff",
        padding: 0,
        margin: 0,
        height: {
          xs: "70vh",
          sm: "90vh",
          md: "90vh",
        },
        overflow: "hidden",
        display: "flex",
      }}
    >
      {/* Box on the left with smooth sliding effect */}
      <Box
        sx={{
          position: "relative",
          left: animateBox ? 0 : "-40%",
          width: "35%",
          height: "100%",
          backgroundImage: "url('/headphone.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#450159",
          zIndex: 1,
          transition: "left 3.5s ease-in-out",
          willChange: "left", // Helps the browser optimize animation
        }}
      />

      {/* Right section with text that slides down */}
      <Box
        sx={{
          flex: 1, // Takes remaining space
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: animateText ? "50%" : "-30%", // Start above viewport, slide down
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            zIndex: 2,
            transition: "top 1.5s ease-in-out, opacity 1s ease-in-out",
            opacity: animateText ? 1 : 0, // Fade-in effect
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              fontSize: {
                xs: "3rem",
                sm: "4.5rem",
                md: "6rem",
              },
              color: "#000",
            }}
          >
            {heading}
          </Typography>
          {subheading && (
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                fontSize: {
                  xs: "1rem",
                  sm: "2rem",
                  md: "3rem",
                },
                marginTop: "8px",
                color: "#000",
              }}
            >
              {subheading}
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

Heading.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string,
};

export default Heading;
