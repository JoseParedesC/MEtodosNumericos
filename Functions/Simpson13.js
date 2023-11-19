function delta_S13() {
    a = parseInt($('#bot').val())
    b = parseInt($('#top').val())
    div = 2

    val = (b-a)/2
    
    return val;
}

function CalcularPorSimpson13(){
    const _delta = delta_S13();
    const _func = $('#dataTextArea').val()
    var x = [0]
    var _x = []

    var suma_control = 0

    iteraciones.forEach(element => {
        x.push(x[x.length-1] + _delta)
    });

    // if(x[x.length-1] != b){
    //     alert('Ocurrio un problema con los datos... Se esperaba {'+b+'}; obtenido{'+x[x.length-1]+'}')
    //     return
    // }


    for(i = 0; i < iteraciones.length; i++){
        control = iteraciones[i] * MathOperator(x[i]+3)
        suma_control += control
        _x.push(control)
    }

    var result = (_delta*suma_control)/3

    $('#dataTextArea').val(result)

}

