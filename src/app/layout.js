"use client";

import { CssBaseline, Box } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "@fontsource/nova-round"; // Ensure the font is imported
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: "'Nova Round', sans-serif", // Apply globally
  },
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add metadata and title */}
        <title>Comuni</title>
        <meta
          name="description"
          content="Comuni is a modern app built with Next.js and Material-UI."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/comuni.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <Box component="main">{children}</Box>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
