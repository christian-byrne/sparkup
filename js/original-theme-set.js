// Color Config
$(document).ready(function () {
  //Animation on Load
  setTimeout(fadeIn(), 87000)
  // Turn VHS Clock On
  showTime();
  // Colors Content
  $('.cm-dialog .CodeMirror').css("background", "rgba(83, 77, 86, 1)")
  $('#editorWrapper').css("background-color", "rgba(222, 205, 245, .77)")
  $('.CodeMirror-linenumber').css("background-color", "rgba(83, 77, 86, .9)")
  $('.CodeMirror-linenumbers').css("background-color", "rgba(83, 77, 86, .9)")
  $('.CodeMirror-gutters').css("border-right-color", "rgba(80, 74, 83, .83)")
  $('.CodeMirror-gutters').css("background-color", "rgba(80, 74, 83, .83)")
  $('.CodeMirror-gutter').css("background-color", "rgba(80, 74, 83, .83)")
  $('.CodeMirror-gutter-elt').css("background-color", "rgba(80, 74, 83, .83)")
  $('.cm-icons').css("background-color", "rgba(106, 104, 117, .9)")
  $('#theHeader').css("background-color", "rgba(106, 104, 117, .9)")
  // Colors Text
  $('.cm-number').css("color", "rgba(37, 210, 190, 1)")
  $('.cm-variable').css("color", "rgba(248, 241, 255, 1)")
  $('.cm-bracket').css("color", "rgba(198, 162, 246, 1)")
  $('.cm-comment').css("color", "rgba(10, 17, 40, .94)")
  $('.cm-builtin').css("color", "rgba(11, 79, 108, 1)")
  // Colors Download Button
  $('.download:hover').css("background-color", "rgba(27, 153, 139, 1)")      
  $('.download:hover').css("background", "rgba(27, 153, 139, 1)")
  $('.download').css("background-color", "rgba(83, 77, 86, .6)")      
  $('.download').css("box-shadow", "unset")            
  $('.download').css("background", "rgba(83, 77, 86, .6)")            
  $('.download').css("color", "rgba(248, 241, 255, 1)")            
  $('.download').css("border", "rgba(27, 153, 139, 1)")
});