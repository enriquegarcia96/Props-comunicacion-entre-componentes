import React from 'react';

import  Saludo from './components/Saludo.jsx';
import Comentario from './components/Comentario.jsx';

function App() {
  return (
    <div className="container mt-5">
      <h1>Proyecto desde Cero</h1>
      <Saludo persona='Diana' edad={24} />
      <Saludo persona='Enrique' edad={25} />
      <Saludo persona='Shellsea' edad={23} />
      <Saludo persona='Omar' edad={23} />
      <hr />
      <h3>Cajita de comentario</h3>
      <Comentario 
        urlImagen='https://picsum.photos/64'
        persona='Diana'
        texto='Pink Pink Pink'
      />
      <Comentario 
        urlImagen='https://picsum.photos/64'
        persona='Enrique'
        texto='Red Red Red'
      />
      <Comentario 
        urlImagen='https://picsum.photos/64'
        persona='Shellsea'
        texto='nose'
      />
      <Comentario 
        urlImagen='https://picsum.photos/64'
        persona='Omar'
        texto='Greed'
      />
      
    </div>
  );
}

export default App;
