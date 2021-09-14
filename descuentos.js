//Taller #2 Porcentajes y descuentos

//Globals
const coupons = [
    {
        name: "PADAWAN",
        discount: 5,
    },
    {
        name: "SITH",
        discount: 10,
    },
    {
        name: "JEDI",
        discount: 15,
    },
];


//Functiones 
const calcularPrecioConDescuento = (precio,descuento) => (precio * (100 - descuento)) / 100 ;

function cupon(precio,nameCupon){

    const cuponCodigo = coupons.find((item) => item.name === nameCupon);

    if(!cuponCodigo) {
        return null;
    }else{
        const descuento = cuponCodigo.discount;
        const descuentoCupon = calcularPrecioConDescuento(precio, descuento);
        return descuentoCupon;
    }
}


//function para html - javacript
function ButtonPriceDiscount(precio,descuento){
    const inputPrice = document.getElementById("InputPrice");
    const priceInput = Number(inputPrice.value);

    const inputDiscount = document.getElementById("InputDiscount");
    const discountInput = Number(inputDiscount.value);

    const precioConDescuento = calcularPrecioConDescuento(priceInput,discountInput);     

    const resultP = document.getElementById("ResultP");
    resultP.innerText = `El precio con descuento son: $ ${precioConDescuento}`;
    
}

function ButtonPriceCupon(precio,coupons){
    
    const inputPrice = document.getElementById("InputPrice");
    const priceInput = Number(inputPrice.value);

    const inputCupon = document.getElementById("InputCupon");
    const cuponInput = inputCupon.value;

    const discountTotal = cupon(priceInput, cuponInput);

    const discountP = document.getElementById("ResultP");

    if(!discountTotal){
        discountP.innerText = `El codigo del cupón es invalido`
    }else{
        discountP.innerText = `El precio con descuento de cupon es: $ ${discountTotal}`
    }
}