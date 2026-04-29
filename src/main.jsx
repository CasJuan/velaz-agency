import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Nav } from './Nav'
import { Hero } from './Hero'
import { Servicios } from './Servicios'
import { Nosotros } from './Nosotros'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav/>
    <Hero/>
    <Servicios/>
    <Nosotros/>
  </StrictMode>,
)
