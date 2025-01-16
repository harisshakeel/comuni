import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import "@fontsource/waterfall"; // Import the Spicy Rice font

const Polaroid = ({ imgUrl, caption }) => {
  return (
    <Box
      sx={{
        width: "250px", // Reduced size
        backgroundColor: "#fff",
        border: "1px solid #ddd",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
        padding: "8px", // Adjusted padding for smaller size
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "8px",
      }}
    >
      <Box
        component="img"
        src={imgUrl}
        alt={caption || "Polaroid image"}
        sx={{
          width: "100%",
          borderRadius: "4px",
          aspectRatio: "1 / 1",
          objectFit: "cover",
          borderBottom: "none",
        }}
      />
      {caption && (
        <Typography
          variant="body2"
          sx={{
            marginTop: "6px", // Adjusted margin for spacing
            fontSize: "1.5rem",
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
