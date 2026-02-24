import ContactExp from "../components/Models/ContactExp";
import { FaGithub, FaLinkedin, FaDownload, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const socialIcons = [
    {
      name: "Github",
      icon: FaGithub,
      url: "https://github.com/Shaji-Mohammed",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/shaji-mohd/",
    },
    {
      name: "Resume",
      icon: FaDownload,
      url: "/Resume_Shaji.pdf",
    },
    {
      name: "Email Me",
      icon: FaEnvelope,
      url: "mailto:mshajisufiyan@gmail.com",
    },
  ];

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <p className="justify-center items-center text-3xl md:text-4xl font-baskerville mb-14 text-center">
          Get In Touch With Me
        </p>
        <div className="my-10 flex sm:flex-row flex-col">
          <div className="w-full max-w-md mx-auto">
            <p className="font-baskerville text-2xl mb-4">
              Feel free to reach out to me!{" "}
            </p>
            <p className="font-baskerville text-2xl">
              I'm always open to discussing new projects, creative ideas, or
              opportunities.
            </p>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {socialIcons.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.name}
                    className="flex md:flex-col items-center flex-row"
                  >
                    <a
                      href={item.url}
                      key={item.url}
                      className="rounded-lg flex flex-row text-lg items-center my-6 justify-between w-32 h-12 border-2 border-dashed dark:border-white border-black dark:bg-black/90 bg-white/90 px-2 py-1 font-semibold transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] dark:hover:shadow-[4px_4px_0px_white] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
                      {...(item.name === "Download Resume"
                        ? { download: "Shaji_resume.pdf" }
                        : { target: "_blank", rel: "noopener noreferrer" })}
                    >
                      {item.name}
                      <IconComponent className="size-5" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="min-h-96 sm:w-[50%] w-[80vw] h-[50vh]">
            <div className=" h-full bg-[#cd7c2e] hover: cursor-grab rounded-3xl overflow-hidden">
              <ContactExp />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
