import React, { useMemo } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Avatar,
  Grid,
  Box,
} from "@mui/material";
import {
  Map,
  Users,
  Calendar,
  MessageSquare,
  Camera,
  Navigation,
  Star,
  QrCode,
  Share2,
} from "lucide-react";

import Heading from "../../components/Heading";
import Comingsoon from "../../components/Comingsoon";
import "@fontsource/boogaloo"; // Import Boogaloo font

export default function Features() {
  const services = [
    {
      icon: Map,
      title: "Interactive Map",
      description:
        "Discover events happening in your area with our real-time, dynamic map.",
    },
    {
      icon: Users,
      title: "Friend Rating System",
      description:
        "Build meaningful connections through shared activities and interactions.",
    },
    {
      icon: Calendar,
      title: "Event Planning",
      description:
        "Create and manage events with ease, setting dates, times, and locations.",
    },
    {
      icon: MessageSquare,
      title: "Integrated Messaging",
      description:
        "Chat with friends and share event details directly within the app.",
    },
    {
      icon: Camera,
      title: "Media Sharing",
      description:
        "Capture and share memories through photos and videos at events.",
    },
    {
      icon: Navigation,
      title: "Route Planning",
      description: "Get custom routes to events for seamless navigation.",
    },
    {
      icon: Star,
      title: "Safety Ratings",
      description:
        "Make informed decisions with our transparent safety rating system.",
    },
    {
      icon: QrCode,
      title: "Digital Tickets",
      description: "Quick and easy check-ins with QR code tickets.",
    },
    {
      icon: Share2,
      title: "Easy Sharing",
      description:
        "Share tickets and event details with friends effortlessly.",
    },
  ];

  // Compute fixed random heights for each card (between 18rem and 25rem)
  const cardHeights = useMemo(
    () =>
      services.map(
        () => `${Math.floor(Math.random() * (25 - 18 + 1) + 18)}rem`
      ),
    []
  );

  // Compute a fixed random vertical offset for each card's content (between 0rem and 4rem)
  const contentOffsets = useMemo(
    () =>
      services.map(() => `${Math.floor(Math.random() * 5)}rem`),
    []
  );

  return (
    <div>
      <Heading heading="FEATURES" subheading="What do we offer?" />
      <section id="services" style={{ padding: "6rem 0" }}>
        <Box maxWidth="lg" mx="auto" p={4}>
          <Grid container spacing={8}>
            {/* Left-side: Heading and Description */}
            <Grid item xs={12} md={4}>
              <Box textAlign="left">
                <Typography variant="body1" color="textSecondary">
                  Discover all the ways Communi helps you connect, explore, and
                  create memorable experiences.
                </Typography>
              </Box>
            </Grid>

            {/* Right-side: Services */}
            <Grid item xs={12} md={8}>
              <Grid container spacing={4}>
                {services.map((service, index) => (
                  <Grid item xs={12} sm={6} md={6} key={index}>
                    <Card
                      sx={{
                        background: "#ea29fa",
                        color: "white",
                        minHeight: cardHeights[index],
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        padding: "1rem",
                        "&:hover": { boxShadow: 6 },
                        transition: "box-shadow 0.3s",
                      }}
                    >
                      <CardHeader
                        avatar={
                          <Avatar
                            sx={{
                              backgroundColor: "white",
                              width: 50,
                              height: 50,
                              p: 1,
                            }}
                          >
                            <service.icon size={30} color="#800080" />
                          </Avatar>
                        }
                      />
                      <CardContent
                        sx={{
                          textAlign: "center",
                          marginTop: contentOffsets[index], // Fixed vertical offset
                        }}
                      >
                        <Typography
                          variant="h6"
                          component="h3"
                          gutterBottom
                          sx={{
                            fontFamily: "'Boogaloo', sans-serif",
                            fontWeight: "bold",
                            fontSize: "1.5rem",
                          }}
                        >
                          {service.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="white"
                          sx={{
                            fontSize: "1rem",
                            padding: "0.5rem 0",
                          }}
                        >
                          {service.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </section>
      <Comingsoon />
    </div>
  );
}
