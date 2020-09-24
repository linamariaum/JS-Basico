const esBisiesto = 'El año ingresado es bisiesto. Tiene 366 días';
const noBisiesto = 'El año ingresado no es bisiesto. Tiene 365 días';
const bisiesto = document.querySelector("button");
bisiesto.addEventListener("click", isBisiesto);

function isBisiesto() {
  const texto = document.getElementById("textBisiesto").value;
  let anio = parseInt(texto);
  if (anio%4 === 0 && (anio%100 !== 0 || anio%400 === 0)) {
    document.getElementById("resultBisiesto").innerHTML = esBisiesto;
  } else {
    document.getElementById("resultBisiesto").innerHTML = noBisiesto;
  }
}