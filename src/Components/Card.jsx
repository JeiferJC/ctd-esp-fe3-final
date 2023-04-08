import React, { useContext, useReducer } from "react";
import { Link } from "react-router-dom";
import { TYPES } from "../actions/formAction";
import { formInitialState, formReducer } from "../reducers/formReducer";
import { dataContext } from "../Routes/Home";


const Card = ({ name, username, id }) => {

  const data = useContext(dataContext);
  const dataObjec = [{name, username, id}];
  const [state, dispatch] = useReducer(formReducer, formInitialState)


  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    /* localStorage.setItem("registros", JSON.stringify(dataObjec)) */
    /* console.log("dataObject vale", dataObjec) */

    /* let datos = JSON.parse(localStorage.getItem("registros")); */
    
    console.log(state);
    if(state.favoritos.length === 0){localStorage.setItem(`registros${dataObjec[0].id}`, JSON.stringify(dataObjec))}
    
    dispatch({type: TYPES.AGREGAR_FAVS, payload: dataObjec})

   }
  

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <img src="public/images/doctor.jpg" width="200px" alt="imagen doctor" />
        <Link to={`/details/${id}`}>{name}</Link>
        <h5>{username}</h5>
        <button onClick={addFav} className="favButton">Add fav</button>
        
    </div>
  );
};



export default Card;


