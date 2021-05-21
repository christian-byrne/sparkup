

function fadeIn() {
    $('#theBox').animate({opacity: 1},5200);
    $('.tutorialIcon').animate({opacity: .02},5200);
}

$(document).ready(function () {
  //Animation on Load
  setTimeout(fadeIn(), 2000)
  // Turn VHS Clock On
  showTime();

  // Kanji Header Pic
  let h = document.getElementById("theHeader")
  h.style.backgroundSize = "cover";
  h.style.backgroundPosition = "center center";
  h.style.backgroundImage = "url('pictures/pic (378).jpg')";
});

function getpreCode(element) {
   return "pre" + Math.floor((Math.random() * 17) * 1); 
}

const code = document.getElementById("tmpl").content.querySelector(getpreCode()).innerText;
const box = document.querySelector('.box');
const dialog = document.querySelector('.cm-body');

var myCodeMirror = CodeMirror(dialog, {
    value: code,
    mode:  "javascript",
    viewportMargin: 40,
    lineWrapping: true,
    lineNumbers: true,
    matchBrackets: true,
    theme: '3024-night',
    inputStyle: "contenteditable"
});