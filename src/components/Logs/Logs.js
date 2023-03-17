import React, { useState, useRef, useEffect } from 'react';
import './Logs.css'

const Logs = () => {
  const [clase, setClase] = useState(false);
  const [registros, setRegistros] = useState(() => {
    const registrosGuardados = localStorage.getItem('registros');
    if( typeof(registrosGuardados) === 'string'){
      setClase(true)
    }
    return typeof registrosGuardados === 'string' ? JSON.parse(registrosGuardados) : [];
  });
  const divRegistrosRef = useRef(null);

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

  useEffect(() => {
    localStorage.setItem('registros', JSON.stringify(registros));
  }, [registros]);

  const handleBorrarClick = () => {
    localStorage.removeItem('registros');
    setRegistros([]);
  };

  return (
    <div className='logsContainer'>
      <div ref={divRegistrosRef} className='divRegistros' contentEditable={true}>
        {registros.map((registro, index) => (
          <p className='registros' key={index}>
            <b>{registro.hora}</b> {registro.texto}
          </p>
        ))}
      </div>
      <div className= {clase ? 'divTextAreaInit' : 'divTextArea'}>
        <h1>Registro de eventos</h1>
        <textarea className='textarealogs' rows='10' cols='50' onKeyDown={handleKeyDown} placeholder='Escribe algo aqui!'/>
        <button onClick={handleBorrarClick}>Borrar registros</button>
      </div>
    </div>
  );
}

export default Logs;