//calculo el precio con descuento  función con 2 parámetros y formula para sacar el descuento 

function calcularPrecioConDescuento(precioOriginal, descuento) {
    var porcentajeConDescuento = 100 - descuento;
    precioConDescuento = (precioOriginal * porcentajeConDescuento) / 100;
    return precioConDescuento;
}

function clickPrecioTotal() {
    const inputPrecio = document.getElementById("inputPrice");
    const valuePrecio = inputPrecio.value;

    const inputDescuento = document.getElementById("inputDiscount");
    const valueDescuento = inputDescuento.value;

    const precioConDescuento = calcularPrecioConDescuento(valuePrecio, valueDescuento);
    alert(precioConDescuento);
    var precioTotal = document.getElementById("precioTotal")
    precioTotal.innerText ="El precio con descuento es: " + precioConDescuento +" $";
}

