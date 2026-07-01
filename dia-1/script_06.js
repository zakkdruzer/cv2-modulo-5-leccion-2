const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];


const combinado = [...arr1, ...arr2, 7, 8, 9];

const otroArr = arr1;
const otroArr2 = [...arr1];

/*. Mismo espcio de memoria
    otroArr = arr1
       |        |
       |        |
       |        |
       V        V    
     +-------------+
     |    M00      |
     |             |


*/
arr1.push(11);

console.log('otroArr',otroArr);
console.log('arr1',arr1);


/*. Mismo espcio de memoria
    otroArr2 = [...arr1]


    otroArr2   arr1
       |        |
       |        |
       |        |
       V        V    
     +---+    +---+
     |M00|.   |M01|
                  


*/
arr1.push(12);

console.log('arr1',arr1);
console.log('otroArr2',otroArr2);
console.log(combinado);


const base    = { tema: 'oscuro', idioma: 'es' };
const usuario = { nombre: 'Ana', rol: 'admin' };

const nuevObj= {...base, ...usuario};
console.log("base",base);
console.log("usuario",usuario);
console.log("nuevObj",nuevObj);

