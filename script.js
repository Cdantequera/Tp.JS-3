//ejercicio 1

/* let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

document.write(`<h1>Lista de Meses</h1><ul><li>${meses.join("</li><li>")}</li></ul>`); */

//ejercicio 2
// Paso 1: Solicitar ciudades al usuario

// Solicitar ciudades al usuario

let ciudades = [];
let ciudad;

while (true) {
    ciudad = prompt("Ingresa una ciudad (deja vacio o presiona Cancelar para terminar):");
    
    if (ciudad === null || ciudad.trim() === "") {
        break;
    }
    
    ciudades.push(ciudad);
}

// arreglos de ciudades
document.write("<h1>Arreglos de ciudades</h1>");
document.write(`<p>El arreglo de ciudades tiene ${ciudades.length} elementos</p>`);
document.write(`<p>. elemento 1era posicion: ${ciudades[0] || "No disponible"}</p>`);
document.write(`<p>. elemento 3era posicion: ${ciudades[2] || "No disponible"}</p>`);
document.write(`<p>. ultimo elemento: ${ciudades[ciudades.length - 1] || "No disponible"}</p>`);

// Añade argentina al final
ciudades.push("Argentina");
document.write(`<p>. ultimo elemento: ${ciudades[ciudades.length - 1]}</p>`);

// añade tucuman 
document.write(`<p>. elemento segunda posicion: ${ciudades[1] || "No disponible"}</p>`);
ciudades[1] = "Tucuman";

// Mostrar resultado final
document.write("<h2>Lista completa de ciudades:</h2>");
for (let i = 0; i < ciudades.length; i++) {
    document.write(`<p>. elemento ${i + 1}: ${ciudades[i]}</p>`);
}




//ejercicio 3

// no pude

//ejercicio 4

/* const inputNum = prompt("Ingresa un numero");

const numero = parseInt(inputNum)

function verificarParImpar(numero) {

    if (numero % 2 === 0) {
                return "par";
}   else {
            return "impar";
}
}

if (isNaN(numero)) {
    alert("Numero invalido");
} else {
    const resultado = verificarParImpar(numero);
    alert(`El número ${numero} es ${resultado}.`);
} */


    //ejercicio 5 

/* const inputTexto = prompt("Ingrese una frase");

function analizarCadena(texto) {
        if (texto.trim() === "") {
            return "La cadena esta vacia";
        }
        else if  (texto === texto.toUpperCase()) {
            return "La cadena esta escrita totalmente en mayuscula";
        }
        else if (texto === texto.toLowerCase()) {
            return "La cadena esta escrita totalmente en minuscula ";
        }
        else {
            return "La cadena esta escrita en mayuscula y minuscula";
        }
        
}

const resultado = analizarCadena(inputTexto);
document.write(`${resultado}`); */

//EJERCICIO 6

/* const inputNum = +prompt("ingrese LADO A");
const inputNum2 = +prompt("ingrese LADO B");

const perimetro = 2 * (inputNum + inputNum2);
document.write(perimetro); */


    //ejercicio 7
/* 
    const num = +prompt("Tablas (2-11):");

    if (num < 2 || num > 11 || isNaN(num)) {
    document.write("Tabla no disponible");
        } else {
    document.write(`<h2>Tabla del ${num}</h2><ul>`);

    for (let i = 1; i <= 10; i++) {
        document.write(`<li>${num} x ${i} = ${num * i}</li>`);
    }

    document.write("</ul>");
    } */






