// Random Pic Setter -> add any arg when changing pics other than the main bg
function randomPic(input) {
  if ( input == undefined ) {
    $(document.body).css("background-image", "unset");
    $("video").css("display", "none");
  }
  $(document.body).css("background-color", "black");
  return randomFile("allPics")
}

function bgp() {
    newPic = "url\(pictures/pic\\ \\" + randomPic()
    $('.stretchedvidWrapper').css("background-image", newPic);
}



// editor window
function windowPic() {
    newPic = "url\(pictures/pic\\ \\" + randomPic("d")
    $('.cm-dialog .CodeMirror').css("background-image", newPic); 
    $('.cm-dialog .CodeMirror').css("background-size", "cover"); 
    $('.cm-dialog .CodeMirror').css("background-position", "center");
}

// editor header
function headerPic() {
    newPic = "url\(pictures/pic\\ \\" + randomPic("d")
    $('#theHeader').css("background-image", newPic);
    $('.cm-icons').css("background", "transparent");
    $('.cm-dialog .CodeMirror').css("background-size", "cover"); 
    $('.cm-dialog .CodeMirror').css("background-position", "center");
}