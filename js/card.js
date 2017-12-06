$(document).ready(function(){

$(".text").click(function(){
  $("html, body").animate({
    scrollTop:$("#selection").offset().top
  }, 2000);
});

$("#color1").click(function(){
  $("#widget").css("background", "#ef263a");
});

$("#color2").click(function(){
  $("#widget").css("background", "#ef2573");
});

$("#color3").click(function(){
  $("#widget").css("background", "#e825ef");
});

$("#color4").click(function(){
  $("#widget").css("background", "#275ef5");
});

$("#color5").click(function(){
  $("#widget").css("background", "#25a4ef");
});

$("#color6").click(function(){
  $("#widget").css("background", "#25e8ef");
});

$("#color7").click(function(){
  $("#widget").css("background", "#25efab");
});

$("#color8").click(function(){
  $("#widget").css("background", "#25ef43");
});

$("#color9").click(function(){
  $("#widget").css("background", "#9eef25");
});

$("#color10").click(function(){
  $("#widget").css("background", "#efe825");
});

$("#color11").click(function(){
  $("#widget").css("background", "#efd425");
});

$("#color12").click(function(){
  $("#widget").css("background", "#ef4625");
});

$("#upload").click(function(){
   $('input[type=file]').trigger('click');
});


$("#cake").draggable();

$("#cake1").draggable();

$("#cake2").draggable();

$("#cake3").draggable();

$("#cake4").draggable();

$("#widget").droppable();

$("#icon1").click(function(){
  $("#cake").css("opacity", 1);
  $("#cake1").css("opacity", 1);
  $("#cake2").css("opacity", 1);
  $("#cake3").css("opacity", 1);
  $("#cake4").css("opacity", 1);
});

$("#balloon").draggable();

$("#balloon1").draggable();

$("#balloon2").draggable();

$("#balloon3").draggable();

$("#balloon4").draggable();


$("#icon2").click(function(){
  $("#balloon").css("opacity", 1);
  $("#balloon1").css("opacity", 1);
  $("#balloon2").css("opacity", 1);
  $("#balloon3").css("opacity", 1);
  $("#balloon4").css("opacity", 1);
});

$("#icon3").click(function(){
  $("#heart").css("opacity", 1);
  $("#heart1").css("opacity", 1);
  $("#heart2").css("opacity", 1);
  $("#heart3").css("opacity", 1);
  $("#heart4").css("opacity", 1);
});

$("#icon4").click(function(){
  $("#star").css("opacity", 1);
  $("#star1").css("opacity", 1);
  $("#star2").css("opacity", 1);
  $("#star3").css("opacity", 1);
  $("#star4").css("opacity", 1);
});

$('#trash').droppable({
        drop: function(event, ui) {
            $(ui.draggable).remove();
        }
    });


});
