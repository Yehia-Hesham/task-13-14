// alert("Hello");
// var cards = document.getElementsByClassName('card');

$("div.card").click(function(){
    var selector = $(this).attr('data-place');
    $(".content").removeClass("is-active");
    // $("nav-item").removeClass("is-active");
    $(".content[data-place="+selector+"]").addClass("is-active");
});

