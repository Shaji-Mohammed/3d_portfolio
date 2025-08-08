import React from "react";
import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="socials">
          {socialImgs.map((img) => (
            <a
              href={img.url}
              key={img.url}
              className="icon bg-white"
              {...(img.name === "Download Resume"
                ? { download: true }
                : { target: "_blank", rel: "noopener noreferrer" })}
            >
              <img
                src={img.imgPath}
                alt={img.name || "icon"}
                className="size-6"
              />
            </a>
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-center">
            &copy; {new Date().getFullYear()} Shaji Mohammed. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
