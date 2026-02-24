import { useGSAP } from "@gsap/react";
import { Exp_summary, words } from "../constants/index.ts";
import gsap from "gsap";
import { PulsatingButton } from "@/components/ui/pulsating-button.tsx";
import { FaqSection } from "@/components/blocks/faq.tsx";

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
      <div className="hero-layout">
        <header className="flex flex-col justify-between md:w-[50%] w-screen md:px-20 px-5">
          <img src="images/self.jpeg" className="size-54 rounded-full mb-10" />

          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <p className="text-xl font-baskerville text-red-600">Hello</p>
              <h1 className="text-5xl font-baskerville text-black-50 dark:text-white-50 relative z-10 pointer-events-none">
                I'm Shaji,
              </h1>
              <h1 className="font-baskerville">
                a
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word: any) => (
                      <span
                        key={word.text}
                        className="flex items-center md:gap-3 gap-1 dark:text-blue-400 text-blue-600"
                      >
                        <span className="font-baskerville">{word.text}</span>
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

            <PulsatingButton
              className="md:w-35 text-lg font-baskerville font-semibold md:h-12 w-60 h-12"
              pulseColor="#808080"
              duration="2s"
              id="button"
            >
              My Work
            </PulsatingButton>
          </div>
        </header>

        <div className="flex flex-col w-full h-full md:max-w-[50%] md:mt-30 mt-10">
          <FaqSection 
            title="Work Experience" 
            items={Exp_summary} 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
