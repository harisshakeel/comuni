import Hero from "../components/Home/Hero";
import Attributes from "../components/Home/Attributes";
import Memories  from "../components/Home/Memories";
import Info  from "../components/Home/Info";




export default function HomePage() {
  return (
    <div>
      <Hero />
      <Memories/>
      <Info/>
    </div>
  );
}
