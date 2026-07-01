function fetchUsuario(id) {
  return new Promise(resolve =>
    setTimeout(() => resolve({ id, nombre: 'Ana López', edad: 28, pais: 'cl' })
    , 1000)
  );
}

fetchUsuario(2)
    .then((rslt)=>{    
        console.log('primera promesa',JSON.stringify(rslt)) ;
      return rslt.nombre;
    })
    .then((rslt)=> {
        console.log('segunda promesa',rslt)
        return `El usuario ${rslt} esta logueado`;
    })
    .then((rslt)=> {
        console.log('tercera promesa ',rslt);
        throw new Error("Error en el 3er then");
    })
    .catch(err=>console.log('Atajado por catch',err) );
