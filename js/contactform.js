jQuery(document).ready(function ($) {

    $(".ajax-contact-form").submit(function () {
        var str = $(this).serialize();

        $.ajax({
            type: "POST",
            url: "../send/contact.php",
            data: str,
            success: function (msg) {
                if (msg == 'OK') {
                    $('#modal').modal('hide');
                } else {
                    result = msg;
                }
                $("#modal2").modal('show');
            }
        });
        return false;
    });
});