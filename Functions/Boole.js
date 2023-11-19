function delta_B() {
    a = parseInt($('#bot').val())
    b = parseInt($('#top').val())
    div = 4

    val = (b-a)/4

    return val;
}

function CalcularPorJorgeBoole(){
    const _delta = delta_B();
    const _func = $('#dataTextArea').val()
    var x = [0]
    var _x = []

    var suma_control = 0

    iteraciones = data_iteraciones.boole

    iteraciones.forEach(element => {
        x.push(x[x.length-1] + _delta)
    });

    // if(x[x.length-1] != b){
    //     alert('Ocurrio un problema con los datos... Se esperaba {'+b+'}; obtenido{'+x[x.length-1]+'}')
    //     return
    // }


    for(i = 0; i < iteraciones.length; i++){
        control = iteraciones[i] * MathOperator(x[i]+4)
        suma_control += control
        _x.push(control)
    }

    var result = ((2*_delta)/45)*suma_control

    $('#dataTextArea').val(result)

}