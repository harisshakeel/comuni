'use client';

import { Box, Typography, Grid, Link } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 6, backgroundColor: 'rgb(236, 200, 244)' }}>
      <Grid container spacing={4} sx={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Column 1: Contact Information */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#6a1b9a' }}>Contact Us</Typography>
          <Typography variant="body2" color="textSecondary">
            Email: <Link href="mailto:info@comuni.com" sx={{ color: '#6a1b9a' }}>info@comuni.com</Link>
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Phone: +1 (800) 123-4567
          </Typography>
        </Grid>

        {/* Column 2: Social Media Links */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#6a1b9a' }}>Follow Us</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
            <Link href="https://facebook.com" target="_blank">
              <Facebook sx={{ fontSize: 30, color: '#6a1b9a' }} />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <Twitter sx={{ fontSize: 30, color: '#6a1b9a' }} />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <Instagram sx={{ fontSize: 30, color: '#6a1b9a' }} />
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <LinkedIn sx={{ fontSize: 30, color: '#6a1b9a' }} />
            </Link>
          </Box>
        </Grid>

        {/* Column 3: Quick Links */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#6a1b9a' }}>Quick Links</Typography>
          <Box>
            <Typography variant="body2" color="textSecondary">
              <Link href="/about" sx={{ textDecoration: 'none', color: '#6a1b9a' }}>About Us</Link>
            </Typography>
            <Typography variant="body2" color="textSecondary">
              <Link href="/privacy-policy" sx={{ textDecoration: 'none', color: '#6a1b9a' }}>Privacy Policy</Link>
            </Typography>
            <Typography variant="body2" color="textSecondary">
              <Link href="/terms" sx={{ textDecoration: 'none', color: '#6a1b9a' }}>Terms & Conditions</Link>
            </Typography>
          </Box>
        </Grid>

        {/* Column 4: Newsletter */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#6a1b9a' }}>Newsletter</Typography>
          <Typography variant="body2" color="textSecondary">
            Subscribe to our newsletter for the latest updates.
          </Typography>
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Box sx={{ py: 2,my: 3, textAlign: 'center', backgroundColor: '#d1c4e9' }}>
        <Typography variant="body2" color="textSecondary">
          © {new Date().getFullYear()} Comuni. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
