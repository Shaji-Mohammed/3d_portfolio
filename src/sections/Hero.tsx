import { useGSAP } from "@gsap/react";
import Button from "../components/Button.js";
import HeroExp from "../components/HeroModels/HeroExp.tsx";
import AnimatedCounter from "../components/AnimatedCounter";
import { words } from "../constants/index.ts";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power2.inOut",
      },
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        {/* <img src="/images/bg.png" alt="background" /> */}
      </div>

      <div className="hero-layout">
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <p className="text-xl font-baskerville text-red-600">Hello</p>
              <h1 className="text-5xl font-baskerville text-white-50 relative z-10 pointer-events-none">
                I'm Shaji
              </h1>
              <h1 className="">
                a
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word: any) => (
                      <span
                        key={word.text}
                        className="flex items-center md:gap-3 gap-1 text-blue-400"
                      >
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
            </div>

            <div className="mt-[-20px]">
              <p className="text-xl font-baskerville">
                Computer Science Graduate from Dalhousie University.
              </p>
              <p className="text-xl font-baskerville">
                Focused on solving Real World problems
              </p>
            </div>

            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="button"
              text="See my Work"
            />
          </div>
        </header>

        {/* 3D Model */}
        {/* <figure>
          <div className="hero-3d-layout">
            <HeroExp />
          </div>
        </figure> */}
      </div>

      {/* <AnimatedCounter /> */}
    </section>
  );
};

export default Hero;
