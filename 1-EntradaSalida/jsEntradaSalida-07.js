/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
let numeroUno;
let numeroDos;
	
numeroUno = txtIdNumeroUno.value;
numeroDos = txtIdNumeroDos.value;

function sumar()
{	
	let suma;
	suma = parseInt(numeroUno) + parseInt(numeroDos);
	alert("La suma es " + suma);	
}

function restar()
{	
	let numeroUno;
	let numeroDos;
		
	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;
		
	let restar;
	restar = parseInt(numeroUno) - parseInt(numeroDos);
	alert("La resta es " + restar);	
	
}

function multiplicar()
{	
	let multiplicar;
	multiplicar = parseInt(numeroUno) * parseInt(numeroDos);
	alert("La multiplicación es " + multiplicar);	
	
}

function dividir()
{	
	let dividir;
	dividir = parseInt(numeroUno) / parseInt(numeroDos);
	alert("La divición es " + dividir);	
	
}

