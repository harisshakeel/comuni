import React from "react";
import {
  Card,
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
import "@fontsource/boogaloo";

export default function Features() {
  const services = [
    { icon: Map, title: "Interactive Map", description: "Explore local events with real-time location updates and navigation support." },
    { icon: Users, title: "Friend Rating System", description: "Rate and review your friends' event experiences to build stronger connections." },
    { icon: Calendar, title: "Event Planning", description: "Plan, manage, and organize events effortlessly with reminders and notifications." },
    { icon: MessageSquare, title: "Integrated Messaging", description: "Chat with friends, share event details, and coordinate plans seamlessly." },
    { icon: Camera, title: "Media Sharing", description: "Capture unforgettable moments and share them instantly with friends and groups." },
    { icon: Navigation, title: "Route Planning", description: "Get custom route suggestions for easy navigation to events." },
    { icon: Star, title: "Safety Ratings", description: "Check user-generated safety ratings before attending an event." },
    { icon: QrCode, title: "Digital Tickets", description: "Use QR codes for quick check-ins and paperless ticketing." },
    { icon: Share2, title: "Easy Sharing", description: "Easily share tickets, event details, and invites with your contacts." },
  ];

  return (
    <div>
      <Heading heading="FEATURES" subheading="What do we offer?" />
      <section id="services" style={{ padding: "6rem 0" }}>
        <Box maxWidth="lg" mx="auto" p={4}>
          <Grid container spacing={8}>
            <Grid item xs={12} md={4}>
              <Box textAlign="left">
                <Typography variant="body1" color="textSecondary">
                  Discover all the ways Communi helps you connect, explore, and create memorable experiences.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={8}>
              <Grid container spacing={4}>
                {services.map((service, index) => (
                  <Grid item xs={12} sm={6} md={6} key={index}>
                    <Card
                      sx={{
                        position: "relative",
                        backgroundColor: "#f6a6ff", // Pink background
                        minHeight: "22rem",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                        borderRadius: "10px",
                        "&:hover .overlay": { left: 0 },
                        "&:hover .avatar-box": {
                          transform: "scale(0.6) translate(-50%, -190px)", // Center horizontally and move to the top
                          left: "50%",
                        },
                        "&:hover .card-title": { opacity: 0 }, // Hide black title on hover
                      }}
                    >
                      <Box
                        className="overlay"
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: "-100%", // Initially hidden
                          width: "100%",
                          height: "100%",
                          background: "#450159", // Purple overlay
                          color: "white",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          textAlign: "center",
                          padding: "1rem",
                          transition: "left 0.5s ease-in-out",
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
                        <Typography variant="body2" sx={{ fontSize: "1rem", padding: "0.5rem 0" }}>
                          {service.description}
                        </Typography>
                      </Box>

                      <CardHeader
                        className="avatar-box"
                        sx={{
                          transition: "transform 0.3s ease-in-out, left 0.3s ease-in-out",
                          position: "absolute",
                          left: "50%",
                          transform: "translateX(-50%)",
                          textAlign: "center",
                        }}
                        avatar={
                          <Avatar
                            sx={{
                              backgroundColor: "white",
                              width: 80,
                              height: 80,
                              p: 1,
                              transition: "transform 0.3s ease-in-out",
                            }}
                          >
                            <service.icon size={50} color="#800080" />
                          </Avatar>
                        }
                        title={
                          <Typography
                            className="card-title"
                            variant="h6"
                            sx={{
                              textAlign: "center",
                              fontSize: "1.2rem",
                              fontWeight: "bold",
                              mt: 2,
                              transition: "opacity 0.3s ease-in-out",
                            }}
                          >
                            {service.title}
                          </Typography>
                        }
                      />
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
