

const division= (num1, num2)=> {

    if( isNaN(num1))throw new TypeError("Debes Ingresar un número valido en el primer parametro")
    if( isNaN(num2))throw new TypeError("Debes Ingresar un número valido en el segundo parametro")
    
    if(num2 === 0 )throw new RangeError("segundo parametro no puede ser 0");
    
   // throw new Error();
    return num1/num2;

};



try {
   division(4,3); 
} catch (err) {

    if(err instanceof TypeError){
        console.log(err);
    }else if (err instanceof RangeError) {
        console.log("Error de Divison por ZERO");        
    }else {
        console.log("Error inesperado");        
    }
    
    
}finally{
    console.log("✅  Me Ejecuto al final siempre");
    
}

