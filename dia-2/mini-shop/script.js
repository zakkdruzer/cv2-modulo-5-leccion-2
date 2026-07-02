import {mostrarLogo} from './js/utils/logo-ascii.js';
import {Producto} from './js/clases/producto.js';
import {ProductoFisico} from './js/clases/producto-fisico.js';
import {ProductoDigital} from './js/clases/producto-digital.js';
import {Catalogo} from './js/clases/catalogo.js';
import {Carrito} from './js/clases/carrito.js';
import {validarCarrito,
        procesarPago,
        emitirTicket} from './js/promesas/promesas.js';

mostrarLogo();

const catalogo = new Catalogo();

catalogo
  .agregar(new ProductoFisico({  nombre: 'Laptop Pro',       precio: 999000, categoria: 'tech', peso: 1.8   }))
  .agregar(new ProductoFisico({  nombre: 'Auriculares BT',   precio: 149000, categoria: 'tech', peso: 0.3   }))
  .agregar(new ProductoDigital({ nombre: 'Curso JavaScript', precio: 49900,  categoria: 'edu',  formato: 'Video' }))
  .agregar(new ProductoFisico({  nombre: 'Polera Básica',    precio: 14990,  categoria: 'ropa', peso: 0.3   }));

console.log('📦 Catálogo cargado:');
catalogo.listar().forEach(p => console.log(' ', p.toString()));
console.log('Categorías:', catalogo.categorias);

// El cliente arma su carrito
const carrito = new Carrito();
carrito
  .agregar(catalogo.buscarPorId(1))  // Laptop
  .agregar(catalogo.buscarPorId(2), 2) // 2 auriculares
  .agregar(catalogo.buscarPorId(3));     // Curso

carrito.aplicarCupon('TECH10');



console.log(`\n💰 Subtotal: $${carrito.subtotal.toLocaleString('es-CL')} → Total con cupón: $${carrito.total.toLocaleString('es-CL')}`);


console.log('\n🔄 Iniciando checkout...');
validarCarrito(carrito)
  .then(c  => procesarPago(c, 'crédito'))
  .then(c  => emitirTicket(c, 'crédito'))
  .then(id => console.log(`\n🎉 ¡Compra exitosa! Orden: ${id}`))
   .catch(e => console.log('❌ Error:', e.message));