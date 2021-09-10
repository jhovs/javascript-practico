// Codigo del cuadrado 
const perimetroCuadrado = (lado) => lado * 4; 
const areaCuadrado = (lado) => lado * lado;

// Codigo del triangulo
const perimetroTriangulo = (lado1,lado2,base) => lado1 + lado2 + base;
const areaTriangulo = (base,altura) => (base * altura) / 2;

// Codigo del circulo 
const pir = Math.PI;
const pi = pir.toFixed(4); 


const diametroCirculo = (radio) => radio * 2;
const perimetroCirculo = (radio) => (radio * 2) * pi;
const areaCirculo = (radio) => (radio * radio) * pi;

//Funciones para cuadrado en figuras.html y obtener el valor del input 

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = Number(input.value);

    const perimetro = perimetroCuadrado(value);

    alert(`El perimetro del cuadrado es ${perimetro} cm`);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = Number(input.value);

    const area = areaCuadrado(value);

    alert(`El área del cuadrado es ${area} cm`);
    
}

//Funciones para triangulo en figuras.html y obtener valor de inputs 

function calcularPerimetroTriangulo(){
    const lado1Tri = document.getElementById("lado1Triangulo");
    const lado1 = Number(lado1Tri.value); 

    const lado2Tri = document.getElementById("lado2Triangulo");
    const lado2 = Number(lado2Tri.value);

    const baseTri = document.getElementById("baseTriangulo");
    const base = Number(baseTri.value);

    const perimetro = perimetroTriangulo(lado1, lado2, base);

    alert(`El perimetro del triangulo es ${perimetro}`);
}

function  calcularAreaTriangulo(){
    const baseTri = document.getElementById("baseTriangulo");
    const base = Number(baseTri.value);

    const alturaTri = document.getElementById("alturaTriangulo");
    const altura = Number(alturaTri.value);

    const area = areaTriangulo(base,altura);

    alert(`El area del triangulo es ${area}`);
}

//Funciones para circulo en figuras.html y obtener valor de inputs 

function calcularPerimetroCirculo(){
    const radioCirculo = document.getElementById("inputCirculo");
    const radio = Number(radioCirculo.value);

    const perimetro = perimetroCirculo(radio);

    alert(`El perimetro del circulo es ${perimetro}`);
}

function calcularAreaCirculo(){
    const radioCirculo = document.getElementById("inputCirculo");
    const radio = Number(radioCirculo.value);

    const area = areaCirculo(radio);

    alert(`El area del circulo es ${area}`);
}