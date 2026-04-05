import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (section) => {
    setMenuOpen(false);
    if (isHome) return;
    navigate(`/#${section}`);
  };

  const navLinks = [
    { label: 'About Me', to: 'about' },
    { label: 'Works', to: 'work' },
    { label: 'Contact', to: 'contact' },
  ];

  return (
    <div className="bg-[#E7E7E7] rounded-lg mx-4 sm:mx-6 md:mx-12 px-4 sm:px-8 md:px-12 py-3 md:py-4 font-myfont text-xs tracking-[0.2em] uppercase">
      <div className="flex items-center justify-between">
        <div>
          {isHome ? (
            <ScrollLink to="home" smooth={true} duration={500} className="cursor-none text-black">
              Prachi Madhukar
            </ScrollLink>
          ) : (
            <span onClick={() => navigate('/')} className="cursor-none text-black">
              Prachi Madhukar
            </span>
          )}
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-8">
          {navLinks.map(({ label, to }) =>
            isHome ? (
              <ScrollLink key={to} to={to} smooth={true} duration={500} className="cursor-none text-black">
                {label}
              </ScrollLink>
            ) : (
              <span key={to} onClick={() => handleNavClick(to)} className="cursor-none text-black">
                {label}
              </span>
            )
          )}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="cursor-none text-black">
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] cursor-none p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-[2px] bg-black transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-5 h-[2px] bg-black transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-[2px] bg-black transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-60 pt-4 pb-2' : 'max-h-0'}`}>
        <div className="flex flex-col gap-4">
          {navLinks.map(({ label, to }) =>
            isHome ? (
              <ScrollLink
                key={to}
                to={to}
                smooth={true}
                duration={500}
                className="cursor-none text-black"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </ScrollLink>
            ) : (
              <span key={to} onClick={() => handleNavClick(to)} className="cursor-none text-black">
                {label}
              </span>
            )
          )}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="cursor-none text-black">
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
