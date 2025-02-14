import React, { useState } from "react";
import { Box, Typography, Grid, TextField, Button } from "@mui/material";

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
      <section id="contact" style={{ padding: "6rem 0", height: "90vh" }}>
        <Box maxWidth="lg" mx="auto" px={3} height="100%">
          <Grid container spacing={4} height="100%">
            {/* Heading and Description */}
            <Grid
              item
              xs={12}
              md={4}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Box sx={{ maxWidth: 600, mx: "auto", textAlign: "left" }}>
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

            {/* Contact Form */}
            <Grid item xs={12} md={8} display="flex" alignItems="center">
              <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Your Name"
                      name="name"
                      variant="standard"
                      fullWidth
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Your Email"
                      name="email"
                      variant="standard"
                      fullWidth
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Your Message"
                      name="message"
                      variant="standard"
                      fullWidth
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Box display="flex" justifyContent="flex-start">
                      <Button
                        type="submit"
                        variant="contained"
                        sx={{
                          backgroundColor: "#ca00f3",
                          "&:hover": {
                            backgroundColor: "#FF1493",
                          },
                          borderRadius: 4,
                          padding: "9px 20px",
                        }}
                      >
                        Submit
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Box>
      </section>
    </div>
  );
}
