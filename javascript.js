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

  $(".noter-lydoptagelse").click(function(){
      $(".udfordring-dag1").css("background-color", "red");
      $(this).hide();
      $(".noter-lydoptagelse2").fadeIn(500);
  });

  $(".noter-lydoptagelse2").click(function(){
    $(".udfordring-dag1").css("background-color", "white");
    $(this).hide();
    $(".noter-lydoptagelse").fadeIn(500);
  });


});
