
$(document).ready(function(){

  $("#up").click(function(){
    $("#animate").animate({marginTop: "-=10px"});
  });

  $("#down").click(function(){
    $("#animate").animate({marginTop: "+=10px"});
  });

  $("#left").click(function(){
    $("#animate").animate({marginLeft: "-=10px"});
  });

  $("#right").click(function(){
    $("#animate").animate({marginLeft: "+=10px"});
  });

    $("#slidePanel").click(function(){
    $("#panel").slideDown(5000);
  });
  $("#stop").click(function(){
    $("#panel").stop(true, true);
  });

  $("#callbackButton").click(function(){
  $("#callback").hide("slow", function(){
    alert("The image is now hidden");
  });

  });
  $("#chainingButton").click(function(){
    $("#chaining").slideUp(5000).slideDown(5000);
  });


});