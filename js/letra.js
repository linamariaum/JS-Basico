class Letra {

    constructor(valor) {
        this.valor = valor;
        this.cantidad = 0;
    }
  
    addOcurrencia() {
        this.cantidad = this.cantidad + 1;
    }
  
    getCantidad() {
        return this.cantidad;
    }
  
    getValor() {
        return this.valor;
    }
  
  }
  
  const pangrama = document.querySelector("button");
  pangrama.addEventListener("click", isPangrama);
  const abecedario = "abcdefghijklmnñopqrstuvwxyz";
  let abecedarioArreglo = Array.from(abecedario);
  let letras = [];
  let index = 0;
  abecedarioArreglo.forEach(letra => {
    letras.push(new Letra(letra));
    index = index + 1;
  });
  
  function isPangrama() {
      const texto = document.getElementById("textPangrama").value;
      let cadena = texto.replace(/ /g, "");
      cadena = cadena.toLowerCase();
      console.log(texto);
      console.log(cadena);    
  
      // abecedarioArreglo.forEach(letra => {
      //   console.log(letra);
      //   console.log(cadena.includes(letra));
      //   if (!cadena.includes(letra)) return false;
      //   console.log('F');
      // });
      let isPang = false;
      letras.forEach(letra => {
        console.log(cadena.includes(letra.getValor()));
        if (cadena.includes(letra.getValor())) {
          console.log('sumar')
          letra.addOcurrencia();
          
  
        } else {
  
        };
        console.log(letra.getCantidad());
      });
  
        
      console.log(letras);
  
  
      document.getElementById("resultPangrama").innerHTML = 'Si';
      console.log("¿Es pangrama?: " + 5 + 3);
  }
