import LogoSection from "./sections/LogoSection";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { NavBar } from "./components/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <LogoSection />
      <ShowcaseSection />
      <TechStack />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
