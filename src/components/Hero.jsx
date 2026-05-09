import { useEffect, useState } from "react";

function Hero() {
  const heroImages = ["/homepage hero1.png", "/homepage hero2.png"];
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setFrame((f) => (f + 1) % heroImages.length);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Mobile image */}
      <img
        src="/homepage mobile.png"
        alt="Prachi Madhukar - UI/UX Designer"
        className="block sm:hidden w-full h-auto object-contain"
      />
      {/* Tablet and desktop image */}
      <img
        src={heroImages[frame]}
        alt="Prachi Madhukar - UI/UX Designer"
        className="hidden sm:block sm:mx-6 md:mx-10 sm:w-[calc(100%-3rem)] md:w-[calc(100%-5rem)] h-[70vh] md:h-[85vh] lg:h-screen object-contain"
      />
      {/* Preload the alternate frame so the swap is instant */}
      <img src="/homepage hero2.png" alt="" className="hidden" aria-hidden="true" />
    </div>
  );
}

export default Hero;
