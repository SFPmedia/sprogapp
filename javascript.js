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

$(".spilside-valgmuligheder .spilside-valg1").click(function(){
    $(".spilside-valg1").css("background-color", "green");
});

$(".spilside-valgmuligheder .spilside-valg2").click(function(){
    $(".spilside-valg2").css("background-color", "red");
});








// Pause knap
$(".pause-knap").click(function(){
    $("#UHvideo").get(0).pause();
    $(this).hide();
    $(".play-knap").fadeIn(500);
  });

// Play knap
$(".play-knap").click(function(){
  $("#UHvideo").get(0).play();
  $(this).hide();
  $(".pause-knap").fadeIn(500);
});


// Mute knap
$(".muted-knap").click(function(){
  $("#UHvideo").get(0).muted = true;
  $(this).hide();
  $(".unmuted-knap").fadeIn(500);
});


// Unmute knap
$(".unmuted-knap").click(function(){
  $("#UHvideo").get(0).muted = false;
  $(this).hide();
  $(".muted-knap").fadeIn(500);
});



// Skjul elementer
  $(".hide_show_knapper h4").click(function(){
    $(".ytikon").hide();
    $(".fbikon").hide();
    $(".intro h3").hide();
    $(".intro img").hide();
    $(this).hide();
    $(".hide_show_knapper h5").fadeIn(500);
  });


// Vis elementer
  $(".hide_show_knapper h5").click(function(){
    $(".fbikon").show();
    $(".ytikon").show();
    $(".intro img").show();
    $(".intro h3").show();
    $(this).hide();
    $(".hide_show_knapper h4").fadeIn(500);
  });


// Burger menu vis
  $(".burger-menu-toggle").click(function(){
    $(".burger-menu-udfoldet").show();
  });

// Burger menu skjul
  $(".luk-menu h3").click(function(){
    $(".burger-menu-udfoldet").hide();
  });




});
