$(document).ready(function(){
    $('#show_cant_iteraciones').hide()

    $('div.trapezoidal,div.boole,div.simpson38,div.simpson13,div.simpabierto').hide()
})

$('a[role="data"]').on('click', function(){
    closeCard

    $('div.trapezoidal,div.boole,div.simpson38,div.simpson13,div.simpabierto').hide()

    $($(this).attr('data-ref')).show()

    $('.btn-success').attr({'id': $(this).attr('data-btn'), 'data-type': $(this).attr('data-type')})

    $('h1').text($(this).attr('data-h1'))

    iteraciones = data_iteraciones[$('.btn-success').attr('data-type')]

    $('div.'+$('.btn-success').attr('data-type')).show()
})


const closeCard = ()  => (
    $('.tab-pane').hide()
)


$('.func').on('click', function(){

    data_special_o = $(this).attr('data-special') == "true" ? '(' : ' '
    data_special_c = $(this).attr('data-special') == "true" ? ')' : ''

    $('#dataTextArea').val($(this).text() + data_special_o + data_special_c)
    
    $('.func').addClass('btn3d')

    $(this).toggleClass('btn3d')
    $(this).toggleClass('selected')

})


$('.btn-success').on('click', function(){
    
    switch($(this).attr('id')){
        case 'btn-boole':
            CalcularPorJorgeBoole()
        break

        case 'btn-trapezoidal':
            CalcularPorTrapezoidal()
        break

        case 'btn-simpAbierto':
            CalcularPorSimpsonAbierta()
        break

        case 'btn-simp38':
            CalcularPorSimpson38()
        break

        case 'btn-simp13':
            CalcularPorSimpson13()
        break
    }
    
})

$('#top,#bot,#cant_iteraciones').on('change', function(){

    switch($('.btn-success').attr('id')){
        case 'btn-boole':
            $('#delta').val(delta_B())
            break;

        case 'btn-trapezoidal':
            $('#delta').val(delta_T())
        break;

        case 'btn-simpAbierto':
            $('#delta').val(delta_SA())
        break;

        case 'btn-simp13':
            $('#delta').val(delta_S13())
        break;

        case 'btn-simp38':
            $('#delta').val(delta_S38())
        break;
    }

})


function MathOperator(value){
    result = 0

    switch($('button.selected').attr('data-met')){
        case "Log":
            result = Math.log10(value)
        break;
        case "Ln":
            result = Math.log(value)
        break;
        case "sqr":
            result = Math.sqrt(value)
        break;
        case "sin":
            result = Math.sin(value)
        break;
        case "cos":
            result = Math.cos(value)
        break;
        case "tan":
            result = Math.tan(value)
        break;
        case "asin":
            result = Math.asin(value)
        break;
        case "acos":
            result = Math.acos(value)
        break;
        case "atan":
            result = Math.atan(value)
        break;
        
    }
    
    if($('#checkbox').hasClass('deg'))
        result = result * (Math.PI / 180)


    return result
} 



$('#checkbox').on('click', function(){
    $(this).toggleClass('deg')
})

$('#cant_iteraciones').change(function(){
    n = $(this).val()
    if(n%2!=0 && $('.btn-success').attr('data-type') == "simpabierto"){
        alert('Para Utilizar este metodo, n debe ser numero par')
        $(this).val(0)
    }
})

data_iteraciones = {
    "boole":[7, 32, 12, 32, 7],
    "trapezoidal":[7, 32, 12, 32, 7],
    "simpson13":[1, 4, 1],
    "simpson38":[1, 3, 3, 1]
}

var iteraciones









(function () {
    /**
     * Ajuste decimal de un número.
     *
     * @param {String}  tipo  El tipo de ajuste.
     * @param {Number}  valor El numero.
     * @param {Integer} exp   El exponente (el logaritmo 10 del ajuste base).
     * @returns {Number} El valor ajustado.
     */
    function decimalAdjust(type, value, exp) {
      // Si el exp no está definido o es cero...
      if (typeof exp === "undefined" || +exp === 0) {
        return Math[type](value);
      }
      value = +value;
      exp = +exp;
      // Si el valor no es un número o el exp no es un entero...
      if (isNaN(value) || !(typeof exp === "number" && exp % 1 === 0)) {
        return NaN;
      }
      // Shift
      value = value.toString().split("e");
      value = Math[type](+(value[0] + "e" + (value[1] ? +value[1] - exp : -exp)));
      // Shift back
      value = value.toString().split("e");
      return +(value[0] + "e" + (value[1] ? +value[1] + exp : exp));
    }
  
    // Decimal round
    if (!Math.round10) {
      Math.round10 = function (value, exp) {
        return decimalAdjust("round", value, exp);
      };
    }
    // Decimal floor
    if (!Math.floor10) {
      Math.floor10 = function (value, exp) {
        return decimalAdjust("floor", value, exp);
      };
    }
    // Decimal ceil
    if (!Math.ceil10) {
      Math.ceil10 = function (value, exp) {
        return decimalAdjust("ceil", value, exp);
      };
    }
  })();