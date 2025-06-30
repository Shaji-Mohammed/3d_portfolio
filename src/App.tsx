import LogoSection from "./sections/LogoSection";
import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import FeatureCards from "./sections/FeatureCards";
import ExpSection from "./sections/ExpSection";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <FeatureCards />
      <ExpSection />
      <TechStack />
      <Contact />
    </>
  );
};

export default App;
