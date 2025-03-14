"use client";

import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import heroImage from "../../../public/hero.jpg"; // Import the image
import "@fontsource/spicy-rice"; // Import the Spicy Rice font
import { motion } from "framer-motion"; // Import framer-motion

const Hero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundImage: `url(${heroImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        textAlign: "center",
        color: "white",
        padding: 4,
        overflow: "hidden",
        "::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.3)", // Tint overlay (adjust opacity/color as needed)
          zIndex: 1,
        },
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          position: "relative",
          zIndex: 2, // Ensure the text is above the overlay
          padding: { xs: 2, md: 4, lg: 6 }, // Responsive padding for the container
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -100 }} // Start off-screen from the left
          animate={{ opacity: 1, x: 0 }} // Fade in and move to its original position
          transition={{ duration: 1, ease: "easeOut" }} // Transition effect
        >
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontFamily: "Spicy Rice, cursive",
              fontWeight: 400,
              textTransform: "uppercase",
              fontSize: { xs: "2.2rem", md: "3rem", lg: "4rem" }, // Responsive font size for heading
            }}
          >
            Welcome to <span style={{ color: "#e129fa" }}>Comuni</span>
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Typography
            variant="h6"
            paragraph
            sx={{
              fontFamily: "Spicy Rice, cursive",
              fontWeight: 400,
              fontSize: { xs: "0.8rem", md: "1.1rem", lg: "1.2rem" }, // Responsive font size for paragraph
            }}
          >
            Discover the best way to{" "}
            <span style={{ color: "#e129fa" }}>connect</span> with your{" "}
            <span style={{ color: "#e129fa" }}>community</span>. Let's build
            something amazing together!
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }} // Start scaled down and transparent
          animate={{ opacity: 1, scale: 1 }} // Fade in and scale up to normal size
          transition={{ duration: 1.5, ease: "easeOut" }} // Transition duration
        >
          <Button
            variant="contained"
            size="large"
            sx={{
              mt: 3,
              px: { xs: 3, md: 4, lg: 6 }, // Responsive horizontal padding
              py: { xs: 1, md: 1.5, lg: 2 }, // Responsive vertical padding
              bgcolor: "#e129fa",
              color: "white",
              borderRadius: "50px",
              fontSize: { xs: "0.9rem", md: "1rem", lg: "1.1rem" }, // Responsive font size for the button
              fontWeight: "bold",
              textTransform: "uppercase",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
              transition: "transform 0.3s ease, background-color 0.3s ease",
              "&:hover": {
                bgcolor: "#c01ae0",
                transform: "scale(1.05)",
              },
              "&:active": {
                transform: "scale(0.98)",
              },
            }}
            href="about"
          >
            LEARN MORE!
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;
