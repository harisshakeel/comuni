'use client';

import { CssBaseline, Container } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CssBaseline />
        <Navbar />
        <Container component="main" sx={{ my: 4 }}>
          {children}
        </Container>
        <Footer />
      </body>
    </html>
  );
}
