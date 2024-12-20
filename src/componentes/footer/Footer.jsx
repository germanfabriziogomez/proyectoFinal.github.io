import React from 'react'
import Logo from '../../assets/logo.jpg'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='flex flex-col justify-center sm:flex-row '>
        
        <div>
            <h3 className="mt-1 text-sm text-gray-500">Explorar</h3>
            <ul>
                <li><a href="#"className="mt-1 text-sm text-gray-500">Inicio</a></li>
                <li><a href=""className="mt-1 text-sm text-gray-500">Quienes somos</a></li>
                <li><a href=""className="mt-1 text-sm text-gray-500">Carreras</a></li>
            </ul>
        </div>
        <div>
            <h3 className="mt-1 text-sm text-gray-500">Contacto</h3>
            <ul>
                <li><a href=""className="mt-1 text-sm text-gray-500">Buenos Aires</a></li>
                <li><a href=""className="mt-1 text-sm text-gray-500">Av. Rivadavia 4000</a></li>
                <li><a href=""className="mt-1 text-sm text-gray-500">Caballito, Capital Federal, Argentina</a></li>
            </ul>
        </div>
        <div>
            <h3 className="mt-1 text-sm text-gray-500">Seguinos</h3>
            <ul>
                <li><a href=""className="mt-1 text-sm text-gray-500">Instagram</a></li>
                <li><a href=""className="mt-1 text-sm text-gray-500">Twitter</a></li>
                <li><a href=""className="mt-1 text-sm text-gray-500">Linkedin</a></li>
            </ul>
            
        </div>
        <div>
            <h3 className="mt-1 text-sm text-gray-500">Legal</h3>
            <ul>
                <li><a href=""className="mt-1 text-sm text-gray-500">Terminos y condiciones</a></li>
                <li><a href=""className="mt-1 text-sm text-gray-500">Privacidad</a></li>
            </ul>
        </div>

    </footer>
  )
}

export default Footer
