function delta_T() {
    a = parseInt($('#bot').val())
    b = parseInt($('#top').val())
    n = parseInt($('#cant_iteraciones').val())
    delta_control = a

    iteraciones = []
    delta_iteracion = []

    delta_iteracion.push(a)

    val = (b-a)/n

    
    while(delta_control < b){
        if(delta_control == a || delta_control == b){
            iteraciones.push(1)
        }
        else{
            iteraciones.push(2)
        }
        delta_control = Math.round10((delta_control+val), -2)
        delta_iteracion.push(delta_control)
    }
    
    iteraciones.push(1)

    return val;
}

function CalcularPorTrapezoidal(){
    const _delta = delta_T();
    const _func = $('#dataTextArea').val()
    var x = [0]
    var _x = []

    var suma_control = 0
    

    // if(delta_iteracion[delta_iteracion.length-1] != b){
    //     alert('Ocurrio un problema con los datos... Se esperaba {'+b+'}; obtenido{'+delta_iteracion[delta_iteracion.length-1]+'}')
    //     return
    // }

    for(i = 0; i < iteraciones.length; i++){
        control = iteraciones[i] * MathOperator(delta_iteracion[i]-2)
        suma_control += control
        _x.push(control)
    }

    
    var result = (_delta*suma_control)/2

    $('#dataTextArea').val(result)

}

var delta_iteracion = []