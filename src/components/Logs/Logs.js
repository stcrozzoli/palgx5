import React, { useState, useRef, useEffect } from 'react';
import './Logs.css'

const Logs= ()=> {
  const [registros, setRegistros] = useState([]);
  const divRegistrosRef = useRef(null);
  const [clase, setClase] = useState(false)

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const horaActual = new Date().toLocaleTimeString();
      const textoActual = event.target.value;
      setRegistros([...registros, { hora: horaActual, texto: textoActual }]);
      event.target.value = '';
      setClase(true)
    }
  }


  useEffect(() => {
    divRegistrosRef.current.scrollTop = divRegistrosRef.current.scrollHeight;
  }, [registros]);

  return (
    <div className='logsContainer'>
      <div ref={divRegistrosRef} className='divRegistros'>
        {registros.map((registro, index) => (
          <p className='registros' key={index}>
            <b>{registro.hora}</b> {registro.texto}
          </p>
        ))}
      </div>
      <div className= {clase ? 'divTextAreaInit' : 'divTextArea'}>
        <h1>Registro de eventos</h1>
        <textarea className='textarealogs' rows='10' cols='50' onKeyDown={handleKeyDown} placeholder='Escribe algo aqui!'/>
      </div>
    </div>
  );
}

export default Logs;