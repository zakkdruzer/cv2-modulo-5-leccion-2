export class Carrito {
    #items = new Map();// productId → { producto, cantidad }
    #cuponesUsados = new Set();
    #descuento = 0;

    static #CUPONES = { 'PROMO20': 0.2, 'TECH10': 0.1, 'EDU30': 0.3 };


    agregar(producto, cantidad = 1) {
        const existente = this.#items.get(producto.id);
        const itm = (existente) ? { ...existente, cantidad: existente.cantidad + cantidad }
            : { producto, cantidad }


        this.#items.set(producto.id, itm);
        return this;
    }

    quitar(productoId) {
        this.#items.delete(productoId);
        return this;
    }
    aplicarCupon(codigo) {
        if (this.#cuponesUsados.has(codigo)) throw new Error(`Cupón "${codigo}" ya fue aplicado`);

        const pct = Carrito.#CUPONES[codigo];

        if (!pct) throw new Error(`Cupón "${codigo}" no válido`);

        this.#cuponesUsados.add(codigo);
        this.#descuento += pct;
        console.log(`✅ Cupón ${codigo} aplicado: -${pct * 100}%`);
        return this;
    }
    get subtotal() {
        return [...this.#items.values()]
            .reduce((acc, { producto, cantidad }) => acc + producto.precio * cantidad, 0);
    }

    get total() {
        return this.subtotal * (1 - this.#descuento);
    }

    get resumen() {
        return [...this.#items.values()].map(({ producto, cantidad }) => ({
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad,
            subtotal: producto.precio * cantidad
        }));
    }

}