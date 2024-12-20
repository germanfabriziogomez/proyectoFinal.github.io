import React, { useState } from 'react';
import './SeccionReceta.css';
import Formulario from '../formulario/Formulario';
import Galeria from '../galeria/Galeria'; 
import Imagen1 from '../../../assets/img-1.jpg';
import Imagen2 from '../../../assets/img-2.jpg';
import Imagen3 from '../../../assets/img-3.jpg';

const SeccionReceta = () => {
  // Estado compartido de las publicaciones
  const [publicaciones, setPublicaciones] = useState([
    {
      nombre_usuario: 'Carlos Martínez',
      plato: 'Lasagna',
      descripcion: 'Un plato italiano hecho con capas de pasta ancha intercaladas con carne molida, salsa de tomate, bechamel (salsa blanca), y queso mozzarella y parmesano, todo horneado hasta dorarse.',
      imagen_url: Imagen1,
    },
    {
      nombre_usuario: 'Frank',
      plato: 'Paella Valenciana',
      descripcion: 'La paella es uno de los platos más representativos de la cocina española. La versión valenciana se prepara con arroz, mariscos, pollo, conejo, judía verde y garrofó, todo cocido a fuego lento con un toque de azafrán.',
      imagen_url: Imagen2,
    },
    {
      nombre_usuario: 'David',
      plato: 'Ensalada de Aguacate y Espinacas:',
      descripcion: 'Una receta fresca y saludable, ideal para cualquier momento del día. Combina espinacas, aguacate, pepino y cebolla morada, aderezada con limón y aceite de oliva. ¡Ligera, deliciosa y llena de nutrientes',
      imagen_url: Imagen3,
    },
  ]);
  const [formVisible, setFormVisible] = useState(false);

  // Función para agregar una receta
  const agregarReceta = (receta) => {
    setPublicaciones((publicaciones) => [receta, ...publicaciones]);
  };

  const cerrarFormulario = () => {
    setFormVisible(false);
  };

  return (
    <section className='seccion-receta'>
      <h2>¿Tienes una receta deliciosa que deseas compartir?</h2>
      <p>Ingresa tus pasos, ingredientes y fotos, y haz que otros disfruten de tu creación culinaria.</p>
      <button className='btn-crear-receta' onClick={() => setFormVisible(true)}>
        Crear receta
      </button>

      {/* Solo mostrar el formulario si 'formVisible' es true */}
      {formVisible && <Formulario agregarReceta={agregarReceta} cerrarFormulario={cerrarFormulario} />}
      
      {/* Mostrar la Galería pasándole las publicaciones */}
      <Galeria publicaciones={publicaciones} />
    </section>
  );
};

export default SeccionReceta;
