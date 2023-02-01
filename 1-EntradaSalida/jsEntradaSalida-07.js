/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

function sumar()
{
	let numeroUno;
	let numeroDos;
	let suma;
		
	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;
	suma = parseInt(numeroUno) + parseInt(numeroDos);
	
	alert("La suma es " + suma);	
}

function restar()
{	
	let numeroUno;
	let numeroDos;
	let restar;
		
	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;
	restar = parseInt(numeroUno) - parseInt(numeroDos);

	alert("La resta es " + restar);	
	
}

function multiplicar()
{
	let numeroUno;
	let numeroDos;
	let multiplicar;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;
	multiplicar = parseInt(numeroUno) * parseInt(numeroDos);

	alert("La multiplicación es " + multiplicar);	
	
}

function dividir()
{
	let numeroUno;
	let numeroDos;
	let dividir;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;
	dividir = parseInt(numeroUno) / parseInt(numeroDos);

	alert("La división es " + dividir);	
	
}

