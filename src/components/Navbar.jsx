import { Link as ScrollLink } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const handleNavClick = (section) => {
    if (isHome) return; // react-scroll handles it
    navigate(`/#${section}`);
  };

  const navLinks = [
    { label: 'About Me', to: 'about' },
    { label: 'Works', to: 'work' },
    { label: 'Contact', to: 'contact' },
  ];

  return (
    <div className="bg-[#E7E7E7] rounded-lg mx-6 md:mx-12 px-8 md:px-12 py-4 flex items-center font-myfont text-xs tracking-[0.2em] uppercase">
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

      <div className="ml-auto flex gap-8">
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
    </div>
  );
}

export default Navbar;
