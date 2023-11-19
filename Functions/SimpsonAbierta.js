function delta_SA() {
    a = parseInt($('#bot').val())
    b = parseInt($('#top').val())
    n = parseInt($('#cant_iteraciones').val())

    delta_control = a

    iteraciones = []
    delta_iteracion = []

    delta_iteracion.push(a)

    val = (b-a)/n
    
    for(i = 0; delta_control < b; i++){
        if(delta_control == a || delta_control == b){
            iteraciones.push(1)
        }
        else{
            iteraciones.push((i%2==0 ? 4 : 2))
        }

        if(delta_control.toString().split('.')[1].length >= 6){
            delta_control = Math.round10((delta_control), -6)
            delta_control += 0.000001
        }
        delta_control = Math.round10((delta_control+val), -2)
        delta_iteracion.push(delta_control)
    }
    
    iteraciones.push(1)

    return val;
}


function CalcularPorSimpsonAbierta(){
    const _delta = delta_SA();
    const _func = $('#dataTextArea').val()
    var x = [0]
    var _x = []

    var suma_control = 0
    

    if(delta_iteracion[delta_iteracion.length-1] != b){
        alert('Ocurrio un problema con los datos... Se esperaba {'+b+'}; obtenido{'+delta_iteracion[delta_iteracion.length-1]+'}')
        return
    }

    for(i = 0; i < iteraciones.length; i++){
        control = iteraciones[i] * MathOperator(delta_iteracion[i])
        suma_control += control
        _x.push(control)
    }

    
    var result = (_delta*suma_control)/2

    $('#dataTextArea').val(result)

}

var delta_iteracion = []
