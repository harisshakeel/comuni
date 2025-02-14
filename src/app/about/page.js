import { Box, Typography } from "@mui/material";
import Heading from "../../components/Heading";
import Owners from "../../components/About/Owners";
import Description from "../../components/About/Description";
import Comingsoon  from "../../components/Comingsoon";



export default function About() {
  return (
    <div>
      <Heading heading="ABOUT US" subheading="What exactly is comuni?" />
      <Description/>
      <Owners />
      <Comingsoon/>
    </div>
  );
}
