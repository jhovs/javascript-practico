// Taller #4: Análisis salarial 

//--> Helpers
const esPar = (numero) => numero % 2 === 0 ? true : false;

function calcularMediaAritmetica (lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function cantidadMediana(lista){

    //lista.sort((a,b) => a -b );

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

//-->Crear nueva lista que contenga los salarios 
const salariosMex = mexico.map(
    function(persona){
        return persona.salary;
    }
);

const salariosMexOrd = salariosMex.sort((a,b) => a -b );

//-->Mediana de salarios 
const medianaGralMex = cantidadMediana(salariosMexOrd);

//-->Mediana del top 10% 
const spliceStart = (salariosMexOrd.length * 90) / 100;
const spliceCount = salariosMexOrd.length - spliceStart;

const salariosTop10Mex = salariosMexOrd.splice(spliceStart,spliceCount); 

const medianaTop10Mex = cantidadMediana(salariosTop10Mex);

//--> Mostrar en pantalla:
console.log({
    medianaGralMex,
    medianaTop10Mex,
});



/* 
Notas: 

.splice() : necesita dos parametros primero dividira el array en la posición que le digamos y segundo parametro dividira donde colocamos cuantas partes dividimos el sobrante del array y eso lo sacara del mismo 

*/ 