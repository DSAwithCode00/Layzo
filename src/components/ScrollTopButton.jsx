import React from "react";
import { useState, useEffect } from "react";
const ScrollTopButton = () => {
  const [visibleButton, setVisibleButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setVisibleButton(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      {visibleButton && (
        <button
          onClick={scrollTop}
          className="text-3xl fixed bottom-8 right-8 z-50 hover:scale-110 transition-all duration-300 "
          aria-label="Scroll to Top"
        >
          🚀
        </button>
      )}
    </div>
  );
};

export default ScrollTopButton;
