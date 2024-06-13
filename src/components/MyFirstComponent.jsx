import React from 'react'
import { useState } from 'react'

export const MyFirstComponent = () => {
    const [ counter, setCounter ] = useState(0);
  return (
    <div>
        <h3>La suma del contado es { counter }</h3>
        <button type="submit" className='button-large' onClick={() => setCounter(counter +1)}>
            Sumar Contador
        </button>
    </div>
  )
}
