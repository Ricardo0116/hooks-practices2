import React, { useState } from 'react'

export const SecondComponent = () => {
    const [ name, setName ] = useState ("Ricardo Capera");

    const changeName = (e) => {
        setName("Arnulfo Capera")
    }

  return (
    <div>
        <h3>Componente: SecondComponent</h3>
        <p>{name}</p>
        <div>
            <button className='button-large' onClick={ changeName }>Cambiar Nombre</button>
        </div>
    </div>
  )
}
