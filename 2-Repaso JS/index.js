const numeros = [1, 2, 3, 4, 5, 6, 8];
const ul = document.querySelector("ul");

// for forEach

for (i = 0; i < numeros.length; i++) {
  const li = document.createElement("li");
  li.textContent = numeros[i];
  ul.appendChild(li);
}

numeros.forEach((num) => {
  const li = document.createElement("li");
  li.textContent = num;
  ul.appendChild(li);
});

// Map

const arrayMultiplicadoDiez = numeros.map((multi) => multi * 10);
console.log(arrayMultiplicadoDiez);

const arrayMultiplicadoCien = numeros.map((multiCien) => {
  let resultado = multiCien * 100;
  const li = document.createElement("li");
  li.textContent = resultado;
  //li.textContent = multiCien*100;
  ul.appendChild(li);

  return resultado;
});
