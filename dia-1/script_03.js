function crearUsuario(nombre, rol = 'visitante', activo = true) {
  console.log(`${nombre} | rol: ${rol} | activo: ${activo}`);
}

crearUsuario("Ana");
crearUsuario("Luis","Admin");
crearUsuario("Pedro","Editor",false);
crearUsuario("María",null);

const potencia = (base, exponente = 2) => base ** exponente;

console.log('5²  =', potencia(5));
console.log('2³  =', potencia(2, 3));