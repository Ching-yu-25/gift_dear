$(document).ready(function () {
  $('.photos').slick({
    dots: true,
  });
})

$(".heart").click(function () {
  if (!$(".photos").hasClass("heart-show")) {
    $(this).addClass("heart-show");
    $(".photos").addClass("heart-show");
  } else {
    $(this).removeClass("heart-show");
    $(".photos").removeClass("heart-show");
  }

})

$(".read-more").click(function () {
  $(".text-inner").addClass("show-more");
})