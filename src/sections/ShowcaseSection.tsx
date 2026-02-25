import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { project1_tools, project2_tools } from "../constants";
import { BtnBorder } from "../components/btn_border";
import { ExternalLink, Github } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom -= 100",
          },
        },
      );
    });

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 },
    );
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        {/* <h3 className="justify-center mt-10 items-center text-3xl md:text-4xl font-baskerville mb-8 text-center">
          Work and Projects
        </h3> */}
        <div className="showcaselayout">
          {/* LEFT */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/1.png" alt="Ryde" />
            </div>
            <div className="flex flex-row flex-wrap justify-between items-center py-2">
              <div className="flex flex-row flex-wrap space-x-2">
                {project1_tools.map((tool) => (
                  <BtnBorder
                    name={tool.name}
                    key={tool.name}
                    path={tool.iconPath}
                  />
                ))}
              </div>

              <a
                href="https://apps.apple.com/ca/app/estatelynx-pocket-listings/id6749465682"
                target="_blank"
                className="font-baskerville text-lg rounded-lg mt-2 sm:mt-0 flex flex-row items-center justify-between w-32 border-2 border-dashed dark:border-white border-black dark:bg-black/90 bg-white/90 px-2 py-1 font-semibold transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] dark:hover:shadow-[4px_4px_0px_white] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
              >
                App Store <ExternalLink className="size-5" />
              </a>
            </div>
            <div className="text-content font-baskerville">
              <h2>Buying and Selling Off-Market made simple</h2>
              <p className="ml-0.5 md:text-xl font-baskerville">
                An App built for Real Estate Agents to buy and sell off-market
                properties.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#f4e7a6]">
                <img src="/images/2.png" alt="Graduate TA Handbook" />
              </div>
              <div className="flex flex-row flex-wrap justify-between items-center  py-2">
                <div className="flex flex-row  ml-0.5 space-x-2">
                  {project2_tools.map((tool) => (
                    <BtnBorder
                      name={tool.name}
                      key={tool.name}
                      path={tool.iconPath}
                    />
                  ))}
                </div>
                <div className="flex-row flex mt-2 sm:mt-0 gap-2">
                  <a
                    href="https://github.com/dal-csed/Ta-handbook"
                    target="_blank"
                    className=" font-baskerville text-lg rounded-lg flex flex-row  items-center justify-between w-26 border-2 border-dashed dark:border-white border-black dark:bg-black/90 bg-white/90 px-2 py-1 font-semibold transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] dark:hover:shadow-[4px_4px_0px_white] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
                  >
                    GitHub <Github className="size-5" />
                  </a>

                  <a
                    href="https://csed-graduate-ta-handbook.cs.dal.ca/"
                    target="_blank"
                    className="font-baskerville text-lg rounded-lg flex flex-row  items-center justify-between w-21 border-2 border-dashed dark:border-white border-black dark:bg-black/90 bg-white/90 px-2 py-1 font-semibold transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] dark:hover:shadow-[4px_4px_0px_white] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
                  >
                    View <ExternalLink className="size-5" />
                  </a>
                </div>
              </div>
              <h2 className="font-baskerville">Graduate TA Handbook</h2>
            </div>

            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="/images/project3.jpeg" alt="80s Hair Oil" />
              </div>
              <div className="flex flex-row flex-wrap justify-between items-center py-2">
                <div className="flex flex-row  ml-0.5 space-x-2">
                  {project2_tools.map((tool) => (
                    <BtnBorder
                      name={tool.name}
                      key={tool.name}
                      path={tool.iconPath}
                    />
                  ))}
                </div>
                <div className="flex-row flex flex-wrap gap-2">
                  <a
                    href="https://github.com/Shaji-Mohammed/e-commerce"
                    target="_blank"
                    className="font-baskerville text-lg mt-2 sm:mt-0 rounded-lg flex flex-row items-center justify-between w-26 border-2 border-dashed dark:border-white border-black dark:bg-black/90 bg-white/90 px-2 py-1 font-semibold transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] dark:hover:shadow-[4px_4px_0px_white] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
                  >
                    GitHub <Github className="size-5" />
                  </a>

                  {/* <a
                    href="https://csed-graduate-ta-handbook.cs.dal.ca/"
                    target="_blank"
                    className="rounded-lg flex flex-row items-center justify-between w-20 border-2 border-dashed border-black bg-white/90 px-2 py-1 font-semibold text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
                  >
                    View <ExternalLink className="size-5" />
                  </a> */}
                </div>
              </div>
              <h2 className="font-baskerville">80s Hair Oil</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
