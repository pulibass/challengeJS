// ciclos: for while, do while y switch

/* let numero = 5;
for (let i = 0; i < numero; i++) {
    console.log("el resultado es: " + i)
} */


/* let resultado = 1;
let elementos = ["juan", "javi", "eduardo",]
for (let x = 0; x < resultado; x++) {
    for (let m = 0; m < elementos.length; m++) {
        console.log("nombre de usuario " + elementos[m])
    }
} */
//for in
/* let usuarios = ["juan", "javi", "eduardo",];
for (const key in usuarios) {
        console.log( "usuarios " + key)
} */

//for off
let usuarioObject = [
    {
        edad: 32,
        nombre: "Javier",
        usuario: 1
    },
    {
        edad: 34,
        nombre: "Eduardo",
        usuario: 2
    }
]

for (const iterator of usuarioObject) {
    console.log(`numero de usuario ${iterator.usuario}: 
    nombre: ${iterator.nombre},
    edad: ${iterator.edad}`)
}

//switch

let suma = 0;
switch (suma) {
    case 0:
        console.log(`el resultado es 0`)
        break;
    case 1:
        console.log(`el resultado es 1`)
        break;
    case 2:
        console.log(`el resultado es 2`)
        break;
    default:
        break;
}