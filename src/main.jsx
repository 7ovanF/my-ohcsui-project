import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Intro from './pages/Intro.jsx'
import AboutMe from './pages/AboutMe.jsx'

createRoot(document.getElementById('root')).render(
  // TODO: StrictMode bakal munculin semua error, pas selesai ilangin
  // TODO: React Router v7 utk poin plus 
  <StrictMode>
    <Intro />
    <AboutMe />
  </StrictMode>,
)
