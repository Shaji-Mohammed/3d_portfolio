import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

const Footer = () => {
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
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="socials">
          {socialIcons.map((item) => {
            const IconComponent = item.icon;
            return (
              <div className="flex flex-row items-center space-x-2">
                <a
                  href={item.url}
                  key={item.url}
                  className="icon bg-white"
                  {...(item.name === "Download Resume"
                    ? { download: "Shaji_resume.pdf" }
                    : { target: "_blank", rel: "noopener noreferrer" })}
                >
                  <IconComponent className="size-6 text-gray-800" />
                </a>
                <p className="font-semibold">{item.name}</p>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-center font-baskerville">
            &copy; {new Date().getFullYear()} Shaji Mohammed. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
