import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const Description = () => {
  return (
    <Box sx={{ p:12, backgroundColor: "#f5f5f5" }}>
      <Grid container spacing={4} alignItems="center">
        {/* App Overview Section */}
        <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "center" }}>
            App Overview
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            Communi is an all-in-one platform designed to help users rediscover the excitement of real-world connections. 
            It empowers individuals to find intriguing events, plan unforgettable moments with friends, and chart their journey to these events. 
            By breaking the cycle of digital distractions and encouraging face-to-face interactions, Communi fosters meaningful relationships 
            and strengthens local communities. From discovering local happenings to creating custom routes and sharing unforgettable moments, 
            Communi is your ultimate partner in rediscovering the joy of real-world connections.
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={4} alignItems="center" sx={{ mt: 6 }}>
        {/* Key Features Section */}
        <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "center" }}>
            Key Features
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
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
