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
    var complemento_operacion = parseInt(valor_numerico)

    var suma_control = 0
    

    // if(delta_iteracion[delta_iteracion.length-1] != b){
    //     alert('Ocurrio un problema con los datos... Se esperaba {'+b+'}; obtenido{'+delta_iteracion[delta_iteracion.length-1]+'}')
    //     return
    // }

    for(i = 0; i < iteraciones.length; i++){

        control = 0

        inc_elevado =  Math.pow(delta_iteracion[i], (data_elevado["isElevado"] ? (data_elevado["incognita"] ? parseInt(data_elevado["valor"]) : 1) : 1))
        con_elevado =  Math.pow(complemento_operacion, parseFloat(data_elevado["isElevado"] ? (data_elevado["constante"] ? parseInt(data_elevado["valor"]) : 1) : 1))

        switch(valor_operando){
            case "+":
                control = iteraciones[i] * MathOperator(inc_elevado + con_elevado)
            break

            case "-":
                control = iteraciones[i] * MathOperator(inc_elevado - con_elevado)
            break

            case "*":
                control = iteraciones[i] * MathOperator(inc_elevado * con_elevado)
            break

            case "/":
                control = iteraciones[i] * MathOperator(inc_elevado / con_elevado)
            break
        }

        suma_control += control
        _x.push(control)
    
        tr_tbody = $('<tr />')
        tr_tbody.append(`<th scope="row">${delta_iteracion[i]}</th><td>${$('.func.selected').text()}(${$('#dataTextArea').val()})</td><td>${iteraciones[i]} * ${$('.func.selected').text()}(${inc_elevado} ${valor_operando} ${con_elevado})</td><td>${control}</td>`)
        $('#TableResult tbody').append(tr_tbody)

    }   

    tr_tbody = $('<tr />')
    tr_tbody.append(`<th scope="row">Σ</th><td></td><td></td><td><strong>${suma_control}</strong></td>`)
    $('#TableResult tbody').append(tr_tbody)

    
    var result = (_delta*suma_control)/2

    $('#resultTextArea').val(result)

}

var delta_iteracion = []