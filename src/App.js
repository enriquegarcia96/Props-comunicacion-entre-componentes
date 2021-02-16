import React from 'react';

import  Saludo from './components/Saludo.jsx';


function App() {
  return (
    <div className="container mt-5">
      <h1>Proyecto desde Cero</h1>
      <Saludo persona='Diana' edad={24} />
      <Saludo persona='Enrique' edad={25} />
      <Saludo persona='Shellsea' edad={23} />
      <Saludo persona='Omar' edad={23} />
    </div>
  );
}

export default App;
