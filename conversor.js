// Queremos crear una funcion que convierte los euros a dolares
// Sabemos que 1 euro son 0.89 dolares

function convertirEurDolar(euros) {
    let conversion = euros * 0.89;
    return conversion; 
}

// Convertir un euro a dolares. 1 ---> 0.89
let conversion1 = convertirEurDolar(1);

// Convertir dos euros a dolares. 2 ---> 1.78
let converion2 = convertirEurDolar(2);

// Convertir dos euros a dolares. 3 ---> 2.67
let converion3 = convertirEurDolar(3);



console.log(conversion1);
console.log(converion2);
console.log(converion3);

