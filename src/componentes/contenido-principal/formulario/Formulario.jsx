import React, { useState, useRef } from 'react';
import './Formulario.css';

const Formulario = ({ agregarReceta, cerrarFormulario }) => {
  const [receta, setReceta] = useState({
    nombre_usuario: '',
    plato: '',
    descripcion: '',
    imagen_url: ''
  });

  // Crear una referencia para el input de tipo 'file'
  const fileInputRef = useRef(null);

  const actualizarDatosReceta = (e) => {
    const { name, value } = e.target;
    setReceta({
      ...receta,
      [name]: value
    });
  };

  const subirImagen = (e) => {
    const file = e.target.files[0];
    if (file) {
      setReceta({
        ...receta,
        imagen_url: URL.createObjectURL(file)
      });
    }
  };

  const subirReceta = (e) => {
    e.preventDefault();
    
    // le paso la receta a la funcion que recibo por parametro (props)
    agregarReceta(receta);
    
    // Limpiar los campos del formulario
    setReceta({
      nombre_usuario: '',
      plato: '',
      descripcion: '',
      imagen_url: ''
    });

    // Limpiar el campo de imagen (input file)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // Limpiar el input de tipo file
    }

    alert('Tu receta fue subida correctamente');
  };

  return (
    <form onSubmit={subirReceta} className='outline outline-1 outline-gray-300 w-1/2 py-10 px-10 flex flex-col items-center'>
      <div className='flex flex-col'>
        <label htmlFor='nombre_usuario' className='py-3'>
          Usuario:
        </label>
        <input
          required
          type='text'
          id='nombre_usuario'
          onChange={actualizarDatosReceta}
          name='nombre_usuario'
          value={receta.nombre_usuario}
          className='outline outline-1 -outline-offset-1 outline-gray-300 py-3 px-3 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600'
        />

        <label htmlFor='plato' className='py-3'>
          Nombre del plato:
        </label>
        <input
          required
          type='text'
          id='plato'
          onChange={actualizarDatosReceta}
          name='plato'
          value={receta.plato}
          className='outline outline-1 -outline-offset-1 outline-gray-300 py-3 px-3 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600'
        />

        <label htmlFor='descripcion' className='py-3'>
          Ingredientes:
        </label>
        <textarea
          required
          id='descripcion'
          name='descripcion'
          onChange={actualizarDatosReceta}
          value={receta.descripcion}
          className='outline outline-1 -outline-offset-1 outline-gray-300 py-3 px-3 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600'
        ></textarea>

        <label htmlFor='imagen' className='py-3'>
          Subir una imagen:
        </label>
        <input
          required
          type='file'
          id='imagen'
          name='imagen'
          onChange={subirImagen}
          ref={fileInputRef} // Asignar la referencia al input de tipo file
          className='outline outline-1 -outline-offset-1 outline-gray-300 py-3 px-3 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600'
        />
      </div>

      <div className='flex items-center justify-center'>
        <button className='btn-guardar py-3 mt-4'>
          Guardar y publicar
        </button>
        
        {/* Botón para cerrar el formulario sin enviar */}
        <button 
          type="button"  // evitar que el formulario se envíe
          className='btn-cerrar py-3 mt-4' 
          onClick={cerrarFormulario}  // llamo a la funcion que recibo por parametro para cerrar el formulario
        >
          Cerrar Formulario
        </button>
      </div>
      
    </form>
  );
};

export default Formulario;
