"use client";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import "@fontsource/pacifico"; // Import Pacifico font
import "@fontsource/roboto-slab"; // Import Roboto Slab

const Heading = ({ heading, subheading }) => {
  const [animateBox, setAnimateBox] = useState(false);
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    setAnimateBox(true);
    
    // Reduce delay to 2.5s for faster transition
    const textAnimationTimeout = setTimeout(() => {
      setAnimateText(true);
    }, 2500);

    return () => clearTimeout(textAnimationTimeout);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "#f6a6ff",
        padding: 0,
        margin: 0,
        height: { xs: "70vh", sm: "90vh", md: "90vh" },
        overflow: "hidden",
        display: "flex",
      }}
    >
      {/* Sliding Box */}
      <Box
        sx={{
          position: "relative",
          left: animateBox ? 0 : "-40%",
          width: { xs: "45%", md: "35%" },
          height: "100%",
          backgroundImage: "url('/headphone.png')",
          backgroundSize: "97% auto",
          backgroundPosition: "calc(100% - 2.4rem) center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#450159",
          zIndex: 1,
          transition: "left 2.5s ease-in-out", // Faster slide-in
        }}
      />

      {/* Text Section */}
      <Box
        sx={{
          width: { xs: "55%", md: "65%" },
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: animateText ? "50%" : "-30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            zIndex: 2,
            transition: "top 1.8s ease-in-out, opacity 1.5s ease-in-out", // Faster text animation
            opacity: animateText ? 1 : 0,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "2.5rem", sm: "4.5rem", md: "6rem" },
              color: "#000",
              fontFamily: "Roboto Slab, serif",
            }}
          >
            {heading}
          </Typography>

          {subheading && (
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "0.8rem", sm: "1.4rem", md: "1.7rem" },
                marginTop: "0.2rem",
                color: "#000",
                fontFamily: "Pacifico, cursive",
                fontWeight: 300,
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
