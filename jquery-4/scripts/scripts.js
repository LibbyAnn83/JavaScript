$(document).ready(function(){
  $("#dark").click(function(){
    $("h1, h2, p, form").removeClass("lightText")
    $("h1, h2, p, form").addClass("darkText")
    $("body").removeClass("light")
    $("body").addClass("dark")
  });

  $("#light").click(function(){
    $("h1, h2, p, form").removeClass("darkText")
    $("h1, h2, p, form").addClass("lightText")
    $("body").removeClass("dark")
    $("body").addClass("light")
  });

  $("#larger").click(function(){
    var currentFontSize = parseInt($(".container").css('font-size'));
    currentFontSize += 3;
    setFont = currentFontSize + "px"
    $(".container").css("fontSize", setFont);
  });

  $("#smaller").click(function(){
    var currentFontSize = parseInt($(".container").css('font-size'));
    currentFontSize -= 3;
    setFont = currentFontSize + "px"
    $(".container").css("fontSize", setFont);
  });

  $("#register").click(function(event){
    event.preventDefault();
    var name = $("#name").val();
    var email = $("#email").val();
    var semester = $("#semester").val();
    var prefix = $("#prefix").val();
    var number = $("#number").val();

    var schedule = name + " | " + email + " is registered for "  + prefix + number + " " + semester + " 2025 ";
    $("#scheduleList").append("<p>" + schedule + "</p>");
    $("form")[0].reset();
  });
});

