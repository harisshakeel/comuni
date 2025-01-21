import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import "@fontsource/waterfall"; // Import the Waterfall font

const Polaroid = ({ imgUrl, caption }) => {
  return (
    <Box
      sx={{
        width: {
          xs: "5.6rem", // Small size for mobile
          sm: "11rem", // Medium size for tablets
          md: "17rem", // Large size for desktops
        },
        backgroundColor: "#fff",
        border: "0.06rem solid #ddd", // Converted from 1px
        boxShadow: "0 0.25rem 0.375rem rgba(0, 0, 0, 0.2)", // Converted from px
        padding: {
          xs: "0.22rem", // Small size for mobile
          sm: "0.35rem", // Medium size for tablets
          md: "0.5rem", // Large size for desktops
        }, // Converted from 8px
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "0.5rem", // Converted from 8px
      }}
    >
      <Box
        component="img"
        src={imgUrl}
        alt={caption || "Polaroid image"}
        sx={{
          width: "100%",
          borderRadius: "0.25rem", // Converted from 4px
          aspectRatio: "1 / 1",
          objectFit: "cover",
          borderBottom: "none",
        }}
      />
      {caption && (
        <Typography
          variant="body2"
          sx={{
            marginTop: { md: "0.375rem", sm: "0.34rem", xs: "0.2rem" }, // Converted from 6px
            fontSize: {
              xs: "0.5rem", // Smaller font for mobile
              sm: "1.1rem", // Medium font for tablets
              md: "1.5rem", // Larger font for desktops
            },
            fontFamily: "'Waterfall', sans-serif", // Applying the imported font
            fontWeight: 600, // Making it a bit bolder
          }}
        >
          {caption}
        </Typography>
      )}
    </Box>
  );
};

Polaroid.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  caption: PropTypes.string,
};

export default Polaroid;
