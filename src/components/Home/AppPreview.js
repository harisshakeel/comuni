import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { CalendarToday } from "@mui/icons-material";

export default function AppPreview() {
  return (
    <section
      style={{
        width: "100%",
        padding: "6rem 1rem",
        background: "linear-gradient(to bottom right, #ea29fa1A, #ff01511A)",
      }}
    >
      <Box maxWidth="lg" mx="auto">
        <Grid container spacing={6} alignItems="center">
          {/* Left Section: Heading, Features & Buttons */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              fontWeight="bold"
              gutterBottom
              sx={{
                background: "linear-gradient(to right, #ea29fa, #ff0151)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Rediscover Real-World Connections
            </Typography>
            <Typography variant="body1" color="textSecondary" mb={3}>
              Communi brings people together through meaningful real-world
              interactions. Our app makes it easy to discover events, connect
              with friends, and create lasting memories.
            </Typography>

            {/* Features List */}
            <Box component="ul" sx={{ listStyle: "none", padding: 0, mb: 4 }}>
              {[
                "Find events happening right now near you",
                "Connect with friends and make new ones",
                "Secure ticketing and easy check-ins",
                "Rate events and hosts for better experiences",
              ].map((item, i) => (
                <Box
                  component="li"
                  display="flex"
                  alignItems="center"
                  gap={2}
                  key={i}
                  mb={2}
                >
                  <Box
                    sx={{
                      background: "linear-gradient(to right, #ea29fa, #ff0151)",
                      borderRadius: "50%",
                      p: "6px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <CalendarToday sx={{ color: "white", fontSize: "1rem" }} />
                  </Box>
                  <Typography variant="body1">{item}</Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Right Section: App Mockup */}
          <Grid item xs={12} md={6} display="flex" justifyContent="center">
            <Box
              sx={{
                width: 280,
                height: 580,
                backgroundColor: "black",
                borderRadius: "40px",
                p: 2,
                boxShadow: 3,
                border: "8px solid black",
                position: "relative",
              }}
            >
              {/* Top Notch */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "30%",
                  height: "30px",
                  backgroundColor: "black",
                  borderRadius: "0 0 20px 20px",
                  zIndex: 10,
                }}
              />
              {/* Phone Screen */}
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "32px",
                  overflow: "hidden",
                  background:
                    "linear-gradient(to bottom right, #ea29fa, #ff0151)",
                }}
              >
                <img
                  src="/placeholder.svg?height=564&width=264"
                  alt="Communi App Interface"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}
