$(".input").focus(function() {
    $(".close-btn").addClass("active");
});

$(".input").focusout(function() {
    $(".close-btn").removeClass("active");
    $(this).val("");
});