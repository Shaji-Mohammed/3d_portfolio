import { Route, Routes } from "react-router-dom";
import BlogPage from "./sections/blogs";
import SinglePost from "./sections/singlePost";
import { NavBar } from "./components/NavBar";
import Hero from "./sections/Hero";
import LogoSection from "./sections/LogoSection";
import ShowcaseSection from "./sections/ShowcaseSection";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <LogoSection />
              <ShowcaseSection />
              <TechStack />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<SinglePost />} />
      </Routes>
    </>
  );
};

export default App;