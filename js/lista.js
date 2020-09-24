const elementos = 'Los elementos no únicos son: ';
const separador = ',';
const bisiesto = document.querySelector("button");
bisiesto.addEventListener("click", hallarNoUnicos);

function hallarNoUnicos() {
  const texto = document.getElementById("textLista").value;
  let enteros = texto.replace(/ /g, "");
  enteros = enteros.split(separador);
  let repetidos = [];
  let temporal = [];
  
  enteros.forEach((value,index)=>{
    temporal = Object.assign([],enteros);
    temporal.splice(index,1);
    if(temporal.indexOf(value)!=-1 && repetidos.indexOf(value)==-1) repetidos.push(value);
  }); 
  enteros.forEach((entero,index) => {
    if(repetidos.indexOf(entero)===-1) {
        enteros.splice(index,1);
    }
  });
  console.log(enteros);
  document.getElementById("resultLista").innerHTML = elementos + enteros;
}
