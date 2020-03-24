$(document).ready(function() {
  $("button#lightswitch").click(function() {
    $("body").removeClass();
    $("body").addClass("black-background");
  });

  $("button#lightswitch").click(function() {
    $("body").removeClass();
    $("body").addClass("white-background");
  });
});
