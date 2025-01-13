'use client';

import { CssBaseline, Container } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Comuni</title>
        <meta name="description" content="Comuni is a modern app built with Next.js and Material-UI." />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/src/assets/icons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/src/assets/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/src/assets/icons/favicon-16x16.png" /> */}
      </Head>
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
