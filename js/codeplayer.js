
$(function(){
  $(".toggleButton").hover( function (){
    $(this).addClass("highlightedButton");
  }, function(){
    $(this).removeClass("highlightedButton");
  });

  $(".toggleButton").click(function(){
    $(this).toggleClass("active");
    $(this).removeClass("highlightedButton");
    var panelID = $(this).attr("id") + "Panel";
    $("#" + panelID).toggleClass("hidden");
    var numofActivePanels = 4 - $(".hidden").length;
    $(".panel").width(($(window).width() / numberofActivePanels) - 10);

  });

  $(".panel").height($(window).height() - $("#header").height() - 15);

  $(".panel").width(($(window).width() / 2) - 10);

  $("iframe").contents().find("html").html($("#htmlPanel").val());

// updates automatically
  $("textarea").on("change keyup paste", function(){
    $("iframe").contents().find("html").html($("#htmlPanel").val());

  });
});
