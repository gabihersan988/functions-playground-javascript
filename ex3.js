/**
 * Hasta ahora hemos visto funciones muy sencillitas, pero pueden ser más complejas.
 * 
 * La siguiente función escribe 'n' veces el texto que le pasamos en 'texto'
 */

 function esribeVeces(n, texto) {
     for (let i=0; i<n; i++) {
         console.log(texto)
     }
 }

  let n = 10
  let texto = ("Hola!")
  esribeVeces (n, texto);
  
 /**
  * Invoca esta función de manera adecuada para que escribe la palabra 'Hola!' 10 veces
  */
 