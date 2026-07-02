
export class Catalogo{
    #productos  = new Map();
    #categorias = new Set();

    agregar(producto){
        this.#productos.set(producto.id, producto);
        this.#categorias.add(producto.categoria);
        
        return this;
    }

    buscarPorId(id){
        if (isNaN(id)) throw new TypeError("Debe ser un numero");
        if (id < 1) throw new RangeError("Debe ser un id mayor a cero");

        return this.#productos.get(id) || null;
    }

    buscar(termino){
        if(!termino) return [];

        const term= termino.toLowerCase();
        return [...this.#productos.values()].filter((p)=>{ 
            return p.nombre.toLowerCase().includes(term)  ||
                   p.categoria.toLowerCase().includes(term) 
        });
    }

    porCategoria(cat) {
        if(!cat) return [];
        return [...this.#productos.values()]
            .filter(p => p.categoria.toLowerCase() === cat.toLowerCase());
    }

    masBaratos(limite) {
        return [...this.#productos.values()]
                .filter(p => p.precio <= limite)
                .sort((a, b) => a.precio - b.precio);
    }

    listar() { return [...this.#productos.values()]; }

    get categorias() { return [...this.#categorias]; }
    get totalProductos()      { return this.#productos.size; }
}