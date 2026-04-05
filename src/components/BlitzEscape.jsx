import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "./Navbar";
import Dresscue from "../assets/Dresscue.jpeg";
import Banc from "../assets/Banc.jpeg";
import Roen from "../assets/Roen.jpeg";

const navItems = [
  "Overview",
  "Research",
  "Planning",
  "AI Integration",
  "Design Decisions",
  "Final Designs",
];

const otherProjects = [
  {
    title: "Dresscue",
    category: "UI/UX Case study",
    img: Dresscue,
    link: "https://www.behance.net/gallery/228510137/Dresscue-smart-wardrobe-case-study",
  },
  {
    title: "OneBanc",
    category: "UX/UI Design",
    img: Banc,
    link: "https://www.behance.net/gallery/229794877/Fintech-App-Design-for-OneBanc-Technologies-pvt-ltd",
  },
  {
    title: "ROEN",
    category: "UI/UX Case study",
    img: Roen,
    link: "https://www.behance.net/gallery/228453481/ROEN-Web-design",
  },
];

const BlitzEscape = () => {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState("Overview");

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
          src="/BlitzEscape/blitzescape hero.png"
          alt="BlitzEscape Hero Banner"
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
          {/* ==================== OVERVIEW ==================== */}
          <div id="overview" className="mb-14 md:mb-20">
            <p className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-3">
              BLITZ ESCAPE
            </p>
            <h1 className="text-3xl md:text-[46px] leading-[1.1] flapjack-font mb-8 md:mb-10">
              AI-Powered Trip Planning
              <br />
              Platform
            </h1>

            <h2 className="text-sm font-bold tracking-[0.15em] uppercase mb-6">
              Overview
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
              <p className="text-[13px] leading-relaxed text-gray-700">
                BlitzEscape is an AI-powered travel planning platform that
                intelligently curates personalized trip itineraries. The platform
                leverages multi-agent AI systems to provide real-time
                recommendations tailored to user preferences.
              </p>
              <p className="text-[13px] leading-relaxed text-gray-700">
                This project involved understanding traveller pain points,
                competitive landscape analysis, and designing an intuitive
                experience that simplifies the traditionally complex trip
                planning process.
              </p>
              <p className="text-[13px] leading-relaxed text-gray-700">
                My role within this project was the user experience and
                interface designer, responsible for end-to-end design from
                research through to final high-fidelity screens and prototype
                delivery.
              </p>
            </div>

            {/* Roles / Team / Tools */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
              <div>
                <h3 className="text-xs font-bold tracking-[0.12em] uppercase text-gray-500 mb-3">
                  Roles
                </h3>
                <ul className="text-[13px] leading-relaxed text-gray-700 space-y-1">
                  <li>User Experience (UX) Design</li>
                  <li>User Interface (UI) Design</li>
                  <li>UX Research</li>
                  <li>Interaction Design</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-bold tracking-[0.12em] uppercase text-gray-500 mb-3">
                  Team
                </h3>
                <ul className="text-[13px] leading-relaxed text-gray-700 space-y-1">
                  <li>Prachi Madhukar</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-bold tracking-[0.12em] uppercase text-gray-500 mb-3">
                  Tools
                </h3>
                <ul className="text-[13px] leading-relaxed text-gray-700 space-y-1">
                  <li>Figma</li>
                  <li>Adobe Photoshop</li>
                </ul>
              </div>
            </div>

            {/* Impact at a Glance */}
            <h2 className="text-sm font-bold tracking-[0.15em] uppercase mb-6">
              Impact at a Glance
            </h2>
            <p className="text-[13px] leading-relaxed text-gray-700 mb-8">
              An AI-powered trip planning platform that transforms how users
              discover and organize travel experiences.
            </p>

            {/* Overview Image */}
            <img
              src="/BlitzEscape/overview section.png"
              alt="BlitzEscape Overview"
              className="w-full rounded-lg"
            />
          </div>

          {/* ==================== RESEARCH ==================== */}
          <div id="research" className="mb-14 md:mb-20">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-10 md:mb-12">
              <div className="shrink-0">
                <p className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-2">
                  Research
                </p>
                <h2 className="text-xl md:text-2xl tracking-[0.08em] uppercase flapjack-font leading-tight">
                  Understanding User
                  <br />
                  Behavior & Pain Points
                  <br />
                  in Travel Planning
                </h2>
              </div>
              <p className="text-[13px] leading-relaxed text-gray-700 md:max-w-[45%] newsreader-font-sleek italic text-base md:text-lg">
                "Planning a trip shouldn't feel like a full-time job."
              </p>
            </div>

            {/* Key Pain Points Card */}
            <div className="bg-[#f5f3f0] rounded-2xl overflow-hidden mb-8">
              <div className="flex flex-col md:flex-row">
                <div className="p-6 md:p-10 md:w-[45%]">
                  <h3 className="text-xl md:text-2xl font-semibold leading-tight mb-6">
                    Key Pain Points
                  </h3>
                  <ul className="text-[13px] leading-relaxed text-gray-700 space-y-2 list-disc pl-5">
                    <li>Overwhelming number of choices across platforms</li>
                    <li>Constant switching between tabs and tools</li>
                    <li>Time-intensive comparisons and research</li>
                    <li>Lack of personalized recommendations</li>
                    <li>Uncertainty around pricing and booking timing</li>
                    <li>Limited visibility into sustainable travel options</li>
                  </ul>
                </div>
                <div className="md:w-[55%] p-4 md:p-6">
                  <img
                    src="/BlitzEscape/key pain points.png"
                    alt="Key Pain Points"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Behavioral Insights Card */}
            <div className="bg-[#f5f3f0] rounded-2xl overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="p-6 md:p-10 md:w-[45%]">
                  <h3 className="text-xl md:text-2xl font-semibold leading-tight mb-6">
                    Behavioral Insights
                  </h3>
                  <ul className="text-[13px] leading-relaxed text-gray-700 space-y-2 list-disc pl-5">
                    <li>Users typically use 4–6 platforms before booking</li>
                    <li>High reliance on reviews but low trust in recommendations</li>
                    <li>Preference for guided experiences over manual search</li>
                    <li>Decision fatigue often leads to delayed or suboptimal bookings</li>
                  </ul>
                </div>
                <div className="md:w-[55%] p-4 md:p-6">
                  <img
                    src="/BlitzEscape/behavorial insights.png"
                    alt="Behavioral Insights"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ==================== PLANNING ==================== */}
          <div id="planning" className="mb-14 md:mb-20">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-10 md:mb-12">
              <h2 className="text-xl md:text-2xl tracking-[0.08em] uppercase flapjack-font leading-tight shrink-0">
                Planning Our
                <br />
                Approach.
              </h2>
              <p className="text-[13px] leading-relaxed text-gray-700 md:max-w-[55%]">
                Before diving into design, we established a clear framework to
                guide our process — prioritizing user needs, simplifying
                journeys, and building for scale.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12 md:mb-16">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-sm text-gray-500">
                    01
                  </span>
                </div>
                <h3 className="text-base font-semibold mb-2">
                  Information-First Experience
                </h3>
                <p className="text-[13px] leading-relaxed text-gray-600">
                  Prioritize surfacing the most relevant travel information
                  upfront, reducing cognitive load and helping users make
                  decisions faster.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-sm text-gray-500">
                    02
                  </span>
                </div>
                <h3 className="text-base font-semibold mb-2">
                  Explore & Simplify User Journey
                </h3>
                <p className="text-[13px] leading-relaxed text-gray-600">
                  Map and streamline the end-to-end user journey from
                  destination discovery to itinerary creation, eliminating
                  unnecessary friction points.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-sm text-gray-500">
                    03
                  </span>
                </div>
                <h3 className="text-base font-semibold mb-2">
                  Touch-Driven & Scalable Design
                </h3>
                <p className="text-[13px] leading-relaxed text-gray-600">
                  Design responsive, touch-optimized interfaces that scale
                  across devices while maintaining consistency and usability.
                </p>
              </div>
            </div>

            {/* Web & Navigation Content */}
            <div className="mb-14 md:mb-20">
              <p className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-2">
                Discovery
              </p>
              <div className="flex items-center gap-3 mb-8 md:mb-10">
                <span className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-sm text-gray-500">
                  01
                </span>
                <h2 className="text-lg md:text-xl tracking-[0.08em] uppercase flapjack-font">
                  Web & Navigation Content
                </h2>
              </div>

              <img
                src="/BlitzEscape/web and navigation content.png"
                alt="Web & Navigation Content"
                className="w-full rounded-lg"
              />
            </div>
          </div>

          {/* ==================== AI INTEGRATION ==================== */}
          <div id="ai-integration" className="mb-14 md:mb-20">
            <p className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-2">
              AI Integration
            </p>
            <h2 className="text-lg md:text-xl tracking-[0.08em] uppercase flapjack-font mb-6">
              AI Integration
            </h2>

            <blockquote className="text-center text-lg md:text-xl font-light newsreader-font-sleek italic text-gray-700 max-w-2xl mx-auto mb-8">
              "What if travel planning worked like a team of experts — in
              seconds?"
            </blockquote>
            <p className="text-[13px] leading-relaxed text-gray-700 text-center max-w-2xl mx-auto mb-10">
              BlitzEscape is powered by a multi-agent AI system, where each agent
              specializes in a specific task — from finding the best flights to
              curating local experiences.
            </p>

            <img
              src="/BlitzEscape/ai integration.png"
              alt="AI Integration"
              className="w-full rounded-lg mb-12 md:mb-16"
            />

            {/* Competitive Analysis */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-8">
              <h3 className="text-base font-semibold shrink-0">
                Competitive Analysis
              </h3>
              <p className="text-[13px] leading-relaxed text-gray-700 md:max-w-[55%]">
                We analyzed leading travel platforms to understand their
                strengths and gaps — identifying opportunities for BlitzEscape
                to deliver a smarter, more personalized experience.
              </p>
            </div>

            <img
              src="/BlitzEscape/competetive analysis.png"
              alt="Competitive Analysis"
              className="w-full rounded-lg"
            />
          </div>

          {/* ==================== DESIGN DECISIONS ==================== */}
          <div id="design-decisions" className="mb-14 md:mb-20">
            <p className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-2">
              Design Decisions
            </p>
            <h2 className="text-xl md:text-2xl tracking-[0.08em] uppercase flapjack-font mb-8 md:mb-10">
              Visual Direction
            </h2>

            <img
              src="/BlitzEscape/visual direction.png"
              alt="Visual Direction"
              className="w-full rounded-lg mb-12 md:mb-16"
            />

            {/* Wireframes to Mid-Fis */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-8">
              <h2 className="text-lg md:text-xl tracking-[0.08em] uppercase flapjack-font leading-tight shrink-0">
                Wireframes to
                <br />
                Mid-Fis
              </h2>
              <p className="text-[13px] leading-relaxed text-gray-700 md:max-w-[55%]">
                We started with low-fidelity wireframes to explore key interaction patterns, iterating
                towards mid-fidelity screens that validated layout and hierarchy decisions before
                moving into high-fidelity visual design.
              </p>
            </div>

            <img
              src="/BlitzEscape/wireframes to midfis.png"
              alt="Wireframes to Mid-Fis"
              className="w-full rounded-lg"
            />
          </div>

          {/* ==================== FINAL DESIGNS ==================== */}
          <div id="final-designs" className="mb-14 md:mb-20">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-10 md:mb-12">
              <h2 className="text-xl md:text-2xl tracking-[0.08em] uppercase flapjack-font shrink-0">
                Final Designs
              </h2>
              <p className="text-[13px] leading-relaxed text-gray-700 md:max-w-[55%]">
                The final high-fidelity designs bring together AI-powered
                functionality with a clean, intuitive interface that makes trip
                planning effortless and enjoyable.
              </p>
            </div>

            <div className="space-y-8">
              <img
                src="/BlitzEscape/final designs 1.png"
                alt="BlitzEscape Final Designs"
                className="w-full rounded-lg"
              />
              <video
                className="w-full rounded-lg"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/BlitzEscape/blitzescape-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </main>
      </div>

      {/* ==================== OTHER PROJECTS ==================== */}
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 pb-16 md:pb-24">
        <h2 className="text-xl md:text-2xl tracking-[0.08em] uppercase flapjack-font mb-8 md:mb-12">
          Other Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {otherProjects.map((project) => (
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
          ))}
        </div>
      </div>

      {/* ==================== FOOTER CTA ==================== */}
      <div className="relative">
        {/* Footer background image */}
        <img
          src="/Footer (1).png"
          alt="Footer background"
          className="w-full block"
        />

        {/* Overlay content at bottom of image */}
        <div className="bg-[#F5CBCC] pb-12 md:pb-16 pt-4 text-center">
          {/* Let's Connect + Icons */}
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

          {/* Resume link */}
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

export default BlitzEscape;
