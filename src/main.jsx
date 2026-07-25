import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Nav } from './components/layout/Nav'
import { Hero } from './sections/Hero'
import { Servicios } from './sections/Servicios'
import { Nosotros } from './sections/Nosotros'
import { Portfolio } from './sections/Portfolio'
import { Proceso } from './sections/Proceso'
import {Preguntas} from './sections/Preguntas'
import { Contacto } from './sections/Contacto'
import { Footer } from './components/layout/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav/>
    <Hero/>
    <Servicios/>
    <Nosotros/>
    {/* <Portfolio/> */}
    <Proceso/>
    <Preguntas/>
    <Contacto/>
    <Footer/>
  </StrictMode>,
)
