/*
Ivan Ignacio Marrero, TP E/S N°3

3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let temperatura;
    let celcius;

    temperatura = txtIdTemperatura.value;

    temperatura = parseInt(temperatura);

    celcius = (temperatura - 32) / 1.8;

    alert(temperatura + "°F son " + celcius + "°C");
}

function CentigradosFahrenheit () 
{
    let temperatura;
	let fahrenheit;

    temperatura = txtIdTemperatura.value;

    temperatura = parseInt(temperatura);

    fahrenheit = temperatura * 1.8 + 32;

    alert(temperatura + "°C son " + fahrenheit + "°F");
}
