/* Taller #3: Modulo Mediana */

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

    lista.sort((a,b) => a -b );

    const mitadLista = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];
        const promedioElementos = calcularMediaAritmetica([elemento1,elemento2,]);
        mediana = promedioElementos;
    }else{
        mediana = lista[mitadLista];
    }
}