
$(document).ready(function () {

  const maxChar = 140;


  $('#tweet-text').on('input', function () {

    let remaining = maxChar - $(this).val().length;
    const counter = $(".counter");
    $(counter).text(remaining);
    let count = $(this).val().length;

    if (count > maxChar) {
      $(counter).addClass("counterDanger");
    } else {
      $(counter).removeClass("counterDanger");
    }

  })



  //Toggle new tweet
  $(".nav-text").click(() => {
    $(".new-tweet").toggle();
    $("#tweet-text").focus();

  })



});
