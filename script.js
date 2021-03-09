jQuery('#calculate').on('click', function() {
    // iniciate variables
    var hour, min, hourtotal, mintotal, buffer, is60;
    // убираем обязательность 0 на полях ввода минут и часов
    hour = jQuery('#hour').val() == '' ? 0 : parseInt(jQuery('#hour').val());
    min = jQuery('#min').val() == '' ? 0 : parseInt(jQuery('#min').val());

    // блок подсказок
    if (hour <= 0 && min <= 0) {
        alert('Не задано время операции');
    }
    if (!jQuery("#type1").is(":checked") && !jQuery("#type2").is(":checked") && !jQuery("#type3").is(":checked") && !jQuery("#type4").is(":checked") && !jQuery("#type5").is(":checked") && !jQuery("#type6").is(":checked") && !jQuery("#type7").is(":checked")) {
        alert('Не выбран тип операции')
    }
    // запуск просчета только если заполнены данные
    if ((hour >= 0 || min >= 0) && (jQuery("#type1").is(":checked") || jQuery("#type2").is(":checked") || jQuery("#type3").is(":checked") || jQuery("#type4").is(":checked") || jQuery("#type5").is(":checked") || jQuery("#type6").is(":checked") || jQuery("#type7").is(":checked"))) {
        //calculate 
        hourtotal = parseInt(jQuery('#hour-total').text()) + hour;
        mintotal = parseInt(jQuery('#min-total').text()) + min;
        //change
        jQuery("#hour-total").html((hourtotal));
        jQuery("#min-total").html((mintotal));
        // optoin change
        addTypeOper("#type1", "#tva-total"); // tva
        addTypeOper("#type2", "#sma-total"); // sma
        addTypeOper("#type3", "#ivl-total"); // ivl
        addTypeOper("#type4", "#msa-sa-total"); // sma+ivl
        addTypeOper("#type5", "#msa-pv-total"); // pvtb+ivl
        addTypeOper("#type6", "#msa-ea-total"); // ea+ivl
        addTypeOper("#type7", "#sa-ea-total"); // ea+ivl
        // calc min to hour
        if (parseInt(jQuery('#min-total').text()) > 60) {
            var numhour, nummin, hourrez;
            buffer = parseInt(jQuery('#min-total').text());
            nummin = buffer % 60;
            numhour = (buffer - buffer % 60) / 60;
            hourrez = parseInt(jQuery('#hour-total').text()) + numhour;

            jQuery("#hour-total").html((hourrez));
            jQuery("#min-total").html((nummin));
        }
        // calc min total
        var calc;
        calc = hourtotal * 60 + mintotal
        jQuery("#calc-min").html(calc);
        // calc total operation
        var numoper;
        numoper = parseInt(jQuery('#tva-total').text()) + parseInt(jQuery('#sma-total').text()) + parseInt(jQuery('#ivl-total').text()) + parseInt(jQuery('#msa-sa-total').text()) + parseInt(jQuery('#msa-pv-total').text()) + parseInt(jQuery('#msa-ea-total').text()) + parseInt(jQuery('#sa-ea-total').text());
        jQuery("#calc-oper").html((numoper));
        // сбрасываем поле ввода минут и часов
        jQuery('#hour').val('');
        jQuery('#min').val('');

    }



});
// reset input
jQuery('#reset').on('click', function() {
    jQuery('#hour').val('');
    jQuery('#min').val('');
    jQuery("#type1").prop('checked', false);
    jQuery("#type2").prop('checked', false);
    jQuery("#type3").prop('checked', false);
    jQuery("#type4").prop('checked', false);
    jQuery("#type5").prop('checked', false);
    jQuery("#type6").prop('checked', false);
    jQuery("#type7").prop('checked', false);
});
// reset data
jQuery('#resetdata').on('click', function() {
    jQuery('#hour-total').html('0');
    jQuery('#min-total').html('0');
    jQuery('#tva-total').html('0');
    jQuery('#sma-total').html('0');
    jQuery('#ivl-total').html('0');
    jQuery('#msa-sa-total').html('0');
    jQuery('#msa-pv-total').html('0');
    jQuery('#msa-ea-total').html('0');
    jQuery('#sa-ea-total').html('0');
    jQuery('#calc-min').html('0');
    jQuery('#calc-oper').html('0');
    jQuery('#comment').val('');
});
// button hour
jQuery('#hour-1').on('click', function() {
    if (jQuery('#hour').val() >= 1) {
        changeVal('#hour', -1)
    }
});
jQuery('#hour1').on('click', function() {
    changeVal('#hour', 1)
});
jQuery('#hour2').on('click', function() {
    changeVal('#hour', 2)
});
jQuery('#hour3').on('click', function() {
    changeVal('#hour', 3)
});
jQuery('#hour4').on('click', function() {
    changeVal('#hour', 4)
});
// button min
jQuery('#min-1').on('click', function() {
    if (jQuery('#min').val() >= 1)
        changeVal('#min', -1)
});
jQuery('#min-5').on('click', function() {
    if (jQuery('#min').val() >= 5)
        changeVal('#min', -5)
});
jQuery('#min5').on('click', function() {
    changeVal('#min', 5)
});
jQuery('#min10').on('click', function() {
    changeVal('#min', 10)
});
jQuery('#min20').on('click', function() {
    changeVal('#min', 20)
});
jQuery('#min30').on('click', function() {
    changeVal('#min', 30)
});


function delteZero(id) {
    if (jQuery(id).val() == '') {
        jQuery(id).val('0')
    }
}
// передаем селектор к которому добавить, убрать, и значение
function changeVal(id, value) {
    delteZero(id)
    jQuery(id).val(parseInt(jQuery(id).val()) + value)
}
//передаем тип отмеченного селектора и ячейку к которой добавить 1
function addTypeOper(idChecker, idTypeOperTotal) {
    if (jQuery(idChecker).is(":checked")) {
        // calc total option
        buffer = parseInt(jQuery(idTypeOperTotal).text()) + 1;
        // rewrite selector
        jQuery(idTypeOperTotal).html(buffer);
        // selected check reset
        jQuery(idChecker).prop('checked', false);
        buffer = 0;
    }
}