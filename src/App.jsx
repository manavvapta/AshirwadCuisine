import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import CategoryStrip from "./components/CategoryStrip.jsx";
import Cocktails from "./components/Cocktails.jsx";
import About from "./components/About.jsx";
import Art from "./components/Art.jsx";
import Menu from "./components/Menu.jsx";
import Contact from "./components/Contact.jsx";
import CurvedSlider from "./components/carousle.jsx";
import Footer from "./components/footer.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <CategoryStrip/>
      <About />
      <CurvedSlider />
      <Art />
      <Menu />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
