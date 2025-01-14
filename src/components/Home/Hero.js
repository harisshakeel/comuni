// components/Hero.js
"use client";

import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";

const Hero = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        backgroundImage: 'url("/hero.jpeg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        textAlign: "center",
        color: "white",
        padding: 4,
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Comuni
        </Typography>
        <Typography variant="h6" paragraph>
          Discover the best way to connect with your community. Let's build something amazing together!
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{ mt: 3, bgcolor: "#e129fa", color: "white" }}
          href="#about"
        >
          Get Started
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;
