//ejercicio 1

/* let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

document.write(`<h1>Lista de Meses</h1><ul><li>${meses.join("</li><li>")}</li></ul>`); */

//ejercicio 2
// Paso 1: Solicitar ciudades al usuario

let ciudades = [];
let ciudad = prompt("Ingresa una ciudad (deja vacio o presiona Cancelar para terminar):");

while (ciudad !== null && ciudad.trim() !== "") {
    ciudades.push(ciudad);
    ciudad = prompt("Ingresa una ciudad (deja vacio o presiona Cancelar para terminar):");
}
console.log(ciudades);
document.writeln(
    `<p>La cantidad de ciudades ingresadas es: ${ciudades.length}</p>`
);
document.writeln(`<p>El elemento en la primera posicion es : ${ciudades[0]}</p>`);
document.writeln(`<p>El elemento en la tercera posicion es : ${ciudades[2]}</p>`);
document.writeln(`<p>El ultimo elemento es : ${ciudades[ciudades.length - 1]}</p>`);

ciudades.map((ciudad) => document.writeln(`<p>${ciudad.length}</p>`));

ciudades.push("París");

document.writeln(`<p>El elemento en la segunda posicion es : ${ciudades[1]}</p>`);

ciudades.map((ciudad) => document.writeln(`<p>${ciudad.length}</p>`));

ciudades.splice(1, 1, "Barcelona");


ciudades.map((ciudad) => document.writeln(`<p>${ciudad.length}</p>`));

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
//Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

/* let numero = +prompt("Ingrese un número del 2 al 11:");

function mostrarTablaMultiplicar(num) {
    if (num < 2 || num > 11 || isNaN(num)) {
        document.write("Tabla no disponible");
    } else {
        document.write(`<h2>Tabla del ${num}</h2><ul>`);
        for (let i = 1; i <= 10; i++) {
            document.write(`<li>${num} x ${i} = ${num * i}</li>`);
        }
        document.write("</ul>");
    }
}

mostrarTablaMultiplicar(numero); */






