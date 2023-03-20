import React, { useState, useRef, useEffect } from 'react';
import './Logs.css'
import gif from '../../imgs/birdwalk.gif'

const Logs = () => {

  useEffect(() => {
    setDuck(localStorage.getItem('myKey') === 'duck' || false);
  }, []);

  const [duck, setDuck] = useState(true)
  const [clase, setClase] = useState(false)
  const [registros, setRegistros] = useState(() => {
    const registrosGuardados = localStorage.getItem('registros');
    if( typeof(registrosGuardados) === 'string'){
      setClase(false)
      setDuck(false)
    }
    return typeof registrosGuardados === 'string' ? JSON.parse(registrosGuardados) : [];
  });

  const divRegistrosRef = useRef(null);

  if (localStorage.getItem === 'duck') {
    setDuck(true)
  } 

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const horaActual = new Date().toLocaleTimeString();
      const textoActual = event.target.value;
      setRegistros([...registros, { hora: horaActual, texto: textoActual }]);
      event.target.value = '';
      setClase(true)
      setDuck(false)
      localStorage.removeItem('myKey');
    }
  }

  useEffect(() => {
    divRegistrosRef.current.scrollTop = divRegistrosRef.current.scrollHeight;
  }, [registros]);

  useEffect(() => {
    localStorage.setItem('registros', JSON.stringify(registros));
  }, [registros]);

  const handleBorrarClick = () => {
    if(duck)return
    registros === [] ? console.log('vacio') : console.log(123)
    localStorage.removeItem('registros');
    setRegistros([]);
    setClase(false);
    setDuck(true)
    localStorage.setItem('myKey', 'duck');

    divRegistrosRef.current.scrollTop = 0;
      if (divRegistrosRef.current.classList.contains('divRegistrosVacio')) {
        divRegistrosRef.current.classList.remove('divRegistrosVacio');
  }
  };

  

  return (
    <div className='logsContainer'>
      <div ref={divRegistrosRef} className={`divRegistros ${registros.length === 0 ? 'divRegistrosVacio' : ''}`}  >
        {registros.map((registro, index) => (
          <p className='registros' key={index}>
            <b>{registro.hora}</b> {registro.texto}
          </p>
        ))}
      </div>
      <div className= {clase ? 'divTextAreaInit' : 'divTextArea'}>
        <h1 className='registrodeeventos'>EVENT LOGS:</h1>
        <div className='divtextduck'>

          <textarea className='textarealogs' rows='10' cols='50' onKeyDown={handleKeyDown} placeholder='Write here and enter!'/>
          <img className= {duck ? 'duck' : 'byeDuck'} src={gif} alt='bird walking gif'></img>
        </div>
        <button className="botonBorrar" onClick={handleBorrarClick}>Clean All</button>
      </div>
      
      
    </div>
  );
}

export default Logs;