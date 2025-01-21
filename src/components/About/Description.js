import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const Description = () => {
  return (
    <Box
      sx={{
        p: { xs: 4, md: 8, lg: 12 }, // Responsive padding: small, medium, and large screens
        backgroundColor: "#f5f5f5",
      }}
    >
      {/* App Overview Section */}
      <Grid container spacing={{ xs: 2, md: 4 }} alignItems="center">
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              fontSize: { xs: "1.5rem", md: "2rem", lg: "2.5rem" }, // Responsive font size
            }}
          >
            App Overview
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              fontSize: { xs: "0.9rem", md: "1rem", lg: "1.2rem" }, // Responsive text size
              lineHeight: { xs: "1.4", md: "1.6", lg: "1.8" }, // Responsive line height
            }}
          >
            Communi is an all-in-one platform designed to help users rediscover the excitement of real-world connections. 
            It empowers individuals to find intriguing events, plan unforgettable moments with friends, and chart their journey to these events. 
            By breaking the cycle of digital distractions and encouraging face-to-face interactions, Communi fosters meaningful relationships 
            and strengthens local communities. From discovering local happenings to creating custom routes and sharing unforgettable moments, 
            Communi is your ultimate partner in rediscovering the joy of real-world connections.
          </Typography>
        </Grid>
      </Grid>

      {/* Key Features Section */}
      <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        alignItems="center"
        sx={{ mt: { xs: 4, md: 6, lg: 8 } }} // Responsive margin-top
      >
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              fontSize: { xs: "1.5rem", md: "2rem", lg: "2.5rem" }, // Responsive font size
            }}
          >
            Key Features
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              fontSize: { xs: "0.9rem", md: "1rem", lg: "1.2rem" }, // Responsive text size
              lineHeight: { xs: "1.4", md: "1.6", lg: "1.8" }, // Responsive line height
            }}
          >
            Communi is packed with features that enhance event discovery, planning, and attendance. The app provides a real-time interactive 
            map to explore events happening nearby or beyond. Users can navigate effortlessly with event route planning and discover events 
            across diverse categories, including live music, gaming, sports, and networking. Social engagement is fostered through integrated 
            messaging, a Friend Rating system to strengthen connections, and customizable profiles. For event hosts, the app offers effortless 
            event creation, streamlined ticketing with QR codes, and tools for media sharing during and after events. Safety is a priority, 
            with transparent Safety Ratings and host moderation features. Financial management is simplified through an integrated wallet system, 
            ensuring secure ticket purchases and payouts. Communi redefines how people discover, attend, and engage with events.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Description;
