import React from "react";
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
      description: "Share tickets and event details with friends effortlessly.",
    },
  ];

  return (
    <div>
      <Heading heading="FEATURES" subheading="WHAT DO WE OFFER?" />
      <section id="services" style={{ padding: "6rem 0" }}>
        <Box maxWidth="lg" mx="auto" p={4}>
          <Grid container spacing={8}>
            {/* 35% for Heading and Description */}
            <Grid item xs={12} md={4}>
              <Box textAlign="left">
                <Typography variant="body1" color="textSecondary">
                  Discover all the ways Communi helps you connect, explore, and
                  create memorable experiences.
                </Typography>
              </Box>
            </Grid>

            {/* 65% for Services */}
            <Grid item xs={12} md={8}>
              <Grid container spacing={4}>
                {services.map((service, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card
                      sx={{
                        background:
                          "#ea29fa", // Gradient background for the card
                        color: "white", // Text color inside the card
                        "&:hover": {
                          boxShadow: 6,
                        },
                        transition: "box-shadow 0.3s",
                      }}
                    >
                      <CardHeader
                        avatar={
                          <Avatar
                            sx={{
                              backgroundColor: "white", // White background for the avatar
                              p: 1.5,
                            }}
                          >
                            <service.icon size={24} color="#800080" /> {/* Dark icon to contrast with the white background */}
                          </Avatar>
                        }
                      />
                      <CardContent>
                        <Typography
                          variant="h6"
                          component="h3"
                          gutterBottom
                          sx={{
                            fontFamily: "'Boogaloo', sans-serif", // Apply Boogaloo font
                            fontWeight: "bold", // Make the heading bold
                          }}
                        >
                          {service.title}
                        </Typography>
                        <Typography variant="body2" color="white">
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
