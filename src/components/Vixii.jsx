import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Dresscue from "../assets/Dresscue.jpeg";
import Banc from "../assets/Banc.jpeg";
import Roen from "../assets/Roen.jpeg";

const navItems = [
  "Overview",
  "Research",
  "Planning",
  "Sitemap",
  "Design Decisions",
  "Final Designs",
  "Brand Marketing",
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

const Vixii = () => {
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
      {/* Hero Section */}
      <div className="w-full">
        <img
          src="/Rectangle 18 (1).png"
          alt="VIXII Hero Banner"
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
              VIXII
            </p>
            <h1 className="text-3xl md:text-[46px] leading-[1.1] flapjack-font mb-8 md:mb-10">
              Reimagining the brand-VIXII
            </h1>

            <h2 className="text-sm font-bold tracking-[0.15em] uppercase mb-6">
              Overview
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
              <p className="text-[13px] leading-relaxed text-gray-700">
                VIXII is a London-based lab-grown uncut diamond brand that
                required a complete revamp of its digital presence. To improve
                its initial launch experience, VIXII's website needed to be
                redesigned.
              </p>
              <p className="text-[13px] leading-relaxed text-gray-700">
                This project involved understanding the market, target audience,
                and positioning while also supporting the launch of new product
                lines.
              </p>
              <p className="text-[13px] leading-relaxed text-gray-700">
                My role within this project was the user interface designer for
                VIXII's screens and prototype, along with contributing to the
                updated design system. I also worked closely with developers to
                ensure smooth and efficient design handoffs.
              </p>
            </div>

            {/* Roles / Team / Tools */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
              <div>
                <h3 className="text-xs font-bold tracking-[0.12em] uppercase text-gray-500 mb-3">
                  Roles
                </h3>
                <ul className="text-[13px] leading-relaxed text-gray-700 space-y-1">
                  <li>User Interface (UI) Design</li>
                  <li>Visual Design</li>
                  <li>Brand Marketing</li>
                  <li>UX Strategy & Experience Design</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-bold tracking-[0.12em] uppercase text-gray-500 mb-3">
                  Team
                </h3>
                <ul className="text-[13px] leading-relaxed text-gray-700 space-y-1">
                  <li>Abhishek Pandit</li>
                  <li>Kushagra Kumar</li>
                  <li>Jane Hebden</li>
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

            {/* Overview Image - Frame 2 */}
            <img
              src="/Frame 2.png"
              alt="VIXII Overview"
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
                  VIXII's
                  <br />
                  Current Site.
                </h2>
              </div>
              <p className="text-[13px] leading-relaxed text-gray-700 md:max-w-[55%]">
                VIXII's website did not fully reflect its in-person experience.
                To identify the gaps, we analyzed customer and user feedback
                from the previous launch, which helped uncover key issues and
                areas for improvement.
              </p>
            </div>

            {/* Unorganized E-Commerce Card - Frame 3 */}
            <div className="bg-[#f5f3f0] rounded-2xl overflow-hidden mb-8">
              <div className="flex flex-col md:flex-row">
                <div className="p-6 md:p-10 md:w-[40%]">
                  <div className="w-3 h-3 rounded-full bg-[#e8a0a0] mb-4"></div>
                  <h3 className="text-xl md:text-2xl font-semibold leading-tight mb-4">
                    Unorganized
                    <br />
                    E-Commerce
                  </h3>
                  <p className="text-[13px] leading-relaxed text-gray-600">
                    Without proper categorization, customers felt uncertain by
                    the experience.
                  </p>
                </div>
                <div className="md:w-[60%] p-4 md:p-6">
                  <img
                    src="/Frame 3.png"
                    alt="Unorganized E-Commerce Analysis"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Unreflective Branding Card - Frame 8 */}
            <div className="bg-[#f5f3f0] rounded-2xl overflow-hidden mb-8">
              <div className="flex flex-col md:flex-row">
                <div className="p-6 md:p-10 md:w-[40%]">
                  <div className="w-3 h-3 rounded-full bg-[#e8a0a0] mb-4"></div>
                  <h3 className="text-xl md:text-2xl font-semibold leading-tight mb-4">
                    Unreflective
                    <br />
                    Branding
                  </h3>
                  <p className="text-[13px] leading-relaxed text-gray-600">
                    VIXII's in-person experience brings a vibrance that the
                    current website did not reflect.
                  </p>
                </div>
                <div className="md:w-[60%] p-4 md:p-6">
                  <img
                    src="/Frame 8.png"
                    alt="Unreflective Branding Analysis"
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
                To address the identified gaps and improve the overall
                experience, we structured our approach across three key areas
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-sm text-gray-500">
                    01
                  </span>
                </div>
                <h3 className="text-base font-semibold mb-2">
                  Web & Navigation Content
                </h3>
                <p className="text-[13px] leading-relaxed text-gray-600">
                  We focused on building a clear and intuitive site structure by
                  refining the sitemap, ensuring users can navigate seamlessly
                  and find information with ease.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-sm text-gray-500">
                    02
                  </span>
                </div>
                <h3 className="text-base font-semibold mb-2">
                  E-Commerce Experience
                </h3>
                <p className="text-[13px] leading-relaxed text-gray-600">
                  We analyzed the existing user journey alongside competitor
                  platforms to identify opportunities for improvement, enhancing
                  usability, product discovery, and the overall shopping
                  experience.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-sm text-gray-500">
                    03
                  </span>
                </div>
                <h3 className="text-base font-semibold mb-2">
                  Visual Branding
                </h3>
                <p className="text-[13px] leading-relaxed text-gray-600">
                  We revisited the brand's visual identity to create a cohesive
                  and consistent look, aligning the digital presence with
                  VIXII's in-person experience.
                </p>
              </div>
            </div>
          </div>

          {/* ==================== SITEMAP (Discovery 01) - Frame 5 ==================== */}
          <div id="sitemap" className="mb-14 md:mb-20">
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

            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-8">
              <h3 className="text-base font-semibold shrink-0">Sitemap</h3>
              <p className="text-[13px] leading-relaxed text-gray-700 md:max-w-[55%]">
                Developed a clear and structured sitemap to improve navigation
                and information flow.
              </p>
            </div>

            <img
              src="/Frame 5.png"
              alt="VIXII Sitemap"
              className="w-full rounded-lg"
            />
          </div>

          {/* ==================== E-COMMERCE EXPERIENCE (02) - Frame 6 ==================== */}
          <div className="mb-14 md:mb-20">
            <div className="flex items-center gap-3 mb-8 md:mb-10">
              <span className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-sm text-gray-500">
                02
              </span>
              <h2 className="text-lg md:text-xl tracking-[0.08em] uppercase flapjack-font">
                E-Commerce
                <br />
                Experience
              </h2>
            </div>

            <h3 className="text-base font-semibold mb-6">Initial Analysis</h3>
            <div className="flex flex-col md:flex-row gap-8 md:gap-10 mb-12 md:mb-16">
              <div className="w-full md:w-[45%] space-y-5">
                <div className="flex gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#e8a0a0] flex items-center justify-center text-white text-xs font-semibold shrink-0">
                    1
                  </span>
                  <p className="text-[13px] leading-relaxed text-gray-700">
                    Overuse of the signature color palette led to a visually
                    saturated and overwhelming brand experience.
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#e8a0a0] flex items-center justify-center text-white text-xs font-semibold shrink-0">
                    2
                  </span>
                  <p className="text-[13px] leading-relaxed text-gray-700">
                    The design did not align with UK market standards and user
                    expectations
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#e8a0a0] flex items-center justify-center text-white text-xs font-semibold shrink-0">
                    3
                  </span>
                  <p className="text-[13px] leading-relaxed text-gray-700">
                    Unclear categorisation and navigation created friction in
                    product discovery and purchase flow
                  </p>
                </div>
              </div>
              <div className="w-full md:w-[55%]">
                <img
                  src="/Frame 6.png"
                  alt="E-Commerce Initial Analysis"
                  className="w-full rounded-lg"
                />
              </div>
            </div>

            {/* Competitive Analysis - Frame 7 */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-8">
              <h3 className="text-base font-semibold shrink-0">
                Competitive Analysis
              </h3>
              <p className="text-[13px] leading-relaxed text-gray-700 md:max-w-[55%]">
                Analyzed competitor platforms within the UK market to identify
                trends, gaps, and opportunities for differentiation.
              </p>
            </div>

            <img
              src="/Frame 7.png"
              alt="Competitive Analysis"
              className="w-full rounded-lg"
            />
          </div>

          {/* ==================== DESIGN DECISIONS (03) ==================== */}
          <div id="design-decisions" className="mb-14 md:mb-20">
            <p className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-2">
              Design Decisions
            </p>
            <div className="flex items-center gap-3 mb-8 md:mb-10">
              <span className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-sm text-gray-500">
                03
              </span>
              <h2 className="text-lg md:text-xl tracking-[0.08em] uppercase flapjack-font">
                Visual & Content
                <br />
                Branding
              </h2>
            </div>

            {/* Mood-boards - Frame 9 */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-8">
              <h3 className="text-base font-semibold shrink-0">Mood-boards</h3>
              <p className="text-[13px] leading-relaxed text-gray-700 md:max-w-[55%]">
                Developed a moodboard to establish a cohesive visual language
                and design inspiration.
              </p>
            </div>

            <img
              src="/Frame 9.png"
              alt="VIXII Visual Direction Board"
              className="w-full rounded-lg mb-12 md:mb-16"
            />

            {/* Design System - Frame 10 */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-8">
              <h3 className="text-base font-semibold shrink-0">
                Design System
              </h3>
              <p className="text-[13px] leading-relaxed text-gray-700 md:max-w-[55%]">
                Designed a system that combines contemporary trends with
                Indian-inspired elements, aligning with both the audience and
                product origin.
              </p>
            </div>

            <img
              src="/Frame 10.png"
              alt="VIXII Design System"
              className="w-full rounded-lg mb-12 md:mb-16"
            />

            {/* Wireframes to Mid-Fis - Frame 11 */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-8">
              <h2 className="text-lg md:text-xl tracking-[0.08em] uppercase flapjack-font leading-tight shrink-0">
                Wireframes to
                <br />
                Mid-Fis
              </h2>
              <p className="text-[13px] leading-relaxed text-gray-700 md:max-w-[55%]">
                Developed wireframes to map out user journeys and define the
                core structure of the experience.
              </p>
            </div>

            <img
              src="/Frame 11.png"
              alt="VIXII Wireframes"
              className="w-full rounded-lg"
            />
          </div>

          {/* ==================== FINAL DESIGNS - Frame 12, 13, 14 ==================== */}
          <div id="final-designs" className="mb-14 md:mb-20">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-10 md:mb-12">
              <h2 className="text-xl md:text-2xl tracking-[0.08em] uppercase flapjack-font shrink-0">
                Final Designs
              </h2>
              <p className="text-[13px] leading-relaxed text-gray-700 md:max-w-[55%]">
                The final designs were crafted to ensure a balance between
                functionality and visual appeal, creating a consistent and
                engaging experience.
              </p>
            </div>

            <div className="space-y-8">
              <img
                src="/Frame 12.png"
                alt="VIXII Final Designs - Homepage"
                className="w-full rounded-lg"
              />
              <img
                src="/Frame 13.png"
                alt="VIXII Final Designs - Product Pages"
                className="w-full rounded-lg"
              />
              <img
                src="/Frame 14.png"
                alt="VIXII Final Designs - Mobile"
                className="w-full rounded-lg"
              />
            </div>
          </div>

          {/* ==================== BRAND MARKETING / SOCIAL BRANDING ==================== */}
          <div id="brand-marketing" className="mb-14 md:mb-20">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-10 md:mb-12">
              <div className="shrink-0">
                <p className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-2">
                  Social Branding
                </p>
                <h2 className="text-xl md:text-2xl tracking-[0.08em] uppercase flapjack-font leading-tight">
                  Making VIXII
                  <br />
                  Feel More VIXII.
                </h2>
              </div>
              <p className="text-[13px] leading-relaxed text-gray-700 md:max-w-[55%]">
                final product was brought to customers for review. result was
                an overwhelming positive response!
              </p>
            </div>
<div className="space-y-8">
              <img
                src="/Frame 14.png"
                alt="VIXII Final Designs - Mobile"
                className="w-full rounded-lg"
              />
            </div>
           
          </div>
        </main>
      </div>

      {/* ==================== LIVE LINK ==================== */}
      <div className="w-full flex flex-col items-center justify-center px-5 md:px-10 pb-10 md:pb-14">
        <p className="text-sm md:text-base tracking-[0.15em] uppercase font-semibold text-center mb-8 md:mb-10">
          You can have a look at the website it's live @VIXIIWORLD.CO.UK
        </p>
        <img
          src="/YewFTORitJK7jsMUyOYYoBNtCU.jpg.png"
          alt="VIXII Tigers"
          className="w-24 md:w-32 mx-auto"
        />
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

export default Vixii;
