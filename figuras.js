// Codigo del cuadrado 
console.group("Cuadrado");

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado + ladoCuadrado;

console.log(`Los lados del cuadrago miden: ${ladoCuadrado} cm`);
console.log(`El perimetro del cuadrago es: ${perimetroCuadrado} cm`);
console.log(`El área del cuadrago es: ${areaCuadrado} cm²`);


console.groupEnd();

// Codigo del triangulo
console.group("Triangulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
const areaTriangulo = baseTriangulo * alturaTriangulo / 2;

console.log(`Los lados del triangulo ${ladoTriangulo1} cm, ${ladoTriangulo2} cm, ${baseTriangulo} cm`);
console.log(`El perimetro del triangulo es: ${perimetroTriangulo} cm`);
console.log(`El área del triangulo es: ${areaTriangulo} cm²`);

console.groupEnd();


// Codigo del circulo 
console.group("Circulos");

const diametroCirculo = 8;
const radioCirculo = 4;

const perimetroCirculo = diametroCirculo * 3.1416;
const areaCirculo = 3.1426 * (radioCirculo * radioCirculo);

console.log(`El radio del circulo es ${radioCirculo} cm`);
console.log(`El perimetro del circulo es: ${perimetroCirculo} cm`);
console.log(`El área del circulo es: ${areaCirculo} cm²`);



console.groupEnd();