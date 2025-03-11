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
      setIsScrolled(window.scrollY > 0);
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
          backgroundColor: isScrolled ? "rgba(35, 1, 44, 0.8)" : "transparent",
          transition: "background-color 0.3s ease",
          boxShadow: isScrolled ? 3 : 0,
          px: { xs: 2, sm: 3, md: 10, lg: 15, xl: 20 },
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              component="img"
              src="/Logos/logo.png"
              alt="Comuni Logo"
              sx={{
                height: { xs: 25, sm: 35, md: 35 },
                width: "auto",
                marginRight: 1,
              }}
            />
            <Box
              component="img"
              src="/Logos/textlogo.png"
              alt="Comuni Text Logo"
              sx={{
                height: { xs: 17, sm: 20, md: 25 },
                width: "auto",
                objectFit: "contain",
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
                  fontFamily: "Boogaloo, cursive",
                  fontSize: "1.2rem",
                }}
              >
                {link.label}
              </Link>
            ))}
          </Box>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "block", sm: "none" }, marginLeft: "5rem" }}
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
