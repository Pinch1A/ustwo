(function(){
    "use strict";

    // Define...


    //$('#other-details').hide();

    $('#reset').on('click', function(){
        $('#form')[0].reset();
    });

    $('input[name="celType"]').on('change', function() {
        if ($('#radio_other').is(':checked')) {
            $('#other-details').removeAttr('disabled');
            $('#other-details').removeClass('disabled');
        }
        else {
            $('#other-details').prop("disabled", "disabled").addClass('disabled');
        }
    });

})();


