const producto = {
  nombre:    'Laptop Pro',
  precio:    999,
  descuento: 0.15
};

const precioFinal = producto.precio * (1 - producto.descuento);

const resumen =`
════════════RESUMEN═══════════════
Producto: ${producto.nombre}
$ Original:$ ${producto.precio}
$ Descuento:$ ${producto.descuento * 100}%
$ Final:$ ${producto.precioFinal}
══════════════════════════════════
`;


console.log(resumen);

const stock = 3;
console.log(`Stock: ${stock > 0 ? `${stock} unidades` : 'Sin stock'}`);


const fnMayus= (txt)=> txt.toUpperCase();

console.log(`Hola: ${ fnMayus('Juan Jose') }`);
