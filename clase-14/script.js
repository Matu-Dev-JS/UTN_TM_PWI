//arrays
//lista de elementos ordenados

/* let nombre1 = 'pepe'
let nombre2 = 'juan'
let nombre3 = 'ezequiel' */

//posicicion/index 0        1         2
/* const nombres = ['pepe', 'juan', 'ezequiel']



console.log(nombres[1])
console.log('Tengo ' + nombres.length + ' nombres')
 */
//array.length (property)

//metodos de array

//array.push()
//array.pop()

//.push(): agrega un elemento al final del array y devuelve la nueva longitud

/* nombres.push('maria') */

//.unshift(): agrega un elemento al principio del array y devuelve la nueva longitud

/* nombres.unshift('maria')


 */


//.pop() elimina el ultimo elemento y nos lo retorna

/* let ultimoElemento = nombres.pop()
console.log(ultimoElemento) */

//.shift() elimina el primer elemento y lo retorna

//SOLAMENTE FUNCIONA BIEN CON LOS ARRAYS DE STRING
//.indexOf() devuelve la posicion de un string en el array de strings

/* let posicionDeJuan = nombres.indexOf('juan')
console.log('La posicion de juan es ' + posicionDeJuan)
 */

//.splice()
/* 
array.splice()
1er parametro: 
-desde donde va posicionarse
2do parametro:
-cantidad de elementos que se quieren borrar
3er parametro:
-Elementos a agregar
*/

/* nombres.splice( posicionDeJuan, 1 ) */




/* const nombres2 = ['maria', 'pedro', 'leonel', 'ezequiel', 'elias']

let posicionDeEzequiel = nombres2.indexOf('ezequiel')

const listaDeEliminados = nombres2.splice(posicionDeEzequiel, 0, 'lucas')

console.log(nombres2)
console.log('La lista de eliminados es: ', listaDeEliminados) */





//Eliminar a leonel
//eliminar a el anterior a lucas
//agregar antes de abril a 'sofia' sin eliminar a abril

//REGLAS: 
//-No se puede mirar el array
//-Si van a poder usar consola


/* console.log(nombres3.includes('leonel')) */



/* const nombres3 = ['maria', 'pedro', 'leonel', 'ezequiel', 'elias', 'lucas', 'julieta', 'abril', 'lautaro']
 */
/* for(let index = 0; index < nombres3.length; index = index + 1){
    console.log(nombres3[index])
} */

/* for(let nombre of nombres3){
    console.log(nombre)
} */

//Dado el siguiente array crear un segundo array llamado mayusculas que solo contenga las palabras en mayusculas



//esto debe generar un segundo array con ['PEDRO', 'JuaN']




/* const estaEnMinuscula = (str) =>{
    return str == str.toLowerCase()
} 

const tieneMaysucula = (str) =>{
    return !estaEnMinuscula(str)
} 

const nombres = ['pepe', 'lucas', 'PEDRO', 'JuaN', 'pepeSito'] */
/* const mayusculas = [];
 */
/* for (let nombre of nombres) {
    if (tieneMaysucula(nombre)) {
        mayusculas.push(nombre)
    }
} */

/* for (let elemento of nombres) {
    if (tieneMaysucula(elemento)) {
        mayusculas.push(elemento)
    }
}
console.log(mayusculas);
 */


const productos = [
    {
        title: 'tv samsung 32"',
        price: 3000,
        marca: 'samsung'
    },
    {
        title: 'tv samsung 50"',
        price: 4600,
        marca: 'samsung'
    },
    {
        title: 'tv lg 42"',
        price: 3500,
        marca: 'lg'
    },
    {
        title: 'tv noblex 50"',
        price: 4500,
        marca: 'noblex'
    },
    {
        title: 'tv noblex 65"',
        price: 6000,
        marca: 'noblex'
    },
    {
        title: 'celular samsung 64gb',
        price: 4500,
        marca: 'samsung'
    },
    {
        title: 'celular samsung 128gb',
        price: 4500,
        marca: 'samsung'
    },
]


/* Crear un array llamado samsung que contenga los productos que sean de la marca samsung */

const samsung = []
for(const producto of productos){
    if(producto.marca === 'samsung'){
        samsung.push(producto)
    }
}
console.log(samsung)

/* 
Crear una funcion que se llame buscarProducto(string) recibira un string y por cada producto del array 
de productos verificara si el titulo tiene incluido el string buscado
Esta funcion debe retornar un array de productos

EJEMPLO:
buscarProducto('noblex') //retorna:  
[ 
    {
        title: 'tv noblex 65"',
        price: 6000,
        marca: 'noblex'
    },
    {
        title: 'tv noblex 50"',
        price: 4500,
        marca: 'noblex'
    }
]
buscarProducto('celular')
[
    {
        title: 'celular samsung 64gb',
        price: 4500,
        marca: 'samsung'
    },
    {
        title: 'celular samsung 128gb',
        price: 4500,
        marca: 'samsung'
    }
]

*/