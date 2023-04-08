import { json } from "react-router-dom";
import { TYPES } from "../actions/formAction";


export const formInitialState = {
    favoritos: [],
}


export function formReducer(state, action) {
    switch (action.type) {
        case TYPES.AGREGAR_FAVS:{

            let data = action.payload[0].id
            console.log("dataObjet", data)

            state.favoritos.push(JSON.parse(localStorage.getItem(`registros${data}`)))
            localStorage.setItem(`registros${data}`, JSON.stringify(action.payload))

           /*  let registroNuevo = state.favoritos.find(el => el.id === action.payload.id )
            console.log("registro nuevo", registroNuevo)
 */
           /*  registroNuevo
            ?{
                favoritos:  registroNuevo
            }
            :{
            } */


            /* if(state.favoritos.length === 0){localStorage.setItem("registros", JSON.stringify(action.payload))}
            state.favoritos.push(JSON.parse(localStorage.getItem("registros")))
        
            state.favoritos = state.favoritos.map(el => el.id === action.payload.id ? el : action.payload);
            console.log("state.favs", state.favoritos)
            localStorage.setItem("registros", JSON.stringify(state.favoritos)) */

            /* let registroNuevo = state.favoritos.filter(el => el.id !== action.payload.id );
            console.log("state.favs", state.favoritos)
            console.log("registroNuevo", registroNuevo)
            localStorage.setItem("registros", JSON.stringify(state.favoritos)) */
            


            /////////////////////////////////////////

            /* let datos = JSON.parse(localStorage.getItem("registros"));
            console.log("datos vale", datos)

            if (datos === null){localStorage.setItem("registros", JSON.stringify(action.payload))}
            state.favoritos.push(JSON.parse(localStorage.getItem("registros")))
            console.log("state despues del get", state)
            console.log("datos despues del get", datos)

               if (state.favoritos.length > 0){
                console.log("state favoritos map antes", state.favoritos)
                state.favoritos = state.favoritos.map(el => el.id === action.payload.id ? el : action.payload )
                console.log("state favoritos map despues", state.favoritos) */
                

                /* let registro = state.favoritos.filter(el => el.id !== action.payload.id);
                console.log("registro ", registro); */
                /* if(registro.length === 0){localStorage.setItem("registros", JSON.stringify(dataObjec))}
                else{return registro} */
             /*  } 
            return "jajaj" */
        }
            
        default:
            return state;
    }
}