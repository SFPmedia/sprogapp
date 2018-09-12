$(document).ready(() => {

alert("Alert");

  $(".udfordring-udfordring1 .udfordring-noncompletion").click(function(){
        $(".udfordring-dag1").css("background-color", "red");
        $(this).hide();
        $(".udfordring-udfordring1 .udfordring-completion").fadeIn(500);
  });

  $(".udfordring-udfordring1 .udfordring-completion").click(function(){
      $(".udfordring-dag1").css("background-color", "white");
      $(this).hide();
      $(".udfordring-udfordring1 .udfordring-noncompletion").fadeIn(500);
  });

  $(".spilside-valgmuligheder .spilside-sandtvalg1").click(function(){
      $(this).css("background-color", "green");
  });

  $(".spilside-valgmuligheder .spilside-sandtvalg2").click(function(){
      $(this).css("background-color", "green");
  });

  $(".spilside-valgmuligheder .spilside-forkertvalg1").click(function(){
      $(this).css("background-color", "red");
  });

  $(".spilside-valgmuligheder .spilside-forkertvalg2").click(function(){
      $(this).css("background-color", "red");
  });

  var flot = 'flot.html';

  $('.spilside-sandtvalg1').click(function(e) {
    e.preventDefault();
    setTimeout(function() { window.location = flot }, 2000, this.href);
  });

  $('.spilside-sandtvalg2').click(function(e) {
    e.preventDefault();
    setTimeout(function() { window.location = flot }, 2000, this.href);
  });


  $(".noter-lydoptagelse").click(function(){
      $(this).hide();
      $(".noter-lydoptagelse2").fadeIn(500);
  });

  $(".noter-lydoptagelse2").click(function(){
    $(this).hide();
    $(".noter-lydoptagelse").fadeIn(500);
  });

  $(".record_lydoptagelse").click(function(){
      $(this).hide();
      $(".record_stop").hide();
      $(".record_lydoptagelse2").fadeIn(500);
      $(".record_stop2").fadeIn(500);
  });

  $(".record_stop2").click(function(){
    $(this).hide();
    $(".record_lydoptagelse2").hide();
    $(".record_lydoptagelse").fadeIn(500);
    $(".record_stop").fadeIn(500);
    $(".record_play").fadeIn(500);
  });


});
