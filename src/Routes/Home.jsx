import React, { createContext, useContext } from 'react'
import Card from '../Components/Card'
import { Link, useLoaderData } from 'react-router-dom';


export const dataContext = createContext();

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Home = () => {

  const {posts} = useLoaderData();



  return (
    
    <dataContext.Provider value={posts}>
      <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        <section>
          {posts.length > 0
          ? (posts.map(el => <Card key={el.id} name={el.name} username={el.username} id={el.id}>  </Card>))
          : (<li>No blogs Found</li>)
          }
        </section>
      </div>
     </main>


    </dataContext.Provider>
    
    
    
  )
}

export default Home


export const loaderData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  console.log(res);
  if(!res.ok) throw ({
    status: res.status,
    statusText: "No se encuentra la información actualmente"})
  const posts = await res.json()  

  return {posts};
}


