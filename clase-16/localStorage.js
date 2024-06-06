//localStorage y sessionStorage



/* localStorage.setItem('username', nombre)
 */
/* console.log(String({nombre: 'pepe'}))


const user = {nombre: 'pepe'}

localStorage.setItem('user', JSON.stringify(user) )

const usuarioFromLocal = JSON.parse(localStorage.getItem('user'))

console.log(usuarioFromLocal.nombre) */


//JSON javascript object notation

//String escrito en formato JSON
'{"nombre": "pepe"}'

//parse permite trasnformar un string con notacion de objetos a un objeto
/* console.log(JSON.parse('{"nombre": "pepe"}'))
 */
//stringify

/* const producto = {
    nombre: 'tv samsung',
    precio: 700
}
let stringConNotacionDeObjeto = JSON.stringify(producto)

console.log(stringConNotacionDeObjeto) */


/* 
Mejorar la funcion login para que el objeto retornado lo guarde en localStorage

*/
/* Guardar este objeto en localstorage */
/* let usuarioRegistrado = login() */