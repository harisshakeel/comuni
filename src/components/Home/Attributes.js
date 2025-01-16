import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';

export default function FeaturesSection() {
  const features = [
    {
      title: "Discover Events",
      description: "Find intriguing events that match your interests and passions",
      emoji: "✨",
    },
    {
      title: "Plan Together",
      description: "Create unforgettable moments by planning events with friends",
      emoji: "🎉",
    },
    {
      title: "Chart Your Journey",
      description: "Map out your adventure from start to finish with interactive planning tools",
      emoji: "🗺️",
    },
  ];

  return (
    <section
      style={{
        width: '100%',
        padding: '3rem 0',
        background: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/111111111.PNG-m9oqUyz39IJ2yVKg61TyGuj8OH8m4A.png) no-repeat center center fixed',
        backgroundSize: 'cover',
      }}
    >
      <Box className="container" sx={{ position: 'relative', px: 4 }}>
        {/* Playful background with animated dots */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(128, 0, 128, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '1.5rem',
          }}
        />
        
        <Box sx={{ position: 'relative' }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
                background: 'linear-gradient(to right, #7b2ff7, #f50057)',
                backgroundClip: 'text',
                color: 'transparent',
                letterSpacing: '-0.05em',
                fontFamily: 'Dancing Script',
              }}
            >
              Let the Magic Begin!
            </Typography>
            <Typography
              variant="body1"
              sx={{
                maxWidth: '700px',
                margin: '0 auto',
                color: 'gray',
                fontSize: { xs: '1rem', md: '1.25rem' },
                fontFamily: 'Caveat',
              }}
            >
              Your next adventure is just around the corner
            </Typography>
          </Box>

          <Grid container spacing={8} sx={{ justifyContent: 'center' }}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    border: '2px solid rgba(128, 0, 128, 0.2)',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(10px)',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: '0 4px 20px rgba(128, 0, 128, 0.5)',
                    },
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -20,
                      right: -20,
                      width: 160,
                      height: 160,
                      background: 'linear-gradient(to bottom right, #f2d4ff, #ff80ab)',
                      borderRadius: '50%',
                      opacity: 0.5,
                      transition: 'transform 0.5s',
                      '&:hover': {
                        transform: 'scale(1.5)',
                      },
                    }}
                  />
                  <CardContent sx={{ position: 'relative', padding: 6 }}>
                    <Typography variant="h3" sx={{ fontSize: '2.5rem', mb: 2 }}>
                      {feature.emoji}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 'bold',
                        background: 'linear-gradient(to right, #7b2ff7, #f50057)',
                        backgroundClip: 'text',
                        color: 'transparent',
                        fontFamily: 'Dancing Script',
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'gray', fontFamily: 'Caveat', fontSize: '1.25rem' }}>
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          bottom: -4,
          left: 0,
          right: 0,
          height: '6rem',
          backgroundColor: 'white',
          clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 70% 50%, 30% 50%, 0 0)',
        }}
      />
    </section>
  );
}
