const mapa= new Map();

mapa.set("clave1","Juan");
mapa.set(2,{titulo:"Condorito"});


console.log(mapa);
console.log(mapa.size);
console.log(mapa.get("clave1"));
console.log(mapa.get(2));


mapa.forEach((value,key)=>console.log(`key:${key}  value:${value}`))