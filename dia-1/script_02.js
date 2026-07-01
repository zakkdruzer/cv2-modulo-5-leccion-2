
function sumar(a, b) {
  return a + b;
}
const sumarArrow = (a, b)=> a + b;

const saludar = nombre =>`Hola ${nombre}`;


console.log("suma:",sumar(2, 3));
console.log("sumarArrow:",sumarArrow(2, 3));
console.log("saludar:",saludar("Marco"));

const arrowFn= ()=>{};
//new ArrowFn();


const lista = [1, 2, 3, 4, 5];
const dobles = lista.map(n => n * 2);
console.log("lista",lista);
console.log("dobles",dobles);
