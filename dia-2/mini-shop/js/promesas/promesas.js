export const validarCarrito = ({ resumen, total }) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (resumen.length === 0) {
                reject(new Error('El carrito está vacío'));
                return;
            }
            console.log(`✅ Carrito válido: ${resumen.length} producto(s) | $${total.toLocaleString('es-CL')}`);
            resolve({ resumen, total });
        }, 1000);


    });
}


export const  procesarPago=({ resumen, total }, metodo = 'débito') =>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (metodo === 'tarjeta_robada') {
        reject(new Error(`Pago rechazado: ${metodo}`));
        return;
      }
      const transaccion = `TXN-${Math.random().toString(36).slice(2,8).toUpperCase()}`;
      console.log(`💳 Pago aprobado [${metodo}] → ${transaccion}`);
      resolve({ resumen, total, metodo, transaccion });
    }, 1000);
  });
}



export const emitirTicket=({ resumen, total, metodo, transaccion }) =>{
  return new Promise(resolve => {
    setTimeout(() => {
      const orden = `ORD-${Date.now().toString(36).toUpperCase().slice(-6)}`;
      const detalle = resumen.map(({ nombre, cantidad, subtotal }) =>
        `  • ${nombre} x${cantidad} = $${subtotal.toLocaleString('es-CL')}`
      ).join('\n');
      const ticket = `
=== ORDEN ${orden} ===
${detalle}
Total: $${total.toLocaleString('es-CL')}
Método: ${metodo} | TX: ${transaccion}
==================`;
      console.log(ticket);
      resolve(orden);
    }, 200);
  });
}
