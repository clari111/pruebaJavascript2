
/*
1) Crear una funcion que calcule:
a) multiplicacion
b) division
C) suma
d) RESTA
E) La siguiente expresion : x 2+5

2) Crear una funcion que salude a una persona, utilizando su nombre y apellido.

*/


function multiplicacion ( a, b)
{
let multiplicar = a * b
return 'el resultado es ' + multiplicar
}
alert (multiplicacion( 10, 5))

function suma ( c, d)
{
    let suma = c + d 
    return 'el resultado de la suma es ' + suma
}
alert (multiplicacion(66, 70))

function restar ( e, f)
{
    let resta = e - f
    return 'el resultado de la resta es ' + resta 
}
alert (restar(130, 40))

function dividir ( g, h)
{
    let divicion = 58 / 4
    return 'el resultado es ' + divicion
}
alert (dividir( 60, 3))

function sumaypotencia (x, b)
{
    let resultado = x * x + b
    return resultado
}
alert (sumaypotencia(6, 7))

function Saludar (nombre, apellido)
{
return  'bienvenido' + nombre + apellido
}
alert(Saludar(clara, gauna))