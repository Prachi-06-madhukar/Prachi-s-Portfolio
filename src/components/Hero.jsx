function Hero() {
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
        src="/homepage hero.png"
        alt="Prachi Madhukar - UI/UX Designer"
        className="hidden sm:block sm:mx-6 md:mx-10 sm:w-[calc(100%-3rem)] md:w-[calc(100%-5rem)] h-[70vh] md:h-[85vh] lg:h-screen object-contain"
      />
    </div>
  );
}

export default Hero;
