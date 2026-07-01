function obtenerDatos(exito){

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            if(exito){
                resolve([1,2,3,4,5]);
            }else{
                reject(new Error("Error Cargar el Usuario"))
            }
            
        },1500);

    });

}


let sumatoria=0;
obtenerDatos(true)
.then((rsl)=>{
    sumatoria= rsl.reduce((acc,val)=>acc+=val ,0);
    console.log("Respondio");
    console.log("sumatoria",sumatoria);
});


