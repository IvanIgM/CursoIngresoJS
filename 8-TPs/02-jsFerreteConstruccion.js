/*
Ivan Ignacio Marrero, TP E/S N°2

2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let cantidad;

    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    cantidad = (largo*2 + ancho*2) *3;

    alert("La cantidad a comprar es " + cantidad);
}
function Circulo () 
{
    let radio;
    let circunferencia;

    radio = txtIdRadio.value;

    radio = parseInt(radio);

    circunferencia = (2*3.1415) * radio * 3;

    alert("La cantidad a comprar es " + circunferencia);

}
function Materiales () 
{
    let largo;
    let ancho;
    let cuenta;
    let cemento;
    let cal;

    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    cuenta = largo * ancho;
    cemento = cuenta * 2;
    cal = cuenta * 3;

    alert("Se necesitan " + cemento + " bolsas de cemento y " + cal + " de cal");
}