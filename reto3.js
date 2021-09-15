/* Reto #3: interface grafica de promedio, media y moda. */

//--> Funciones 
let arregloNuevo = (lista) => arrayNuevo = lista.split(", ");
const esPar = (numero) => numero % 2 === 0 ? true : false;

function calcularPromedio (lista){

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function calcularMediana(lista){
    
    lista.sort((a,b) => a -b );

    const mitadLista = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];
        const promedioElementos = calcularMediaAritmetica([elemento1,elemento2,]);
        mediana = promedioElementos;
        return mediana;
    }else{
        mediana = lista[mitadLista];
        return mediana;
    }
}

function calcularModa(lista){
    
    const listaCount = {};

    lista.map(
        function (elemento){
            if(listaCount[elemento]){
                listaCount[elemento] += 1;
            }else{
                listaCount[elemento] = 1;
            }
        }    
    );

    const listaArray = Object.entries(listaCount).sort((valorAcumulado,nuevoValor) => valorAcumulado[1]  - nuevoValor[1] );
    const moda = listaArray[listaArray.length - 1][0];
    return moda;
}

//--> Funciones para Buttons

function ButtonPromedio(){

    const inputLista = document.getElementById("InputPromedio");
    const listaNueva = inputLista.value;

    const array = listaNueva.split(", ");
    const promedio = calcularPromedio(array);

    console.log(array);

    //const promedio = calcularPromedio(listaNueva);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = `El promedio es: $ ${inputLista}`;
  
}





