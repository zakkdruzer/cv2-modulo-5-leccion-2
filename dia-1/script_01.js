let variableGlobal = "Hola";
function demostrarScope() {

    var varVariable = 'soy VAR';
    let letVariable = 'soy LET';
    const CONSTVARIABLE = 'soy CONST';

    // var: sí accesible fuera del bloque
    console.log('var  →', varVariable);
    console.log('let   →', variableGlobal);

}
console.log(varVariable);

demostrarScope();