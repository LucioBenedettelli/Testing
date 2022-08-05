// 1. ¿Que son las funciones? Ejemplos con paginas reales.
//2. Formas de declarar funciones (funciones anomimas, funciones con nombre y arrows functions). 
//Explicar return y console.log. diferencias con el break
//3- Diferencia entre usar funciones anonimas, funciones con nombre y arrows functions.
//4- Variables: Scope de una variable y de una función. Diferencia entre var y let.
//5. Hoisting ¿Para que sirve?
//6- Playground. Hacer una app implementando funciones, ciclos y Switch. Enseñar document.write.

//function suma (a,b) //{
    //let resultado = a + b
    //console.log(resultado)
//}

//suma(1,10)
//__________________________________________________________________________________________________________________

//let primerNumero = Number(prompt("Ingrese un numero"))
//let segundoNumero = Number(prompt("Ingrese otro numero"))

//function multiplicar (primerNumero, segundoNumero) {
    //let resultado = primerNumero * segundoNumero
    //alert(resultado)
//}

//multiplicar(primerNumero, segundoNumero)
//_______________________________________________________________________________________________________________

// Explicacion del Return

// Todas las funciones tienen que devolver/retornar un valor. Ese valor puede ser un alert, console.log o la palabra reservada return
// El console.log devuelve por consola un valor.
// El alert es un pop-up o una pantalla que aparece en nuestro DOM o HTML.
// El return es una palabra reservada que sirve para devolver un valor. Pero a su vez ese valor no tiene ninguna interfaz grafica.
// Para que aparezca lo que almacenamos en un return. Deberiamos incluirlo en un alert o console.log. 
// Otro uso que tiene la palabra reservada RETURN es que corta la ejecución del código. Es decir que debajo del return 
//no puede ir nada más. En ese sentido es igual al break.
//___________________________________________________________________________________________________________________________

// Por ejemplo

//function restar (a, b) {
//let resultado = a - b 
//return resultado
//}

//let mostrarResultado = restar (10, 5)
//console.log(mostrarResultado)
//__________________________________________________________________________________________________________________________

//let primerNumero = Number(prompt("Ingrese un numero"))
//let segundoNumero = Number(prompt("Ingrese otro numero"))

//function division (primerNumero, segundoNumero) {
//let resultado = primerNumero / segundoNumero
//return resultado
//}
    
//let mostrarResultado = division (primerNumero, segundoNumero)
//alert("El resultado es: " + mostrarResultado)
//___________________________________________________________________________________________________________________________

// Funciones anonimas: Es otra forma de escribir funciones con otra sintaxis. Hace exactamente lo mismo que la forma
//tradicional

//let nombre = prompt("Por favor ingresa tu nombre")
//const saludo = function(nombre) {
 //alert("Bienvenido" + " " + nombre)   
//}
//saludo(nombre)
//______________________________________________________________________________________________________________________
// Arrows Functions o Funciones de flecha. La unica diferencia de Arrows Functions con el respecto de las funciones es
// que tiene un return implicito. Cuando hay una sola sentencia no hay necesidad de poner Return. En cambio cuando la
//logicá es mayor ahi si habrá que poner return. Hay que acostumbrarse por buena practica a poner la palabra reservada return
// Otra diferencia es la referencia del objeto this (ya lo veremos en objetos eso)
// Ejemplos

//let myFunction = (a, b) => a * b;

//console.log (myFunction(10,10))
//_________________________________________________________________________________________________________________
//let nombre = prompt("Ingrese tu nombre") 

//let saludo = (nombre) => nombre 

//alert(saludo("Bienvenido" + " " + nombre))
//___________________________________________________________________________________________________________________

//let primerNumero = Number(prompt("Ingrese primer numero"))
//let segundoNumero = Number(prompt("Ingrese segundo numero"))
//let operacion = prompt("Ingrese la operación")
//let sumar = (primerNumero, segundoNumero, operacion) => {
//if (operacion == "+") {
    //let resultado = primerNumero + segundoNumero
    //return resultado
//}else{
//return "Has ingresado una operacion invalida"
//}
//}

//let mostrarResultado = sumar(primerNumero, segundoNumero, operacion)
//alert(mostrarResultado)

//______________________________________________________________________________________________________
// En este caso tenemos 3 funciones globales primerNumero, segundoNumero y operación
// Manipular esas variables como globales nos va a permitir acceder a cualquier parte de nuestro código.
// Por ejemplo primerNumero, segundoNumero y operación. Porque son globales se pueden pasar por argumentos a la función, como tambien
// al if.
// En cambio la variable resultado SOLO va a vivir y podrá ser usada en el if. Ya que eso es una variable de caracter LOCAL.
// Esa variable solo puede ser usada en el contexto de ejecución de ese bloque (es decir entre las llaves). Ya que si queremos llamar a
//esa variable por fuera del if nos va a tirar un error o que la variable "No está definida".
// Diferencia entre var y let. Var NO respeta el ambito del código. Se puede acceder y pisar desde cualquier lugar.
// En cambio let respeta el ambito o scope dependiendo el bloque de código
// Otra diferencia es que con var se puede declarar y asignar la misma variable. En cambio con let no.

//var nombre = "Lucio"
//var nombre = "Martin"
//console.log(nombre)

//let nombre = "Lucio"
//let nombre = "Juan"
//console.log(nombre)

//var nombre = "Mateo"

//if (nombre == "Mateo") {
//var nombre = "Cesar"
//}

//console.log(nombre)
//_________________________________________________________________________________________________________________

// El hoisting es una manera que tiene JavaScript de interpretar sentencias. JS es un lenguaje interpretado donde lee linea por linea
// Sin embargo cuando encuentra funciones o variables más alla que el orden no sea el correcto. Por atrás suele acomodarlo automaticamente

//nombreDelGato("Dumas");

//function nombreDelGato(nombre) {
  //console.log("El nombre de mi gato es " + nombre);
//}
/*
El resultado del código es: "El nombre de mi gato es Dumas"
*/
