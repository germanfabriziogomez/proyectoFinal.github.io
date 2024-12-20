import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './componentes/header/Header'
import Footer from './componentes/footer/Footer'
import Galeria from './componentes/contenido-principal/galeria/Galeria'
import CrearReceta from './componentes/contenido-principal/generar-receta/SeccionReceta'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <main>
      <CrearReceta />
    </main>
    <Footer />
  </StrictMode>,
)
