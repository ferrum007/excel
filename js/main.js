/*------Сролл до нужного места-------*/
$(".link").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({
        scrollTop: top
    }, 800);
});

// slick
$('.single-slide').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    nextArrow: '<img src="images/slider-next.png" alt="images" class="slick-arrow slider-next">',
    prevArrow: '<img src="images/slider-prev.png" alt="images" class="slick-arrow slider-prev">',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});

// Показать ещё
$(document).ready(function () {
    var list = $(".wrapper-boxes .box");
    var numToShow = 10; //сколько показывать элементов
    var button = $(".shows");
    var numInList = list.length;
    list.hide();
    if (numInList > numToShow) {
        button.show();
    }
    list.slice(0, numToShow).show();
    button.click(function () {
        var showing = list.filter(':visible').length;
        list.slice(showing - 1, showing + numToShow).fadeIn();
        var nowShowing = list.filter(':visible').length;
        if (nowShowing >= numInList) {
            button.hide();
        }
    });
});