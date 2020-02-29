$(function () {

    $('.burger-menu').click(function () {

        $('.burger-menu').toggleClass('burger-menu_active');

    })

    $(document).click(function (event) {

        if ($(event.target).closest(".burger-menu").

            length ) return;

        $('.burger-menu').removeClass('burger-menu_active');

        event.stopPropagation();

    });

})