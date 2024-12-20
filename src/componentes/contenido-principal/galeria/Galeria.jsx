import React from 'react';

const Galeria = ({ publicaciones }) => {
  return (
    <section className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        Últimas recetas publicadas por los usuarios
      </h2>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {publicaciones.map((receta, index) => (
          <div key={index} className="group relative">
            <img
              src={receta.imagen_url}
              className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
            />
            <div className="flex flex-col">
              <h3 className="text-sm text-gray-700 mt-5">
                <a href="#">
                  <span aria-hidden="true" className="absolute inset-0 mt-0" />
                  {receta.plato}
                </a>
              </h3>
              <p className='text-sm mb-5'>{receta.descripcion}</p>
              <p className="text-sm text-gray-500">Publicado por: {receta.nombre_usuario}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Galeria;
