import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

const Owners = () => {
  return (
    <Box sx={{ p: 4, backgroundColor: "#f5f5f5" }}>
      {/* First Row: Image on Left, Text on Right */}
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: "relative",
              //backgroundColor: "black",
              borderRadius: "16px",
              overflow: "hidden",
              width: "100%",
              height: "auto",
              aspectRatio: "4/3", // Ensures consistent aspect ratio
            }}
          >
            {/* Color box behind the image */}
            <Box
              sx={{
                position: "absolute",
                width: "90%", // Slightly larger than the image
                height: "90%", // Slightly larger than the image
                backgroundColor: "#e129fa", // Replace with your desired color
                zIndex: 1,
                borderRadius: "16px", // Matches the image border radius
              }}
            ></Box>
            {/* Image on bottom-left corner */}
            <img
              src="/image (1).jpg"
              alt="Owner"
              style={{
                position: "absolute", // Absolute positioning within the parent container
                bottom: "0", // Align to the bottom
                right: "0", // Align to the left
                zIndex: 2,
                width: "90%", // Image size
                height: "90%", // Image size
                objectFit: "cover",
                borderRadius: "16px",
              }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
            Meet Our Owner
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: "text.secondary" }}>
            Our owner is passionate about creating experiences that inspire and
            engage. With a background in business and creativity, they have
            built a vision that connects people through unique and unforgettable
            moments.
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: "medium", mb: 1 }}>
            Key Highlights:
          </Typography>
          <ul>
            <li>
              <Typography variant="body2" color="text.secondary">
                Over 10 years of industry experience
              </Typography>
            </li>
            <li>
              <Typography variant="body2" color="text.secondary">
                Driven by innovation and customer-centric values
              </Typography>
            </li>
            <li>
              <Typography variant="body2" color="text.secondary">
                Committed to sustainable practices
              </Typography>
            </li>
          </ul>
        </Grid>
      </Grid>

      {/* Second Row: Image on Right, Text on Left */}
      <Grid container spacing={4} alignItems="center" sx={{ mt: 6 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
            Our Vision
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: "text.secondary" }}>
            At the core of our mission is the desire to empower others through
            creativity and collaboration. Our vision is to bring people
            together, foster innovation, and make a positive impact on the
            world.
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: "medium", mb: 1 }}>
            What Drives Us:
          </Typography>
          <ul>
            <li>
              <Typography variant="body2" color="text.secondary">
                Innovation and creativity in every project
              </Typography>
            </li>
            <li>
              <Typography variant="body2" color="text.secondary">
                Building meaningful relationships with clients
              </Typography>
            </li>
            <li>
              <Typography variant="body2" color="text.secondary">
                A commitment to excellence and integrity
              </Typography>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: "relative",
              //backgroundColor: "black",
              borderRadius: "16px",
              overflow: "hidden",
              width: "100%",
              height: "auto",
              aspectRatio: "4/3", // Ensures consistent aspect ratio
            }}
          >
            {/* Color box behind the image */}
            <Box
              sx={{
                position: "absolute",
                width: "90%", // Slightly larger than the image
                height: "90%", // Slightly larger than the image
                backgroundColor: "#e129fa", // Replace with your desired color
                zIndex: 1,
                right: "0",
                bottom: "0",
                borderRadius: "16px", // Matches the image border radius
              }}
            ></Box>
            {/* Image on bottom-left corner */}
            <img
              src="/image (2).jpg"
              alt="Owner"
              style={{
                position: "absolute", // Absolute positioning within the parent container
                top: "0", // Align to the bottom
                left: "0", // Align to the left
                zIndex: 2,
                width: "90%", // Image size
                height: "90%", // Image size
                objectFit: "cover",
                borderRadius: "16px",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Owners;
