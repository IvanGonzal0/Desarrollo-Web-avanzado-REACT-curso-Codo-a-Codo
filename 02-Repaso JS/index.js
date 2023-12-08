const numeros = [1, 2, 3, 4, 5, 6, 8];
//const ul = document.querySelector("ul");

let ultimo = numeros[numeros.length - 1];
console.log(ultimo);
console.log({ numeros });
//agrego un elemento
let nuevoArray = numeros.push("Fulano");
console.log(numeros);

//borro un elemento
let borrado = numeros.pop("Fulano");
console.log(numeros);
//obtengo la posicion de un elemento
let posicion = numeros.indexOf(4);
console.log({ posicion, numeros });

//funcion anonima
const saludo = function () {
  console.log("Hola mundo funcion anonima");
};

saludo();

const saludar = () => {
  console.log("Hola mundo funcion flecha");
};

//clases

let cadena = "hola";
let cadena2 = new String("hola");

//clase propia creada por nosotros
class Animal {
  constructor(especie, nombre, tamanio) {
    this.especie = especie;
    this.nombre = nombre;
    this.tamanio = tamanio;
  }

  get info() {
    return `El animal es un: ${this.especie}, y se llama ${this.nombre}, tamaño: ${this.tamanio}`;
  }

  set modificarTamanio(nuevoTamanio) {
    this.tamanio = nuevoTamanio;
  }
}

let perro = new Animal("canino", "perro");
let gato = new Animal("felino", "kitty", "mediano");

perro.modificarTamanio = "grande";

console.log(perro.info);

// herencia

class Mamiferos extends Animal{
  constructor(especie, nombre,  tamanio, habitat, tipoDeRespiracion) {
    super(especie, nombre, tamanio);
    this.habitat = habitat;
    this.tipoDeRespiracion = tipoDeRespiracion;
  }

  get infoMamifero() {
    return `El animal es un: ${this.especie}, y se llama ${this.nombre}, tamaño: ${this.tamanio}. Es un mamifero de habitat: ${this.habitat}, y el tipo de respiracion es: ${this.tipoDeRespiracion}.`;
  }
}

let mamifero = new Mamiferos("gato", "tiger", "tamanio","terrestre", "pulmonar")
console.log(mamifero.infoMamifero);

// for forEach

// for (i = 0; i < numeros.length; i++) {
//   const li = document.createElement("li");
//   li.textContent = numeros[i];
//   ul.appendChild(li);
// }

// numeros.forEach((num) => {
//   const li = document.createElement("li");
//   li.textContent = num;
//   ul.appendChild(li);
// });

// // Map

// const arrayMultiplicadoDiez = numeros.map((multi) => multi * 10);
// console.log(arrayMultiplicadoDiez);

// const arrayMultiplicadoCien = numeros.map((multiCien) => {
//   let resultado = multiCien * 100;
//   const li = document.createElement("li");
//   li.textContent = resultado;
//   //li.textContent = multiCien*100;
//   ul.appendChild(li);

//   return resultado;
//});
