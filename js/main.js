$(document).ready(function(){


        $('.jc-slider').jcSlider({
            animationIn: 'bounceInRight',
            animationOut: 'bounceOutLeft',
            stopOnHover: false
        });

    var s1 = $("#moneyRange").freshslider({
        range:true,
        text: false,
        min: 15,
        onchange:function(low, high){
           var getPrice = document.querySelector(".price");
               getPrice.innerHTML = low  + ' - ' +  high + ' лв';
        }
    });






});