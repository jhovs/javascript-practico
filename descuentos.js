//Taller #2 Porcentajes y descuentos
/*
Función para calcular precio con descuento 

function calcularPrecioConDescuento(precio,descuento){
    const procentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * procentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

*/

const calcularPrecioConDescuento = (precio,descuento) => (precio * (100 - descuento)) / 100 ;