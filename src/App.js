import React, {useEffect, useState} from "react"        //Importando los hooks

const App =()=>{

    const [res, cambiarres]=useState([]) 

    useEffect(() => {                                       //Usando el hook para cuando cambie el estado, se renderize  el componente
      fetch("https://jsonplaceholder.typicode.com/users")   //Usando la api de fetch
      .then((response)=>response.json())                    //Convertimos la respuesta en formato JSON
      .then((res)=>cambiarres(res))                         //Cambiamos el estado
      .catch(error=>console.log(error))
      
      },[])
    
    return(
        <div>
            <h1>hola</h1>
            <ul>
                {res.map((r)=>{                             //usamos el metodo map para recorrer los objetos
                    return(
                        <li key={r.id}>{r.name}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default App