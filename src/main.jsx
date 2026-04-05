import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Vixii from './components/Vixii.jsx'
import BlitzEscape from './components/BlitzEscape.jsx'
import Dresscue from './components/Dresscue.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/vixii" element={<Vixii />} />
        <Route path="/blitzescape" element={<BlitzEscape />} />
        <Route path="/dresscue" element={<Dresscue />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
