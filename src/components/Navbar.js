'use client';

import { AppBar, Toolbar, Typography, Link } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Comuni
        </Typography>
        <Link href="/" color="inherit" sx={{ mx: 2, textDecoration: 'none' }}>
          Home
        </Link>
        <Link href="/about" color="inherit" sx={{ mx: 2, textDecoration: 'none' }}>
          About
        </Link>
        <Link href="/contact" color="inherit" sx={{ mx: 2, textDecoration: 'none' }}>
          Contact
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
