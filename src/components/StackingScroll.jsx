import { Link } from "react-router-dom";

const StackingScrollShowcase = () => {
  return (
    <div className="bg-white px-10 md:px-16 pb-20 pt-10">
      {/* Heading */}
      <h1 className="text-black text-5xl md:text-7xl font-myfontMed mb-10 flapjack-font tracking-wider">
        WORK
      </h1>

      {/* VIXII - Full Width Card */}
      <Link to="/vixii" className="block cursor-none">
        <div className="w-full rounded-2xl overflow-hidden mb-2">
          <img
            src="/work/vixii homepage.png"
            alt="VIXII Website Design"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="flex justify-between mb-8 px-1">
          <span className="text-sm text-black font-myfont">Website Design project</span>
          <span className="text-sm text-gray-400 font-myfont">VIXII-Demi fine done Differently</span>
        </div>
      </Link>

      {/* BlitzEscape + Dresscue - Two Cards Side by Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* BlitzEscape */}
        <Link to="/blitzescape" className="block cursor-none">
          <div className="rounded-2xl overflow-hidden mb-2">
            <img
              src="/work/blitz homepage.png"
              alt="BlitzEscape"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>
          <div className="flex justify-between px-1">
            <span className="text-sm text-black font-myfont">AI-Powered Trip Planning Platform</span>
            <span className="text-sm text-gray-400 font-myfont italic">Blitzescape</span>
          </div>
        </Link>

        {/* Dresscue */}
        <Link to="/dresscue" className="block cursor-none">
          <div className="rounded-2xl overflow-hidden mb-2">
            <img
              src="/work/dresscue homepage.png"
              alt="Dresscue"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>
          <div className="flex justify-between px-1">
            <span className="text-sm text-black font-myfont">AI Styling App Design</span>
            <span className="text-sm text-gray-400 font-myfont italic">Dresscue</span>
          </div>
        </Link>
      </div>

      {/* CHECK OUT MY OTHER PROJECTS Banner */}
      <div className="w-full bg-[#899D7C] rounded-lg py-4 mb-10">
        <p className="text-center text-white text-lg md:text-xl font-myfontMed tracking-[0.2em] uppercase flapjack-font">
          Check out my other projects here
        </p>
      </div>

      {/* Three Smaller Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* OneBanc */}
        <a
          href="https://www.behance.net/gallery/229794877/Fintech-App-Design-for-OneBanc-Technologies-pvt-ltd"
          target="_blank"
          rel="noopener noreferrer"
          className="block cursor-none"
        >
          <div className="rounded-2xl overflow-hidden mb-2">
            <img
              src="/work/onebanc homepage.png"
              alt="OneBanc Fintech App"
              className="w-full h-[280px] object-cover"
            />
          </div>
          <div className="flex justify-between items-start px-1">
            <span className="text-sm text-black font-myfont">Fintech App design</span>
            <span className="text-xs text-gray-400 font-myfont italic">One banc technologies pvt .ltd.</span>
          </div>
        </a>

        {/* Roen */}
        <a
          href="https://www.behance.net/prachimadhukar"
          target="_blank"
          rel="noopener noreferrer"
          className="block cursor-none"
        >
          <div className="rounded-2xl overflow-hidden mb-2">
            <img
              src="/work/roen homepoage.png"
              alt="Roen Makeup Brand"
              className="w-full h-[280px] object-cover"
            />
          </div>
          <div className="flex justify-between items-start px-1">
            <span className="text-sm text-black font-myfont">Makeup brand Website design</span>
            <span className="text-xs text-gray-400 font-myfont italic">HAE pvt. ltd</span>
          </div>
        </a>

        {/* CMS Redesign */}
        <a
          href="https://www.behance.net/gallery/227658907/UI-redesign-project-College-Management-stystem"
          target="_blank"
          rel="noopener noreferrer"
          className="block cursor-none"
        >
          <div className="rounded-2xl overflow-hidden mb-2">
            <img
              src="/work/cms homepage.png"
              alt="College Management System"
              className="w-full h-[280px] object-cover"
            />
          </div>
          <div className="flex justify-between items-start px-1">
            <span className="text-sm text-black font-myfont">UI redesign project -<br/>College Management stystem</span>
            <span className="text-xs text-gray-400 font-myfont italic">NIFT</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default StackingScrollShowcase;
