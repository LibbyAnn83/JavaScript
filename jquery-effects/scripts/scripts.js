
$(document).ready(function(){
  $("#hide").click(function(){
    $("#hideShow").hide();
  });
  $("#show").click(function(){
    $("#hideShow").show();
  });
});

$(document).ready(function(){
  $("#fadeButton").click(function(){
    $("#fadeText").fadeToggle("slow");
  });
});

$(document).ready(function(){
  $("#slideButton").click(function(){
    $("#slideText").slideToggle("slow");
  });
});