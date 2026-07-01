function suma(...numeros) {
  console.log('argumentos recibidos:', numeros);
  return numeros.reduce((acc, n) => acc + n, 0);
}

console.log(suma(1,2,3,4,5,6));
console.log(suma(1));
console.log(suma(1,2,3));
 

const loguear= (nivel, ...mensajes)=>{
    mensajes.forEach((m)=>console.log(`[${nivel.toUpperCase()}]`, m));
};


loguear('info','Iniciando','servidor','de calculo')