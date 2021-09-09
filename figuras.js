// Codigo del cuadrado 
console.group("Cuadrado");

//const ladoCuadrado = 5;

function perimetroCuadrado(lado) {
    return lado * 4;
} 

function areaCuadrado (lado){
    return lado * lado;
}

//console.log(`Los lados del cuadrago miden: ${ladoCuadrado} cm`);
//console.log(`El perimetro del cuadrago es: ${perimetroCuadrado} cm`);
//console.log(`El área del cuadrago es: ${areaCuadrado} cm²`);


console.groupEnd();

// Codigo del triangulo
console.group("Triangulos");

const perimetroTriangulo = (lado1,lado2,base) => lado1 + lado2 + base;
const areaTriangulo = (base,altura) => (base * altura) / 2;

//console.log(`Los lados del triangulo ${ladoTriangulo1} cm, ${ladoTriangulo2} cm, ${baseTriangulo} cm, altura ${alturaTriangulo} cm`);
//console.log(`El perimetro del triangulo es: ${perimetroTriangulo} cm`);
//console.log(`El área del triangulo es: ${areaTriangulo} cm²`);

console.groupEnd();


// Codigo del circulo 
console.group("Circulos");

//const radioCirculo = 4;
//const diametroCirculo = radioCirculo * 2;
//const pi = Math.PI;

const perimetroCirculo = diametroCirculo * pi;
const areaCirculo = (radioCirculo * radioCirculo) * pi;

//console.log(`El radio del circulo es ${radioCirculo} cm, perimetro es ${diametroCirculo}`);
//console.log(`El perimetro del circulo es: ${perimetroCirculo} cm`);
//console.log(`El área del circulo es: ${areaCirculo} cm²`);

console.groupEnd();