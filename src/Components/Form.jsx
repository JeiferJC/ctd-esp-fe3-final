import React from "react";
import { useState } from "react";
/* import { TYPES } from "../actions/formAction";
import { formInitialState, formReducer } from "../reducers/formReducer"; */


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
/*   const [state, dispatch] = useReducer(formReducer, formInitialState); */


  const handleChange = (e) => {
    setForm({
      ...form, [e.target.name]: e.target.value
    })
  }
  



  const validateCamposForm = () => {
    let {name, email} = form;

    let expRegNombre = /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/;
    let expRegEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    const errors = {};

    if (typeof name !== "string")
    { errors.name = 'El campo nombre es requerido'
    } else if (!expRegNombre.test(name)){ errors.valName =  "El campo nombre debe contener al menos 2 palabras"}


    if (typeof email !== "string")
    { errors.email = 'El campo email es requerido'
    } else if (!expRegEmail.test(email)){ errors.valEmail =  "El campo email debe contener la siguiente estructura example@dominio.com"}


    console.log(errors)
    return errors; 
  } 



  const handleSubmit = (e) => {
    e.preventDefault();
    const errores = validateCamposForm();

    if (Object.keys(errores).length === 0) {
      console.log('Formulario enviado correctamente')
    } else{
      setErrors(errores);
    }

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" id="name" name="name" placeholder="Escribe tu nombre" value={form.name} onChange={handleChange} />
        {}
        <input type="text" id="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <input type="submit" />
      </form>
      <div>
          {Object.keys(errors).length > 0 && <a>{errors.name}</a>}
          {Object.keys(errors).length > 0 && <a>{errors.valName}</a>}
          {Object.keys(errors).length > 0 && <a>{errors.email}</a>}
          {Object.keys(errors).length > 0 && <a>{errors.valEmail}</a>}
          
      </div>
      

       
    </div>
  );
};

export default Form;
