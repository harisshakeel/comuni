"use client"
import { Box, Typography } from "@mui/material";
import Heading from "../../components/Heading";
import Comingsoon  from "../../components/Comingsoon";
import Contactform from "@/components/Contact/Contactform";

export default function Contact() {
  return (
    <div>
      <Heading heading="CONTACT US" subheading="HOW TO REACH US OUT?" />
      <Contactform/>
      <Comingsoon/>
    </div>
  );
}
