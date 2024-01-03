import React, { useState, useEffect } from "react";

const Api = () => {
  //LOGICA
  // como vamos a consultar una api en tiempo real, vamos a usar usestate para que sea dinamico

  const [users, setUsers] = useState([]); // inicializamos el estado con un array vacio

  //useEffect es un hook que se ejecuta despues de que el componente se renderiza
  useEffect(() => {
    //aqui va la logica (ASINCRONICA)
    //fetch es una funcion que nos permite hacer peticiones http
    fetch("https://reqres.in/api/users")
      .then(data => data.json())
      .then(json => setUsers(json.data));
  }, []); // el segundo parametro es un array de dependencias, si esta vacio se ejecuta una sola vez, si tiene algo se ejecuta cada vez que cambie el valor de la dependencia

  console.log({ users });
  //RENDER
  return (
    <div>
      <h1>Ejemplo de API</h1>

      <ul>
        {users.map(user => (
            <div className="card m-2 mx-auto" style={{width: "18rem"}}>
                <img src={user.avatar} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{user.first_name}, {user.last_name}</h5>
                    <p className="card-text">{user.email}</p>
                    <a href="#" className="btn btn-info">Conctact</a>
                </div>
            </div>
        ))}
      </ul>
    </div>
  );
};

export default Api;
