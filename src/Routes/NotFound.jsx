import { useRouteError, Link } from "react-router-dom"


const NotFound = () => {

    const error = useRouteError();

  return (
    <div>
        <h3>{error.status}</h3>
        <p>Lo sentimos esta pagina no existe</p>
        <p>{error.statusText || error.message}</p>
        <Link to="/">Volver al inicio</Link>
    </div>
  )
}

export default NotFound