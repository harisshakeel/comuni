"use client";

import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Link,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "@fontsource/boogaloo"; // Import Boogaloo font

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/features" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const drawerContent = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navLinks.map((link) => (
          <ListItem key={link.label} disablePadding>
            <ListItemButton component="a" href={link.href}>
              <ListItemText
                primary={link.label}
                primaryTypographyProps={{
                  sx: {
                    fontFamily: "Boogaloo, cursive", // Apply Boogaloo font
                    fontSize: "1.2rem",
                    color: "#e129fa", // Set the color to #e129fa
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.8)" : "transparent",
          transition: "background-color 0.3s ease",
          boxShadow: isScrolled ? 3 : 0,
          paddingLeft: { xs: 2, sm: 10 }, // Add left padding (adjust as needed)
          paddingRight: { xs: 2, sm: 10 }, // Add right padding (adjust as needed)
        }}
      >
        <Toolbar>
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <Box
              component="img"
              src="/logo.png" // Update with your actual path
              alt="Comuni Logo"
              sx={{
                height: 70, // Adjust the size as needed
                marginRight: -3,
                marginTop: "-13px", // Move the logo up by 10px, adjust as needed
              }}
            />

            <Box
              component="img"
              src="/textlogo.png" // Update with the actual path for textlogo.png
              alt="Comuni Text Logo"
              sx={{
                height: 120, // Adjust height as needed
                objectFit: "contain", // Ensures the image fits well within its container
              }}
            />
          </Box>

          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                color="inherit"
                sx={{
                  mx: 2,
                  textDecoration: "none",
                  fontFamily: "Boogaloo, cursive", // Apply Boogaloo font
                  fontSize: "1.2rem",
                }}
              >
                {link.label}
              </Link>
            ))}
          </Box>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "block", sm: "none" } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Navbar;