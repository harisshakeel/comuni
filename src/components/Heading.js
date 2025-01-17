"use client";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";

const Heading = ({ heading, subheading }) => {
  const [animateBox, setAnimateBox] = useState(false);
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    // Trigger the box animation on component mount
    setAnimateBox(true);

    // Delay text animation to occur after the box transition
    const textAnimationTimeout = setTimeout(() => {
      setAnimateText(true);
    }, 1700); // Adjust delay to match the slower box transition duration

    return () => clearTimeout(textAnimationTimeout); // Cleanup timeout
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "#e129fa",
        padding: "0",
        margin: 0,
        height: "90vh",
        overflow: "hidden",
      }}
    >
      {/* Box on the left with slide-in animation */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: animateBox ? 0 : "-40%",
          width: "40%",
          height: "100%",
          backgroundColor: "#00c6b8",
          zIndex: 1,
          transition: "left 1.5s ease-in-out", // Slower transition for the box
        }}
      />
      {/* Text container with delayed slide-down animation */}
      <Box
        sx={{
          position: "absolute",
          top: animateText ? "50%" : "-30%", // Start above the viewport
          left: "20%",
          transform: "translateY(-50%)",
          zIndex: 2,
          width: "40%",
          transition: "top 1.5s ease-in-out", // Slower transition for the text
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            fontSize: "6rem",
            color: "#fff",
            textAlign: "center",
            margin: 0,
          }}
        >
          {heading}
        </Typography>
        {subheading && (
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontSize: "2.5rem",
              marginTop: "8px",
              color: "#fff",
              textAlign: "center",
              margin: 0,
            }}
          >
            {subheading}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

Heading.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string,
};

export default Heading;
