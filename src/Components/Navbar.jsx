import React from 'react'
import {NavLink} from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <div>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/contact">Contacto</NavLink>
        <NavLink to="/favs">Favs</NavLink>
      </div>
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar