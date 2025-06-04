/* eslint-disable react/prop-types */
import { RevealOnScroll } from "../RevealOnScroll";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaGoogle,
  FaDownload,
} from "react-icons/fa";

export const About = () => {
  const frontendSkills = [
    "HTML5",
    "JavaScript",
    "React",
    "TailwindCSS",
    "Bootstrap",
    "material-UI",
    "CSS3",
    "Figma",
    "Chrome DevTools",
    "XML",
  ];

  
  const backendSkills = [
    "Java",
    "C#",
    "Kotlin",
    "SQL",
    "MySQL",
    "Firebase",
    "OAuth",
    "Node.js",
    "Python",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div
            className="glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
              <img
                src="https://i.imgur.com/haFmgkC.jpeg"
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-lg"
              />
              <p className="text-gray-300 text-center md:text-left max-w-md">
                A passionate developer blending design and function to build
                smooth, intuitive digital experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

           <div className="mt-6 text-center">
            <a
              href="https://raw.githubusercontent.com/0notRon/MyPortfolio/main/portfolio-escobar/public/Hezrone%20Escobar%20-%20Resume.pdf"
              download
              className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-500 font-semibold py-2 px-4 rounded-full
                        transition-transform duration-200 ease-in-out hover:scale-105"
            >
              <FaDownload className="text-lg" />
              Download CV
            </a>
          </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div
              className="glass p-6 rounded-xl border border-white/10 
                  hover:-translate-y-1 hover:border-blue-500/30
                  hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
                  transition-all group"
            >
              <h3
                className="text-xl font-bold mb-4
                  group-hover:bg-gradient-to-r group-hover:from-blue-500
                  group-hover:to-cyan-400 group-hover:bg-clip-text
                  group-hover:text-transparent transition-all duration-300"
              >
                Education
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>
                  <strong>College</strong>
                  <div className="text-sm text-gray-400">
                    STI College Pasay-EDSA (currently enrolled)
                  </div>
                </li>
                <li>
                  <strong>Senior High School</strong>
                  <div className="text-sm text-gray-400">La Patria College</div>
                </li>
                <li>
                  <strong>Junior High School</strong>
                  <div className="text-sm text-gray-400">
                    General Emilio Aguinaldo National High School
                  </div>
                </li>
                <li>
                  <strong>Junior High School</strong>
                  <div className="text-sm text-gray-400">La Salette of Ramon</div>
                </li>
                <li>
                  <strong>Elementary</strong>
                  <div className="text-sm text-gray-400">
                    General Aguinaldo Elementary School
                  </div>
                </li>
              </ul>
            </div>

            <div
              className="glass p-6 rounded-xl border border-white/10 
                  hover:-translate-y-1 hover:border-blue-500/30
                  hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
                  transition-all group"
            >
              <h3
                className="text-xl font-bold mb-4
                  group-hover:bg-gradient-to-r group-hover:from-blue-500 
                  group-hover:to-cyan-400 group-hover:bg-clip-text 
                  group-hover:text-transparent transition-all duration-300"
              >
                Work Experience
              </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">Digital Marketing Assistant</h4>
                  <p>Ocampo & Lana Associates</p>
                </div>
                <div>
                  <h4 className="font-semibold">Multimedia Content Creator</h4>
                  <p>KLK 8 in 1 Brown Rice Coffee</p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Digital Marketing & Web Coordinator
                  </h4>
                  <p>RMEAZ Foods</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex justify-center gap-6 text-2xl text-gray-400">
            <a
              href="https://www.facebook.com/hezrone.ocampo1003/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
              title="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/_notsoron/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
              title="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/hezrone-escobar/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 transition"
              title="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/0notRon"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://g.dev/Hezrone"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition"
              title="Google Developers"
            >
              <FaGoogle />
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
