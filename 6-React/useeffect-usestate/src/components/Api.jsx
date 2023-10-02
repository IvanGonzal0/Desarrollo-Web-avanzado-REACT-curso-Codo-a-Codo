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
      <h2>Ejemplo de Api</h2>

      <ul>
        {users.map(user => (
          <li>
            <img src={user.avatar} alt="" />
            <p>{user.first_name}, {user.last_name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Api;
