const esPangrama = 'El texto ingresado es un pangrama';
const noPangrama = 'El texto ingresado no es un pangrama';
const pangrama = document.querySelector("button");
pangrama.addEventListener("click", isPangrama);
const abecedario = "abcdefghijklmnñopqrstuvwxyz";

function isPangrama() {
  const texto = document.getElementById("textPangrama").value;
  let cadena = texto.replace(/ /g, "");
  cadena = cadena.toLowerCase();
  let abcArreglo = Array.from(abecedario);
  let bool = abcArreglo.every(letra => 
    cadena.includes(letra)
  );
  if (bool) {
    document.getElementById("resultPangrama").innerHTML = esPangrama;
    console.log("¿Es pangrama?: " + esPangrama);
  } else {
    document.getElementById("resultPangrama").innerHTML = noPangrama;
    console.log("¿Es pangrama?: " + noPangrama);
  }
}
