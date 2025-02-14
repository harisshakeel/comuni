"use client"
import { Box, Typography } from "@mui/material";
import Heading from "../../components/Heading";
import Comingsoon  from "../../components/Comingsoon";
import Contactform from "@/components/Contact/Contactform";

export default function Contact() {
  return (
    <div>
      <Heading heading="CONTACT" subheading="How to reach us out?" />
      <Contactform/>
      <Comingsoon/>
    </div>
  );
}
