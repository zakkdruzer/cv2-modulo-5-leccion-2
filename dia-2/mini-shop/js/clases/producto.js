export class Producto {
    #id
    #stock
    static #nextId = 1;

    constructor({nombre, precio, categoria, stock = 10}) {
        this.#id = Producto.#nextId++;
        this.#stock = stock;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }

    get id() { return this.#id; }
    get stock() { return this.#stock; }

    agregarStock(cantidad=1) {
        if (isNaN(cantidad)) throw new TypeError("Debe ser un numero");
        if (cantidad < 1) throw new RangeError("Debe ser un cantidad mayor a cero");

        this.#stock += cantidad;
        return this;
    }
    reducirStock(cantidad = 1) {
        if (isNaN(cantidad)) throw new TypeError("Debe ser un numero");
        if (cantidad < 1) throw new RangeError("Debe ser un cantidad mayor a cero");
        if (cantidad > this.#stock)
            throw new Error(`Stock insuficiente: solo hay ${this.#stock} unidades`);
        this.#stock -= cantidad;
        return this;
    }
    toString(){
         return `[${this.categoria.toUpperCase()}] ${this.nombre} — $${this.precio?.toLocaleString('es-CL')} (stock: ${this.#stock})`; 
    }

}