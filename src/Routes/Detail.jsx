import React from 'react'
import { useLoaderData } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  let id = window.location.pathname.split("")[9] - 1;
  const {posts} = useLoaderData();
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <h4>Nombre: {posts[id].name}</h4>
      <h4>Email: {posts[id].email}</h4>
      <h4>Telefono: {posts[id].phone}</h4>
      <h4>WebSite: {posts[id].website}</h4>

      {/* {console.log("jajaja posts", id)} */}
    </>
  )
}

export default Detail

export const loaderPost = async ({params}) => {
  console.log("params es", params)
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
  if (!res.ok) throw ({
    status: res.status,
    statusText: "No se encunetra la información actualmente"})
const posts = await res.json()

return {posts}
}