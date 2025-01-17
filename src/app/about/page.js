import { Box, Typography } from "@mui/material";
import Heading from "../../components/Heading";
import Owners from "../../components/About/Owners";

export default function About() {
  return (
    <div>
      <Heading heading="ABOUT US" subheading="WHAT EXACTLY IS COMUNI?" />
      <Owners />
    </div>
  );
}
