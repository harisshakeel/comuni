import React, { useState } from "react";
import { Box, Typography, Grid, TextField, Button, Paper } from "@mui/material";

export default function Contactform() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted", formData);
  };

  return (
    <div>
      <section id="contact" style={{ padding: "6rem 0" }}>
        <Box maxWidth="lg" mx="auto" px={3}>
          <Grid container spacing={4}>
            {/* 35% for Heading and Description */}
            <Grid item xs={12} md={4}>
              <Box textAlign="center">
                <Typography
                  variant="h4"
                  component="h2"
                  fontWeight="bold"
                  gutterBottom
                >
                  Reach us out!
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  We’d love to hear from you! Whether you have a question, want
                  to give feedback, or need support, reach out to us below.
                </Typography>
              </Box>
            </Grid>

            {/* 65% for Contact Form */}
            <Grid item xs={12} md={8}>
              <Paper
                sx={{
                  padding: 4,
                  backgroundColor: "#fff",
                  boxShadow: 3,
                  borderRadius: 2,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                      <TextField
                        label="Your Name"
                        name="name"
                        variant="outlined"
                        fullWidth
                        value={formData.name}
                        onChange={handleChange}
                        required
                        sx={{
                          borderRadius: 2,
                          border: "2px solid #800080", // Adding website gradient color
                          "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#FF1493", // Hover color for the border
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        label="Your Email"
                        name="email"
                        variant="outlined"
                        fullWidth
                        value={formData.email}
                        onChange={handleChange}
                        required
                        sx={{
                          borderRadius: 2,
                          border: "2px solid #800080", // Adding website gradient color
                          "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#FF1493", // Hover color for the border
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Your Message"
                        name="message"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        sx={{
                          borderRadius: 2,
                          border: "2px solid #800080", // Adding website gradient color
                          "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#FF1493", // Hover color for the border
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        sx={{
                          backgroundColor: "#ca00f3", // Gradient button background
                          "&:hover": {
                            backgroundColor: "#FF1493", // Hover effect for button
                          },
                          borderRadius: 2,
                          padding: "10px 20px",
                        }}
                        fullWidth
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </section>
    </div>
  );
}
