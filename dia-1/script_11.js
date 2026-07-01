function obtenerDatos(exito,time){

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            if(exito){
                resolve({nombre:"Juan", edad:25});
            }else{
                reject(new Error("Error Cargar el Usuario"))
            }
            
        },time);

    });

}

const promesaExitosa= obtenerDatos(true,2000);

promesaExitosa
    .then((rslt)=>console.log(`Se resolvio correctamente ${JSON.stringify(rslt)}`))
    .catch((rslt)=>console.log(`Se resolvio con problemas ${rslt}`));

        
const promesaFallida= obtenerDatos(false,3000);

promesaFallida
    .then((rslt)=>console.log(`Se resolvio correctamente ${rslt.nombre}`))
    .catch((rslt)=>console.log(`Se resolvio con problemas ${rslt}`));