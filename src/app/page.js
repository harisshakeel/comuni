import Hero from "../components/Home/Hero";
import Attributes from "../components/Home/Attributes";
import Memories  from "../components/Home/Memories";
import Comingsoon  from "../components/Comingsoon";




export default function HomePage() {
  return (
    <div>
      <Hero />
      <Memories/>
      <Comingsoon/>
    </div>
  );
}
