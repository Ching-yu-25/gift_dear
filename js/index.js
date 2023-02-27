function heartShow() {
  if (!$(".photos").hasClass("heart-show")) {
    $(".heart,.photos").addClass("heart-show");
  } else {
    $(".heart,.photos").removeClass("heart-show");
  }
}

function checkPsw(psw) {
  let encodepsw;
  encodepsw = md5(psw);
  encodepsw == "f5c838c78c86699fa2c3d9f8703a051b" ? $(".cover").fadeOut() : $("#psw").val('').addClass("wrong");
}

$(document).ready(function () {
  $('.photos').slick({
    dots: true,
  });


  $(".heart").click(heartShow);

  $(".photos").dblclick(heartShow);

  $(".read-more").click(function () {
    $(".text-inner").addClass("show-more");
    $(".read-more").hide();
  })

  $("#psw").on("keyup", function (e) {
    if (e.which === 13) {
      checkPsw($(this).val());
    }
  })

  $("#openbtn").on("click", function () {
    checkPsw($("#psw").val())
  });
})