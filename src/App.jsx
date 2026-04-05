import { useState } from 'react'
import DottedCursor from './components/DottedCursor'
import SplashScreen from "./components/SplashScreen"
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe'
import StackingScrollShowcase from './components/StackingScroll'
import Contact from './components/Contact'


function App() {
  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringBlack, setIsHoveringBlack] = useState(false);
  const [showSplash, setShowSplash] = useState(() => {
    return !sessionStorage.getItem('splashShown')
  })

  const handleSplashComplete = () => {
    sessionStorage.setItem('splashShown', 'true')
    setShowSplash(false)
  }

  return (
    <>
    <div className="cursor-none">
      <DottedCursor isHovering={isHovering} isHoveringBlack={isHoveringBlack} />

      {/* Dark top area + Navbar */}
      <div className="bg-white pt-6 pb-4" id='home'>
        <Navbar/>
      </div>

      {/* Hero Section */}
      <div
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <Hero/>
      </div>

      {/* About Me Section */}
      <div id='about'
        onMouseEnter={() => setIsHoveringBlack(true)}
        onMouseLeave={() => setIsHoveringBlack(false)}
      >
        <AboutMe/>
      </div>

      {/* Work Section */}
      <div id='work'
        onMouseEnter={() => setIsHoveringBlack(true)}
        onMouseLeave={() => setIsHoveringBlack(false)}
      >
        <StackingScrollShowcase/>
      </div>

      {/* Contact Section */}
      <div id='contact'>
        <Contact/>
      </div>

      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
    </div>
    </>
  )
}

export default App
