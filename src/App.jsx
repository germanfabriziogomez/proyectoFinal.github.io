import React, { useState } from 'react';

const Formulario = () => {
  const [image, setImage] = useState(null);  // Guardamos la imagen seleccionada

  const crearImagen = (event) => {
    const file = event.target.files[0];  // Accedemos al primer archivo (si hay alguno)
    if (file) { // si hay un archivo
      setImage(URL.createObjectURL(file));  // Creamos una URL temporal para la imagen seleccionada
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="bg-blue-300 p-6 rounded-lg w-1/2 space-y-4">
        <label htmlFor="imageUpload" className="block text-xl font-semibold">
          Cargar imagen
        </label>

        {/* Input oculto */}
        <input
          id="imageUpload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={crearImagen}
        />
        
        {/* Botón que activa el input */}
        <button
          type="button"
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={() => document.getElementById('imageUpload').click()}
        >
          Seleccionar imagen
        </button>

        {/* Mostrar la imagen seleccionada (si hay alguna) */}
        {image && (
          <div className="mt-4 flex justify-center items-center">
            <img 
              src={image} 
              alt="Imagen seleccionada" 
              className="max-w-full max-h-96 object-contain rounded-md"
            />
          </div>
        )}
      </form>
    </div>
  );
};

export default Formulario;
