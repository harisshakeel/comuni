import React, { useState } from "react";
import { Box, Typography, Grid, TextField, Button, IconButton } from "@mui/material";
import { Email, Phone, LocationOn, Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

export default function ContactForm() {
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
    console.log("Form submitted", formData);
  };

  return (
    <section id="contact" style={{ padding: "6rem 0", height: "90vh" }}>
      <Box maxWidth="lg" mx="auto" px={3} height="100%">
        <Grid container spacing={4} height="100%">
          {/* Left Section: Heading, Description, Contact Info */}
          <Grid item xs={12} md={4} display="flex" alignItems="center" justifyContent="center">
            <Box sx={{ maxWidth: 600, mx: "auto", textAlign: "left" }}>
              <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom>
                Reach Us Out!
              </Typography>
              <Typography variant="body1" color="textSecondary" mb={2}>
                We’d love to hear from you! Whether you have a question, want to give feedback, or need support, reach out to us below.
              </Typography>

              {/* Contact Info */}
              <Box mt={4}>
                <Box display="flex" alignItems="center" mb={2}>
                  <Email sx={{ color: "#ca00f3", mr: 1 }} />
                  <Typography variant="body1">support@communi.app</Typography>
                </Box>
                <Box display="flex" alignItems="center" mb={2}>
                  <Phone sx={{ color: "#ca00f3", mr: 1 }} />
                  <Typography variant="body1">+1 (555) 123-4567</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <LocationOn sx={{ color: "#ca00f3", mr: 1 }} />
                  <Typography variant="body1">
                    123 Innovation Drive, San Francisco, CA 94103
                  </Typography>
                </Box>
              </Box>

              {/* Social Media Links */}
              <Box mt={4} display="flex" gap={2}>
                <IconButton href="https://twitter.com/communiapp" target="_blank" sx={{ color: "#ca00f3" }}>
                  <Twitter />
                </IconButton>
                <IconButton href="https://facebook.com/communiapp" target="_blank" sx={{ color: "#ca00f3" }}>
                  <Facebook />
                </IconButton>
                <IconButton href="https://instagram.com/communiapp" target="_blank" sx={{ color: "#ca00f3" }}>
                  <Instagram />
                </IconButton>
                <IconButton href="https://linkedin.com/company/communiapp" target="_blank" sx={{ color: "#ca00f3" }}>
                  <LinkedIn />
                </IconButton>
              </Box>
            </Box>
          </Grid>

          {/* Right Section: Contact Form */}
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
                        "&:hover": { backgroundColor: "#FF1493" },
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
  );
}
