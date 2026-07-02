import { Producto } from './producto.js'


export class ProductoFisico extends Producto {
    constructor( { nombre, precio, categoria, stock = 10,peso}) {
        super({nombre, precio, categoria, stock});
        this.peso = peso;
    }

    calcularEnvio(){
        return this.peso * 500; // 500 CLP por kg
    }
    toString() {
        return `${super.toString()} 📦 ${this.peso}kg | envío: $${this.calcularEnvio().toLocaleString('es-CL')}`;
    }
}