(function(){
    "use strict";

    // Define...
    $('#main').css('background-color','orange');

    $('#other-details').hide();

    $('#reset').on('click', function(){
        $('#form')[0].reset();
    });

    $('input[name="celType"]').on('click', function() {
        if ($(this).val() === 3) {
            $('#other-details').removeProp("disabled");
        }
        else {
            $('#other-details').prop("disabled", "disabled");
        }
    });

})();


