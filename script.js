jQuery('document').ready(function() {
    jQuery('#calculate').on('click', function() {
        // iniciate variables
        var hour, min, hourtotal, mintotal, buffer, is60;
        // убираем обязательность 0 на полях ввода минут и часов
        if (jQuery('#hour').val() == '') {
            hour = 0;
        } else {
            hour = parseInt(jQuery('#hour').val());
        }
        if (jQuery('#min').val() == '') {
            min = 0;
        } else {
            min = parseInt(jQuery('#min').val());
        }
        //calculate 
        hourtotal = parseInt(jQuery('#hour-total').text()) + hour;
        mintotal = parseInt(jQuery('#min-total').text()) + min;
        //change
        jQuery("#hour-total").html((hourtotal));
        jQuery("#min-total").html((mintotal));
        // optoin change
        // tva
        if (jQuery("#type1").is(":checked")) {
            // calc total option
            buffer = parseInt(jQuery('#tva-total').text()) + 1;
            // rewrite selector
            jQuery("#tva-total").html(buffer);
            // selected check reset
            jQuery("#type1").prop('checked', false);
            buffer = 0;
        }
        // sma
        if (jQuery("#type2").is(":checked")) {
            buffer = parseInt(jQuery('#sma-total').text()) + 1;
            jQuery("#sma-total").html(buffer);
            jQuery("#type2").prop('checked', false);
            buffer = 0;
        }
        // ivl
        if (jQuery("#type3").is(":checked")) {
            buffer = parseInt(jQuery('#ivl-total').text()) + 1;
            jQuery("#ivl-total").html(buffer);
            jQuery("#type3").prop('checked', false);
            buffer = 0;
        }
        // sma+ivl
        if (jQuery("#type4").is(":checked")) {
            buffer = parseInt(jQuery('#msa-sa-total').text()) + 1;
            jQuery("#msa-sa-total").html(buffer);
            jQuery("#type4").prop('checked', false);
            buffer = 0;
        }
        // pvtb+ivl
        if (jQuery("#type5").is(":checked")) {
            buffer = parseInt(jQuery('#msa-pv-total').text()) + 1;
            jQuery("#msa-pv-total").html(buffer);
            jQuery("#type5").prop('checked', false);
            buffer = 0;
        }
        // ea+ivl
        if (jQuery("#type6").is(":checked")) {
            buffer = parseInt(jQuery('#msa-ea-total').text()) + 1;
            jQuery("#msa-ea-total").html(buffer);
            jQuery("#type6").prop('checked', false);
            buffer = 0;
        }
        // ea+ivl
        if (jQuery("#type7").is(":checked")) {
            buffer = parseInt(jQuery('#sa-ea-total').text()) + 1;
            jQuery("#sa-ea-total").html(buffer);
            jQuery("#type7").prop('checked', false);
            buffer = 0;
        }
        // calc min to hour
        if (parseInt(jQuery('#min-total').text()) > 60) {
            //if (jQuery('#hour').text() == '') {
            //    jQuery("#hour").html('0');
            //}
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
            jQuery('#hour').val(jQuery('#hour').val() - 1)
        }
    });
    jQuery('#hour1').on('click', function() {
        delteZeroHour('#hour')
        jQuery('#hour').val(parseInt(jQuery('#hour').val()) + 1)
    });
    jQuery('#hour2').on('click', function() {
        delteZeroHour('#hour')
        jQuery('#hour').val(parseInt(jQuery('#hour').val()) + 2)
    });
    jQuery('#hour3').on('click', function() {
        delteZeroHour('#hour')
        jQuery('#hour').val(parseInt(jQuery('#hour').val()) + 3)
    });
    jQuery('#hour4').on('click', function() {
        delteZeroHour('#hour')
        jQuery('#hour').val(parseInt(jQuery('#hour').val()) + 4)
    });
    // button min
    jQuery('#min-1').on('click', function() {
        delteZeroHour('#min')
        if (jQuery('#min').val() >= 1)
            jQuery('#min').val(parseInt(jQuery('#min').val()) - 1)
    });
    jQuery('#min-5').on('click', function() {
        delteZeroHour('#min')
        if (jQuery('#min').val() >= 5)
            jQuery('#min').val(parseInt(jQuery('#min').val()) - 5)
    });
    jQuery('#min5').on('click', function() {
        delteZeroHour('#min')
        jQuery('#min').val(parseInt(jQuery('#min').val()) + 5)
    });
    jQuery('#min10').on('click', function() {
        delteZeroHour('#min')
        jQuery('#min').val(parseInt(jQuery('#min').val()) + 10)
    });
    jQuery('#min15').on('click', function() {
        delteZeroHour('#min')
        jQuery('#min').val(parseInt(jQuery('#min').val()) + 15)
    });
    jQuery('#min30').on('click', function() {
        delteZeroHour('#min')
        jQuery('#min').val(parseInt(jQuery('#min').val()) + 30)
    });
});

function delteZeroHour(id) {
    if (jQuery(id).val() == '') {
        jQuery(id).val('0')
    }
}