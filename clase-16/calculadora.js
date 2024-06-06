/* 
## Login

Debo tener una funcion llamada login que active toda la logica del login

logica de login:

Vamos a solicitar al usuario un email
Validarermos que el email sea un email
/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(stringAValidar)

Ejemplo de uso
/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test('pepe@gmail.com')

Vamos a solictar al usuario una password 
validar que tenga mas de 6 caracteres, que tenga almenos 1 mayuscula y que no sea '' o null

Si todo esta correcto dira por alerta('Usuario {email} registrado con exito') y retornara al usuario como objeto:

EJEMPLO:

login() //retorna  el usuario {
    email: 'value@gmail.com',
    password: 'Pepe123'
}

!==
*/

const tieneMayuscula = (palabra) => palabra.toLowerCase() !== palabra

const validacionEmail = (email) =>{
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
}

const validacionPassword = (password) =>{
    return password && password.length >= 6 && tieneMayuscula(password)
}


const login = () => {
    const usuario = {
        email: null,
        password: null
    }

    let email = prompt('Ingrese un email')
    while(!validacionEmail(email)){
        email = prompt('Error email invalido: ingrese nuevamente el email')
    }
    usuario.email = email

    let password = prompt('Ingrese la password que tenga mas de 6 caracteres y una mayuscula')
    while(!validacionPassword(password)){
        password = prompt('Error password invalida, vuelva a ingresar una password de 6 caracteres y una mayuscula')
    }
    usuario.password = password

    alert(`Usuario ${usuario.email} registrado`)

    return usuario
}

/* 
console.log(login()) */


/*
## Calculadora de operaciones

Crear una funcion llamada calculadora() que de inicio a la sig logica
-Operaciones Disponibles:
    1) +
    2) -

Solicitar una operacion y verificar que la operacion sea valida (es valida si esta dentro de las operaciones disponibles)
Solicitar un numero 1 y validarlo
Solicitar un numero 2 y validarlo

Al finalizar las solicitudes mostrar el resultado por alerta de la sig manera:
'El resultado de {numero1} {operacion} {numero2} es {resultado}


*/

/* 
Alternativa mejor

const validacionOperacion = (operacion) =>{
    const OPERACIONES_DISPONIBLES = ['+', '-']
    return OPERACIONES_DISPONIBLES.includes(operacion)

}

*/

const validacionOperacion = (operacion) =>{
    const OPERACIONES_DISPONIBLES = ['+', '-']
    for(let operacionDisponible of OPERACIONES_DISPONIBLES){
        if(operacionDisponible === operacion){
            return true
        }
    }
    return false
}

const validacionNumero = (numero) =>{
    return numero && !isNaN(numero)
}



const calculadora = () =>{
    let operacion = prompt('Ingrese una operacion')
    while(!validacionOperacion(operacion)){
        operacion = prompt('Error, operacion no disponible, seleccione una operacion')
    }

    let a = prompt("Ingrese un primer numero")
    while(!validacionNumero(a)){
        a = prompt("Error numero no valido, ingrese nuevamente")
    }

    let b = prompt('Ingrese un segundo numero')
    while(!validacionNumero(b)){
        b = prompt('Error numero no valido, ingrese nuevamente')
    }

    let resultado = 0

    if(operacion === '+'){
        resultado = Number(a) + Number(b)
    }
    else if(operacion === '-'){
        resultado = Number(a) - Number(b)
    }

    alert(`El resultado de ${a} ${operacion} ${b} es ${resultado}`)
}





/* localStorage.setItem(
    'usuario', 
    JSON.stringify(login())
)
 */


if(localStorage.getItem('historial') === null){
    localStorage.setItem('historial', JSON.stringify([]))
}

const obtenerHistorial = () => JSON.parse(localStorage.getItem('historial'))

const guardarEnHistorial = (objeto) =>{
    const historial = obtenerHistorial()
    historial.push(objeto)
    localStorage.setItem('historial', JSON.stringify(historial))
}


/* guardarEnHistorial({nombre: 'tomas',password: 'asdfg'}) */



/* Caso correcto */
/* const renderizarHistorial = () =>{
  const historial = obtenerHistorial()
  let listaHistorial = ''
  for(let obj of historial){
    listaHistorial = listaHistorial + `
    Accion: ${obj.accion}
    Operacion: ${obj.operacion}
    Numeros: ${obj.a}, ${obj.b}
    Resultado: ${obj.resultado}
    `
  }
  return listaHistorial
}
alert(renderizarHistorial()) */

/* 
guardarEnHistorial({
    accion: 'calculadora',
    operacion: '+',
    a: 2,
    b: 6,
    resultado: 8,
    fecha:  '17|03/2024'
})
guardarEnHistorial({
    accion: 'calculadora',
    operacion: '+',
    a: 5,
    b: 5,
    resultado: 10,
    fecha:  '27|08/2024'
})

guardarEnHistorial({
    accion: 'calculadora',
    operacion: '+',
    a: 10,
    b: 6,
    resultado: 16,
    fecha:  '31|05/2024'
}) */
/*     guardarEnHistorial({
        accion: 'calculadora',
        operacion: '+',
        a: 10,
        b: 6,
        resultado: 16,
        fecha:  '31|05/2024'
    }) */

/* TODO: Fijate que el historial debe venir de localStorage */

const renderizarHistorial = () =>{
    let listaHistorial = ''
    const historial = obtenerHistorial()
    for (const objeto of historial){
        listaHistorial = listaHistorial + `
        accion: ${objeto.accion}
        operacion: ${objeto.operacion}
        numeros: ${objeto.a}, ${objeto.b}
        resultado: ${objeto.resultado}
        fecha: ${objeto.fecha}
        `
    }
    return listaHistorial
}

alert(renderizarHistorial())


