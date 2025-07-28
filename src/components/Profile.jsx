import React from "react";
import CopyMail from "./CopyMail";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-scroll";
const socialMedia = [
  {
    platform: "GitHub",
    location: "https:GitHub",
    logo: <Github className="hover:text-whiteText transition-colors" size={24} />,
  },
  {
    platform: "Twitter",
    location: "https:twitter",
    logo: <Twitter className="hover:text-whiteText transition-colors" size={24} />,
  },
  {
    platform: "LinkedIn",
    location: "https:instagram",
    logo: <Linkedin className="hover:text-whiteText transition-colors" size={24} />,
  },
  {
    platform: "Instagram",
    location: "https:instagram",
    logo: (
      <Instagram className="hover:text-whiteText transition-colors" size={24} />
    ),
  },
];
const Profile = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bgColor px-4 relative">
      <div className="flex flex-col gap-10 items-center text-center max-w-3xl w-full">
        <h1 className="uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-whiteText tracking-tight font-bold leading-tight">
          Mohammed Sadiq
        </h1>
        <div className="flex items-center justify-center gap-4 w-full">
          <div className="h-[1px] flex-1 bg-bgGray700" />
          <span className="text-sm sm:text-base md:text-lg text-grayText uppercase tracking-widest font-medium whitespace-nowrap">
            Front End Engineer
          </span>
          <div className="h-[1px] flex-1 bg-bgGray700" />
        </div>

        <p className="font-inter text-base sm:text-lg text-grayText leading-relaxed max-w-2xl">
          Driven by a deep curiosity to craft
          <span className="text-whiteText font-semibold">
            {" "}
            visually engaging{" "}
          </span>{" "}
          and
          <span className="text-whiteText font-semibold">
            {" "}
            intuitive user experiences{" "}
          </span>{" "}
          through
          <span className="text-whiteText font-semibold">
            {" "}
            modern frontend technologies
          </span>
          .
        </p>

        <CopyMail />
        <div className="text-darkGray flex items-center gap-8">
          {socialMedia.map((item, index) => (
            <a href={item.location} title={item.platform} key={index}>
              {item.logo}
            </a>
          ))}
        </div>
        <Link
          type="button"
          className="cursor-pointer text-whiteText border border-white hover:bg-bgWhite hover:text-black transition-all duration-300 font-medium rounded-full text-sm px-6 py-2.5 shadow-lg tracking-wide"
          to="about-me"
          smooth={true}
          duration={500}
          offset={-120}
          spy={true}
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Profile;
