/*código del cuadrado*/
console.group("cuadrado");



function perimetroCuadrado(lado) {
    return lado * 4;
};

function areaCuadrado(lado) {
    return lado * lado
}
console.groupEnd();


// código del triangulo

console.group("triangulo");


function alturaTriangulo(altura) {
    return altura;
};

function perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo) {
    return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
}


function areaTriangulo(baseTriangulo, alturaTriangulo) {
    return (baseTriangulo * alturaTriangulo) / 2;
}

console.groupEnd();

// código del circulo

console.group("circulo");

function diametroCirculo(radioCirculo) {
    return radioCirculo * 2;
}





function perimetroCirculo(radioCirculo) {
    const diametro = diametroCirculo(radioCirculo);
    return diametro * Math.PI;
}


function areaCirculo(radioCirculo) {
    area = diametroCirculo(radioCirculo);
    return (area * area) * Math.PI;
}




console.groupEnd();


// aquí interactuamos con el html

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}



function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//triangulo
const inputAltura= document.getElementById("InputAltura")
const inputLado1 = document.getElementById("InputLado1");
const inputLado2 = document.getElementById("InputLado2");
const inputBase = document.getElementById("InputBase");


function calcularPerimetroTriangulo() {
    const valorLado1 = Number(inputLado1.value);
    const valorLado2 = Number(inputLado2.value);
    const valorBase = Number(inputBase.value);
    const perimetro = perimetroTriangulo(valorLado1, valorLado2, valorBase);
    alert(perimetro);
}

function calcularElAreaTriangulo() {
    const valorBase = Number(inputBase.value);
    const valorAltura = Number(inputAltura.value);

    const area = areaTriangulo(valorBase,valorAltura);
    alert(area);
  
}

// Circulo

function calcularDiametroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const diametro = diametroCirculo(value);
    alert(diametro);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}


