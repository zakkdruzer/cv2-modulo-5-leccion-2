const nros= new Set([1,3,4,5,6,2]);

console.log('Set inicial:', [...nros]);  


nros.add(5);

console.log('Set:', [...nros]);

nros.delete(2);
console.log('Set:', [...nros]);
console.log('Tienes el 2:',nros.has(2));
console.log('Tienes el 3:',nros.has(3));


nros.forEach((n)=> console.log(n));


const tags = ['js', 'web', 'js', 'es6', 'web'];
const uniqueTags = [...new Set(tags)];
console.log('tags únicos:', uniqueTags);


