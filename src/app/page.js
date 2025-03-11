import Hero from "../components/Home/Hero";
import Attributes from "../components/Home/Attributes";
import Memories from "../components/Home/Memories";
import Comingsoon from "../components/Comingsoon";
import AppPreview from "@/components/Home/AppPreview";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <AppPreview />
      <Memories />
      <Comingsoon />
    </div>
  );
}
