import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const navLinks = ["about me", "skills", "project","education"];
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);
  return (
    <div className="fixed top-0 left-0 right-0 w-full px-4 pt-4 z-50 bg-bgColor">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <span className="text-whiteText text-2xl p-4">Layzo.</span>
        <ul className="hidden md:flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.replace(/\s+/g, "-")}
              smooth={true}
              duration={500}
              offset={-150}
              spy={true}
              activeClass="active-link"
              className="uppercase text-darkGray font-medium tracking-wider transition-colors cursor-pointer hover:text-whiteText"
            >
              {link}
            </Link>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="hidden md:block py-2.5 px-5 text-md font-medium text-darkerGray bg-bgWhite rounded-full hover:bg-bgLightestGray-100"
          >
            Download CV
          </button>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none text-whiteText"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="bg-bgColor z-40 top-20 fixed inset-0 p-4">
          <ul className="flex flex-col justify-between gap-4">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.replace(/\s+/g, "-")}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                activeClass="active-link"
                onClick={() => setIsOpen(false)}
                className="uppercase text-darkGray text-base md:text-md font-medium tracking-wider hover:text-whiteText transition-colors cursor-pointer py-2 border-b border-gray-600"
              >
                {link}
              </Link>
            ))}
          </ul>

          <button
            type="button"
            className="mt-4 py-2.5 px-5 text-md font-medium text-darkerGray bg-bgWhite rounded-full hover:bg-bgLightestGray-100"
          >
            Download CV
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
