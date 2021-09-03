/* Prueba Java Script*/
/*

## Variables y operaciones ##

1# Responde las siguientes preguntas en la sección de comentarios:

¿Qué es una variable y para qué sirve?
- Una variable es un espacio en memoria en donde se almacena información 

¿Cuál es la diferencia entre declarar e inicializar una variable?
- Una variable se declara para reservar un espacio en memoria, mientras y se inicializa para guardar información en ese espacio.

¿Cuál es la diferencia entre sumar números y concatenar strings?
- Sumar números es autoincrementar el valor numerico, mientras con los strings es juntar dos datos para formar uno mismo 

¿Cuál operador me permite sumar o concatenar?
" + "

*/ 


/* 
2# Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

Nombre
Apellido
Nombre de usuario en Platzi
Edad
Correo electrónico
Mayor de edad
Dinero ahorrado
Deudas

3# Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.
*/

let nombre = "Jhovan";
let apellido = "Solano";
let nombrePlatzi = "Jhovs";
let edad = 38;
let email = "jhovan.solano@gmail.com";
let mayorEdad = true;
let dineroAhorrado = 100000;
let deudas = false; 


/*
4# Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

Nombre completo (nombre y apellido)
Dinero real (dinero ahorrado menos deudas)

*/

let fullName = `${nombre} ${apellido}`;
let fullDeudas = dineroAhorrado - deudas;


/* 
## Funciones ##

1# Responde las siguientes preguntas en la sección de comentarios:

¿Qué es una función?
una función es una tarea que podemos llevar acabo en el navegador, que es reutilizable en la que hay un conjunto de instrucciones

¿Cuándo me sirve usar una función en mi código?
Cuando es reutilizable, cuando en un codigo varias lineas de codigo son repetidas 

¿Cuál es la diferencia entre parámetros y argumentos de una función?# 
parametros es uan variable que está definida para utilizar la función, mientras que los argumentos son datops que le pasan los parametros de una función 

*/

/* 
2# Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

*/

const miFuncion = function(name, lastname, nickname){
    let fullName = `${name} ${lastname}`;
    return console.log(`Mi nombre es ${fullName} pero prefiero que me digas ${nickname}.`);
}

miFuncion('Jhovan','Solano','Jhovs');


/* 
## Condicionales ##

1# Responde las siguientes preguntas en la sección de comentarios:

¿Qué es una condicional?
Son las reglas que vamos a usar para validar si algo es falso o verdadero 

¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
if - verdadero, else - falso , else if falso si, switch creado para validar casos


¿Puedo combinar funciones y condicionales?
si


2# Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
*/
const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion === "free"){
    console.log("Solo puedes tomar los cursos gratis");
}else if (tipoDeSuscripcion === "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if (tipoDeSuscripcion === "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}else {
    if(tipoDeSuscripcion === "ExpertPlus"){
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    }else{
        console.log("No estas subscrito, asi que corre a subcribirte!!!");
    }
};


/* 
3# Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional.

*/

const miSuscripcion = function(tipoSuscripcion){

let subcripcion = tipoSuscripcion === "Free" ? "Solo puedes tomar los cursos gratis" :
 tipoSuscripcion === "Basic" ? "Puedes tomar casi todos los cursos de Platzi durante un mes" :
 tipoSuscripcion === "Expert" ? "Puedes tomar casi todos los cursos de Platzi durante un año" :
 tipoSuscripcion === "ExpertPlus" ? "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año" :
 "No estas subcrito, asi que corre a subcribirte"

 console.log(subcripcion)

}

miSuscripcion("Basic");


/* 
## Ciclos ##

1# Responde las siguientes preguntas en la sección de comentarios:

¿Qué es un ciclo?
Son la manera rapida y sencilla de hacer una tarea repetidas veces 

¿Qué tipos de ciclos existen en JavaScript?
for, for of, While, do While 


¿Qué es un ciclo infinito y por qué es un problema?
Es una tarea repedida sin fin el cual se genera por que no le damos un limite al cual lleguar 


¿Puedo mezclar ciclos y condicionales?
si


2#  Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}
for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

*/


let i = 0;

while (i < 5){
    console.log("El valor de i es: " + i);
    i++;
}


let i = 10;

while (i > 2){
    console.log("El valor de i es: " + i);
    i--;
}


/* 
3# Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

Pista: puedes usar la función prompt de JavaScript.

*/

let respuesta = 0;

do{
 respuesta = prompt(`¡Cual es el resultado de 2 + 2? `)
 respuesta *= 1;

}while (!(respuesta === 4))

console.log('Tu respuesta es correcta!!');



/* 
## Listas ##

1# Responde las siguientes preguntas en la sección de comentarios:

¿Qué es un array?
Son un conjunto de valores del mismo tipo almacenados en una variable

¿Qué es un objeto?
Es una colección de propiedades

¿Cuándo es mejor usar objetos o arrays?
Depende la necesidad del algoritmo 

¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
si



2# Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.


*/

function array(n){
    return console.log(a[0]);
}


/* 
3# Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

*/

let articulos = ['Pera', 'Manzana', 'Sandia'];

function unaFuncion(arreglo){
    for (i = 0; i < arreglo.length; i++){
        console.log(arreglo[i]);
    }
}


let articulos = ['Pera', 'Manzana', 'Sandia'];

function todosElementos (array) {
	array.forEach(function (articulo) {
		console.log(articulo);
	});
}

unaFuncion(frutas);


/* 
3# Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
*/

var info = {
    name: "Fernando",
    lastName: "Navarro",
    username: "fernavarosas"
};

function imprimirTodos (object) {
	Object.values(object).forEach(function (elemento) {
		console.log(elemento);
	});
}

imprimirTodos(info);