/* Taller #3: Modulo Moda */

//const lista1 = [1,2,3,1,2,3,4,2,2,2,1];


function calcularModa(lista){

    //Objeto que vamos a llenar
    const listaCount = {};

    //El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
    lista.map(
        function (elemento){
            if(listaCount[elemento]){
                listaCount[elemento] += 1;
            }else{
                listaCount[elemento] = 1;
            }
        }    
    );

    // mandamos como argumento el elemento (objeto) que queremos conbertir en un array con ayuda de Object.entries();
    // como nuestro arreglo es bidimencional lo que requerimos es el campo de numero que mas parece y usamos array.sort() para acomodar de menor a mayor el segundo parametro del array
    const listaArray = Object.entries(listaCount).sort((valorAcumulado,nuevoValor) => valorAcumulado[1]  - nuevoValor[1] );
    const moda = listaArray[listaArray.length - 1][0];

    return moda;
}