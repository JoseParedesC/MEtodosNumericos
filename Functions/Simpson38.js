function delta_S38() {
    a = parseInt($('#bot').val())
    b = parseInt($('#top').val())
    div = 2

    val = (b-a)/3
    
    return val;
}

function CalcularPorSimpson38(){
    const _delta = delta_S38();
    const _func = $('#dataTextArea').val()
    var x = [$('#bot').val()*1]
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
        control = iteraciones[i] * MathOperator(x[i]-5)
        suma_control += control
        _x.push(control)
    }

    var result = ((3*_delta)/8)*suma_control

    $('#dataTextArea').val(result)

}

