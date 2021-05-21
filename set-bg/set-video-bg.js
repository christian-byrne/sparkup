// Vid Initializer
function vidInit(rVid) {
  $(document.body).css("background-image", "unset");
  $(document.body).css("background-color", "black");
  $("video").css("display", "block");
  var video1 = document.getElementById('vidTag');
  var source = document.createElement('source');
  $("#videoBG").attr("src", rVid)
  video1.appendChild(source);
  video1.play();
  setTimeout(function () {
      video1.pause();
      $("#videoBG").attr("src", rVid)
      video1.load();
      video1.play();
      random_rgba();
      $("video").css("display", "block");
  }, 2000);
}

// page body
function bgv() {
    ran = Math.floor((Math.random() * 4) + 1);
    if (ran == 1 || ran == 2) {
        rIndex = Math.floor((Math.random() * 27) + 1);
        rVid = "video/animeLoops/1 (" + rIndex + ").mkv";
    };
    if (ran == 3) {
        rIndex = Math.floor((Math.random() * 40) + 1);
        rVid = "video/movieLoops/1 (" + rIndex + ").mp4";
    };
    if (ran == 4) {
        rIndex = Math.floor((Math.random() * 20) + 1);
        rVid = "video/Apple/1(" + rIndex + ").mov";
    };
    vidInit(rVid)
}