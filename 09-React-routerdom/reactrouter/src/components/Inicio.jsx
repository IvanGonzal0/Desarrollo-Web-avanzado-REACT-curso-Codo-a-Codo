import { Link } from 'react-router-dom'
import React from 'react'

function Inicio() {
  return (

    <div>
        <h1>Inicio</h1>
        <Link to="/nosotros">Nosotros</Link>
        <br />
        <Link to="/contactos">Contactos</Link>
    </div>
  )
}

export default Inicio