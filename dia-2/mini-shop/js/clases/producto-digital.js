import { Producto } from './producto.js'

export class ProductoDigital extends Producto {
  constructor({nombre, precio, categoria, formato = 'PDF', licencias = 1 }) {
    super({ nombre, precio, categoria, stock: 0 });
    this.formato   = formato;
    this.licencias = licencias;
  }

  toString() {
    return `${super.toString()} 📥 ${this.formato} | ${this.licencias} lic.`;
  }
}