import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "./Navbar";
import BlitzImg from "../assets/Dresscue.jpeg";
import Banc from "../assets/Banc.jpeg";
import Roen from "../assets/Roen.jpeg";

const navItems = [
  "About",
  "Goal",
  "Research",
  "User Persona",
  "Journey Map",
  "Site Map",
  "Typography",
  "Low-Fidelity Wireframe",
];

const otherProjects = [
  {
    title: "BlitzEscape",
    category: "UI/UX Case study",
    img: BlitzImg,
    link: "/blitzescape",
    external: false,
  },
  {
    title: "OneBanc",
    category: "UX/UI Design",
    img: Banc,
    link: "https://www.behance.net/gallery/229794877/Fintech-App-Design-for-OneBanc-Technologies-pvt-ltd",
    external: true,
  },
  {
    title: "ROEN",
    category: "UI/UX Case study",
    img: Roen,
    link: "https://www.behance.net/gallery/228453481/ROEN-Web-design",
    external: true,
  },
];

const Dresscue = () => {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState("About");

  const handleNavClick = (item) => {
    setActiveNav(item);
    const el = document.getElementById(item.toLowerCase().replace(/\s+/g, "-"));
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-white min-h-screen font-myfontText">
      {/* Navbar */}
      <div className="bg-white pt-6 pb-4">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="w-full">
        <img
          src="/dresscue/Top hero dresscue.png"
          alt="Dresscue Hero Banner"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row max-w-[1280px] mx-auto px-5 md:px-10 py-10 md:py-16 gap-8 md:gap-16">
        {/* Left Sidebar */}
        <aside className="w-full md:w-[180px] shrink-0 md:sticky md:top-8 md:self-start">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-black mb-6 md:mb-8 hover:opacity-70 transition-opacity cursor-pointer"
          >
            <ArrowLeft size={18} />
            <span className="text-base font-medium">Back</span>
          </button>

          <nav className="flex flex-row md:flex-col gap-3 md:gap-2 overflow-x-auto pb-2 md:pb-0">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`text-left text-sm py-1 whitespace-nowrap transition-colors cursor-pointer ${
                  activeNav === item
                    ? "text-black font-medium"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          {/* ==================== ABOUT ==================== */}
          <div id="about" className="mb-14 md:mb-20">
            <p className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-3">
              DRESSCUE
            </p>
            <h1 className="text-3xl md:text-[46px] leading-[1.1] flapjack-font mb-10 md:mb-14">
              AI-Powered Styling
            </h1>

            <span className="inline-block border border-gray-300 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              About
            </span>

            <p className="text-xl md:text-[26px] leading-[1.5] mb-10 md:mb-14">
              The all-in-one solution for{" "}
              <span className="text-[#c9a69a]">effortless outfit planning</span>{" "}
              and wardrobe organization, offering personalized outfit ideas,
              AI-powered styling, and a fun drag-and-drop canvas to create
              stylish looks with ease.
            </p>

            {/* Problem / Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-14 md:mb-20">
              <div>
                <h3 className="text-xs font-bold tracking-[0.15em] uppercase mb-4">
                  PROBLEM
                </h3>
                <p className="text-sm leading-relaxed text-gray-700">
                  Many users feel they have "nothing to wear" despite full
                  closets, leading to wasted time, underused clothes, mismatched
                  outfits, and morning decision fatigue. They want a smart,
                  personalized way to style outfits quickly using what they
                  already own.
                </p>
              </div>
              <div>
                <h3 className="text-xs font-bold tracking-[0.15em] uppercase mb-4">
                  SOLUTION
                </h3>
                <p className="text-sm leading-relaxed text-gray-700">
                  A smart styling app that uses AI to suggest outfits based on
                  the user's existing wardrobe, style preferences, and
                  occasion—making daily dressing quick, personalized, and
                  stress-free.
                </p>
              </div>
            </div>
          </div>

          {/* ==================== GOAL ==================== */}
          <div id="goal" className="mb-14 md:mb-20 flex flex-col md:flex-row md:items-start gap-4 md:gap-10">
            <span className="inline-block border border-gray-300 rounded-full px-4 py-1.5 text-sm font-medium shrink-0">
              Goal
            </span>

            <p className="text-xl md:text-[26px] leading-[1.5]">
              Develop a user-friendly wardrobe management app that{" "}
              <span className="text-[#c9a69a]">simplifies</span> clothing
              organisation , planning ,and utilisation. With AI integration,
              this app will help users{" "}
              <span className="text-[#c9a69a]">maximise their Wardrobe's potential</span>.
            </p>
          </div>

          {/* ==================== RESEARCH ==================== */}
          <div id="research" className="mb-14 md:mb-20">
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-10 mb-10 md:mb-14">
              <span className="inline-block border border-gray-300 rounded-full px-4 py-1.5 text-sm font-medium shrink-0">
                Reasearch
              </span>

              <p className="text-xl md:text-[26px] leading-[1.5]">
                Understanding User{" "}
                <span className="text-[#c9a69a]">pain points</span> ,{" "}
                <span className="text-[#c9a69a]">behaviours</span> , and{" "}
                <span className="text-[#c9a69a]">desirable features</span>{" "}
                through User interviews to implement in my design .
              </p>
            </div>

            <img
              src="/dresscue/Research.png"
              alt="Dresscue Research"
              className="w-full rounded-lg"
            />
          </div>

          {/* ==================== USER PERSONA ==================== */}
          <div id="user-persona" className="mb-14 md:mb-20">
            <span className="inline-block border border-gray-300 rounded-full px-4 py-1.5 text-sm font-medium mb-8 md:mb-10">
              User Persona
            </span>
            <img
              src="/dresscue/user persona.png"
              alt="User Persona"
              className="w-full rounded-lg"
            />
          </div>

          {/* ==================== JOURNEY MAP ==================== */}
          <div id="journey-map" className="mb-14 md:mb-20">
            <span className="inline-block border border-gray-300 rounded-full px-4 py-1.5 text-sm font-medium mb-8 md:mb-10">
              Journey Map
            </span>
            <img
              src="/dresscue/journey mapping.png"
              alt="Journey Mapping"
              className="w-full rounded-lg"
            />
          </div>

          {/* ==================== SITE MAP ==================== */}
          <div id="site-map" className="mb-14 md:mb-20">
            <span className="inline-block border border-gray-300 rounded-full px-4 py-1.5 text-sm font-medium mb-8 md:mb-10">
              Site Map
            </span>
            <img
              src="/dresscue/site map.png"
              alt="Site Map"
              className="w-full rounded-lg"
            />
          </div>

          {/* ==================== TYPOGRAPHY ==================== */}
          <div id="typography" className="mb-14 md:mb-20">
            <span className="inline-block border border-gray-300 rounded-full px-4 py-1.5 text-sm font-medium mb-8 md:mb-10">
              Typography
            </span>
            <img
              src="/dresscue/typography.png"
              alt="Typography & Visual Direction"
              className="w-full rounded-lg"
            />
          </div>

          {/* ==================== LOW-FIDELITY WIREFRAME ==================== */}
          <div id="low-fidelity-wireframe" className="mb-14 md:mb-20">
            <span className="inline-block border border-gray-300 rounded-full px-4 py-1.5 text-sm font-medium mb-8 md:mb-10">
              Low-Fidelity Wireframe
            </span>
            <img
              src="/dresscue/low fidelity wireframes.png"
              alt="Low Fidelity Wireframes"
              className="w-full rounded-lg mb-10 md:mb-14"
            />

            <img
              src="/dresscue/Features.png"
              alt="Dresscue Features"
              className="w-full rounded-lg mb-10 md:mb-14"
            />

            {/* Thank You */}
            <img
              src="/dresscue/thankyou.png"
              alt="Thank You"
              className="w-full rounded-lg"
            />
          </div>
        </main>
      </div>

      {/* ==================== OTHER PROJECTS ==================== */}
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 pb-16 md:pb-24">
        <h2 className="text-xl md:text-2xl tracking-[0.08em] uppercase flapjack-font mb-8 md:mb-12">
          Other Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {otherProjects.map((project) =>
            project.external ? (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="rounded-2xl overflow-hidden bg-[#f5f3f0]">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs tracking-[0.12em] uppercase text-gray-500 mb-1">
                      {project.category}
                    </p>
                    <h3 className="text-lg font-semibold text-black">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </a>
            ) : (
              <button
                key={project.title}
                onClick={() => navigate(project.link)}
                className="group block text-left cursor-pointer"
              >
                <div className="rounded-2xl overflow-hidden bg-[#f5f3f0]">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs tracking-[0.12em] uppercase text-gray-500 mb-1">
                      {project.category}
                    </p>
                    <h3 className="text-lg font-semibold text-black">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </button>
            )
          )}
        </div>
      </div>

      {/* ==================== FOOTER CTA ==================== */}
      <div className="relative">
        <img
          src="/Footer (1).png"
          alt="Footer background"
          className="w-full block"
        />

        <div className="bg-[#F5CBCC] pb-12 md:pb-16 pt-4 text-center">
          <p className="text-xs tracking-[0.2em] uppercase font-semibold mb-4">
            Let's Connect
          </p>
          <div className="flex justify-center gap-4 mb-6">
            <a
              href="https://www.behance.net/prachimadhukar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-md bg-black flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/prachimadhukar/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-md bg-black flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>

          <a
            href="https://www.behance.net/prachimadhukar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold tracking-[0.15em] uppercase text-[#8b2020] hover:text-[#6b1515] transition-colors underline underline-offset-4"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dresscue;
