
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

function cubo (a)
{ 
    let calculaCubo = a * a * a
return 'resultado del cubo' + calculaCubo
} 
alert(cubo(5))

function cuadrado (b)
{
    let calcularCuadrado = b * b
return 'el resultado del cuadrado es' + calcularCuadrado
}
alert(cuadrado(7))

function calcularPotencia1 (x, a)
{ 
    let resultado = (x * x) + a

    return resultado
}
alert (calcularPotencia1(5, 8))

function calcularProblema2 (x, a, b)
 { 
    let resultado = (x - a) * b
 return 'Resultado del problema 2' + resultado
}
alert (calcularProblema2(4, 3, 2))



    function calcularProblema3 ( x, a)
{
    let resultado = (x * x) * x * x + a
    return 'El resultado del problema 3 es ' + resultado
}
alert (calcularProblema3 (6, 20))

       
function calcularProblema4 (x, a, b)
{ 
    let resultado = (x / a) + b
    return 'El resultado del problema 4 es ' + resultado
}
alert (calcularProblema4(3, 2, 5))

       function calcularProblema5 (x, a)
{
    let resultado = (x * x * x) + (x * x) + a
    return 'El resultado del problema 5 es ' + resultado
}
alert (calcularProblema5( 3, 10))

    function calcularProblema6 ( x, a, b)
{
    let resultado = (x * a) * b
    return 'el resultado del problema 6 es ' + resultado
}
alert (calcularProblema6( 7, 10, 5))

/* otro */

function estaAprobado (notaExamen)
let estado 
    if (notaExamen >= 6)
{
    
        estado = 'Felicidades aprobaste'
    
}
else {
    estado = 'Desaprobaste, segui estudiando'
}
return estado

  let vikyymarSeLlevamaterias = false

  if (vikyymarSeLlevamaterias == true)
  {
      alert('se va a diciembre')
  }
  else {
      alert ('le compran los maquillajes que quieran')
  }

  /* 25 de sept */
                    
if (edadAlumno >= edadIngreso)
{
    alert ('bienvenido')
}

let estaLloviendo = false
if (estaLloviendo == true)
{
    alert('Lleva un paragua')
}

let notaAlumno = Number(prompt('ingresa tu nota'))
if (notaAlumno >= 8)
{
    alert ('Esta aprobado')
}else{
    alert ('Estas aprobado')
}

/*Ejemplos mios*/

let haceFrio = true

if (haceFrio == false)
{
    alert('Vamos con pollera al colegio')
}else{
    alert('No vamos de pollera al colegio')
}



let estoyEnlalista = true

if (estoyEnlalista == false)
{
alert ('No paso al xv')
}else{
    alert(' Entro al xv')
}



 let aprueboTodoslosexamenes = true


 if (aprueboTodoslosexamenes == false)
 {
     alert ('puedo salir los findes')
 }else{
     alert ('no salgo los findes')
 }

 /* 9 de octubre */
 
 let cantidadHijos =  8
 let edad = 2023 - 2009
 let cantidadDecasas = 0
 let trabajoFormal = true

 if ((edad >= 18) && (trabajoFormal == true) && (cantidadDecasas >0))
 {
     alert ('Podes entrar al sorteo')
 }else{
     alert ('No podes entrar al sorteo')
 }



 if  (cantidadHijos > 8)
 {
     alert ('Tenes prioridad en el sorteo')
 } else{
     alert ('No tenes tanta prioridad')
 }
