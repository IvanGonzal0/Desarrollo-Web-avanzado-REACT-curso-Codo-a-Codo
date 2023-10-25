import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function Appi() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getMovies();
  }, []);

  //   //fetch
  //   async function getMovies() {
  //     //consulta a la api GET
  //     const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=191528030c357419329af1198edbcb24&language=es-MX&page=1");
  //     //convertir a json la rta
  //     const responseData = await response.json();
  //     //setear el estado
  //     setData(responseData.results);
  //     console.log(data);
  //   }

  //   //fetch con .then
  //     function getMovies() {
  //       //consulta a la api GET
  //       fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=191528030c357419329af1198edbcb24&language=es-MX&page=1")
  //       .then((response) => response.json())
  //       .then((responseData) => setData(responseData.results))
  //       .catch((error) => console.log(error));
  //     }

  //   //axios

  //   async function getMovies() {
  //     //consulta a la api GET
  //     const response = await axios.get(
  //       "https://api.themoviedb.org/3/movie/now_playing?api_key=191528030c357419329af1198edbcb24&language=es-MX&page=1"
  //     );
  //         console.log(response);
  //     //setear el estado
  //     setData(responseData.data.results);
  //     console.log(data);
  //   }
  //axios con .then

    function getMovies() {
        //consulta a la api GET
        axios
        .get(
            "https://api.themoviedb.org/3/movie/now_playing?api_key=191528030c357419329af1198edbcb24&language=es-MX&page=1"
        )
        .then((response) => {
            console.log(response);
            setData(response.data.results);
        })
        .catch((error) => console.log(error));
    }

  return (
    <div>
      <h1>Hola</h1>
      {data.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Appi;
