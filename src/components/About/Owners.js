import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const Owners = () => {
  return (
    <Box sx={{ p: 12, backgroundColor: "#f5f5f5" }}>
      {/* First Owner: Shozaib Haroon */}
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: "relative",
              borderRadius: "16px",
              overflow: "hidden",
              width: "100%",
              height: "auto",
              aspectRatio: "4/3", // Ensures consistent aspect ratio
            }}
          >
            <Box
              sx={{
                position: "absolute",
                width: "90%",
                height: "90%",
                backgroundColor: "#450159",
                zIndex: 1,
                borderRadius: "16px",
              }}
            ></Box>
            <img
              src="/image (1).jpg"
              alt="Shozaib Haroon"
              style={{
                position: "absolute",
                bottom: "0",
                right: "0",
                zIndex: 2,
                width: "90%",
                height: "90%",
                objectFit: "cover",
                borderRadius: "16px",
              }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
            Meet Shozaib Haroon
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: "text.secondary" }}>
            Shozaib is a visionary leader with a passion for innovation and
            collaboration. His experience and expertise have been instrumental
            in shaping the values and mission of our organization.
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: "medium", mb: 1 }}>
            Key Highlights:
          </Typography>
          <ul>
            <li>
              <Typography variant="body2" color="text.secondary">
                Over a decade of industry leadership
              </Typography>
            </li>
            <li>
              <Typography variant="body2" color="text.secondary">
                Known for fostering creativity and teamwork
              </Typography>
            </li>
            <li>
              <Typography variant="body2" color="text.secondary">
                Advocate for innovative and sustainable practices
              </Typography>
            </li>
          </ul>
        </Grid>
      </Grid>

      {/* Second Owner: Thomas Vessete */}
      <Grid container spacing={4} alignItems="center" sx={{ mt: 6 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
            Meet Thomas Vessete
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: "text.secondary" }}>
            Thomas is a dynamic and dedicated professional committed to
            excellence. His ability to connect with people and his strategic
            vision have driven the success of numerous projects.
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: "medium", mb: 1 }}>
            Key Highlights:
          </Typography>
          <ul>
            <li>
              <Typography variant="body2" color="text.secondary">
                Extensive expertise in project management
              </Typography>
            </li>
            <li>
              <Typography variant="body2" color="text.secondary">
                Passionate about building meaningful client relationships
              </Typography>
            </li>
            <li>
              <Typography variant="body2" color="text.secondary">
                Strong advocate for innovation and integrity
              </Typography>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: "relative",
              borderRadius: "16px",
              overflow: "hidden",
              width: "100%",
              height: "auto",
              aspectRatio: "4/3", // Ensures consistent aspect ratio
            }}
          >
            <Box
              sx={{
                position: "absolute",
                width: "90%",
                height: "90%",
                backgroundColor: "#450159",
                zIndex: 1,
                right: "0",
                bottom: "0",
                borderRadius: "16px",
              }}
            ></Box>
            <img
              src="/image (2).jpg"
              alt="Thomas Vessete"
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                zIndex: 2,
                width: "90%",
                height: "90%",
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
