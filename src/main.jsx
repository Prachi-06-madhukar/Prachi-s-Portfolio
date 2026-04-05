import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Vixii from './components/Vixii.jsx'
import BlitzEscape from './components/BlitzEscape.jsx'
import Dresscue from './components/Dresscue.jsx'

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/vixii" element={<Vixii />} />
        <Route path="/blitzescape" element={<BlitzEscape />} />
        <Route path="/dresscue" element={<Dresscue />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
