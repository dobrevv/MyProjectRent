$(document).ready(function(){

var textSlider =  $('.jc-slider');
var sliderPrice = $('#moneyRange');
var amount =  $('#amount');
var selectDate = $('.selectDate')

    textSlider.jcSlider({
            animationIn: 'bounceInRight',
            animationOut: 'bounceOutLeft',
            stopOnHover: false
        });

    sliderPrice.slider({
        range: true,
        min: 15,
        max: 100,
        values: [30, 60],
        slide: function (event, ui) {
            amount.text(ui.values[0] + ' - ' + ui.values[1] + 'лв');


        }
    });
    amount.text( sliderPrice.slider( "values", 0 ) + ' - ' + sliderPrice.slider( "values", 1 ) + 'лв');
    selectDate.datepicker();







});
