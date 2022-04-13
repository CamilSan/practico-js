// CODIGO DEL CUADRADO
console.group("Cuadrado")

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd();

// CODIGO DEL TRIANGULO
console.group("Triangulo")
/*
const ladoTriangulo_1 = 6;
const ladoTriangulo_2 = 6;
const baseTriangulo = 5;
console.log("Los lados del triangulo miden: " + ladoTriangulo_1 + "cm, " + ladoTriangulo_2 + "cm, " + baseTriangulo + "cm");
*/

function perimetroTriangulo(lado_1, lado_2, base){
    return lado_1 + lado_2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

console.groupEnd();

// CODIGO DEL CIRCULO
console.group("Cuadrado")
/*
const radioCirculo = 5;
console.log("El radio del circulo es: " + radioCirculo + "cm");
*/

function diametroCirculo(radio){
    return radio * 2;
}

function perimetroCirculo(radio){
    return diametroCirculo(radio) * Math.PI;
}

function areaCirculo(radio){
    return (radio * radio) * Math.PI;
}

console.groupEnd();

//Interactuar con HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const lado = input.value;
    const perimetro = perimetroCuadrado(lado);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const lado = input.value;
    const area = areaCuadrado(lado);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const lado_1 = document.getElementById("inputTrianguloL1").value;
    const lado_2 = document.getElementById("inputTrianguloL2").value;
    const base = document.getElementById("inputTrianguloLB").value;
    const perimetro = perimetroTriangulo(lado_1, lado_2, base);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const base = document.getElementById("inputTrianguloLB").value;
    const altura = document.getElementById("inputTrianguloAltura").value;
    const area = areaTriangulo(base, altura);
    alert(area);
}

function calcularPerimetroCirculo(){
    const radio = document.getElementById("inputCirculoRadio").value;
    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const radio = document.getElementById("inputCirculoRadio").value;
    const area = areaCirculo(radio);
    alert(area);
}