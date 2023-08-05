$(document).ready(function () {
    $("#btn-toggle").click(function () {
      // change background color
      $("body").toggleClass("change-background");
      $(this).css("border", "1px solid #f5f5f5");
  
      // toggle button text
  
      $("span").text(
        $("span").text() == "Light Mode" ? "Dark Mode" : "Light Mode"
      );
    });

    $("#btn-toggle").click(function() {
      let icon = $(this).find("ion-icon")
      icon.attr("name") === "moon" ? icon.attr("name", "sunny") : icon.attr("name", "moon")
     $("body").toggleClass("bg-black").attr("name");
     $("#btn-toggle").toggleClass("btn-toggle-dark");
    });
  });

