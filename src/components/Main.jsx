import React from 'react'
import './style/Main.css'

const Main = ({titular, texto, boton, imagen}) => {
  return (
    <main className='main'>
      <div className='main-left'>
        <h2>{titular}</h2>
        <p>{texto}</p>
        <button className="main-button">{boton}</button>
      </div>
      <div className='main-right'>
        <img
          src={imagen}
          alt=''
          className='main-image'
        />
      </div>
    </main>
  );
};

export default Main;
