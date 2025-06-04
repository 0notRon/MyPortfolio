/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
        transition-all duration-300 ease-in-out
        ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}
      `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {["home", "about", "projects", "contact"].map((section, index) => (
        <a
          key={section}
          href={`#${section}`}
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-white my-4 transform transition-all duration-300
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }
            hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 hover:bg-clip-text hover:text-transparent
          `}
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </a>
      ))}
    </div>
  );
};
