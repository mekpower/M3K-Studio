$(document).ready(function () {
  //IMAGE ZOOM with modal------------------------------------------
  console.log('lIGHTBOX YEP')
  var $lightbox = $("#lightbox");

  $('[data-bs-target="#lightbox"]').on("click", function (event) {
    var $img = $(this).find("img"),
      src = $img.attr("src"),
      alt = $img.attr("alt")/*,
      css = {
        maxWidth: $($img).width() - 200,
        maxHeight: $($img).height() - 100,
      }*/;
      
    console.log('url: '+ src);
    $lightbox.find("img").attr("src", src);
    $lightbox.find("img").attr("alt", alt);
    $lightbox.find(".modal-title").text(alt);
    $lightbox.find("img").css({'width':'100%'});
  });

  $lightbox.on("shown.bs.modal", function (e) {
    var $img = $lightbox.find("img");
    $lightbox.find(".modal-dialog").css({ width: $img.width() });
  });
  //------------------------------------------------------------------
});
