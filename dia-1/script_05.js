const arregloNum = [10, 20, 30, 40, 50];

const [primero, segundo]= arregloNum;
console.log("Primero:",primero);
console.log("Segundo:",segundo);


const objPer= {
    nombre: 'María', edad: 28, ciudad:'Santiago'
}

const {nombre, edad, ciudad='Desconocido'} = objPer;

console.log(`${nombre}, tiene ${edad} años, y es de ${ciudad}`);



const { nombre:nombreUsuario, edad:edadUser } = objPer;

console.log('nombreUsuario:',nombreUsuario,edadUser);


function mostraNombre({nombre='--', rol="",edad=0}) {
    console.log(`Hola Yo Soy ${nombre} ${rol} ${edad}`);
    
}
mostraNombre({nombre:'Ana',rol:'Admin'});
mostraNombre(objPer)
