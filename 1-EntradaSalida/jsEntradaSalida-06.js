/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numeroUno;
	let numeroDos;
	let suma;
	
	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;
	suma = parseInt(numeroUno) + parseInt(numeroDos);
	
	alert("la suma es " + suma);
}

