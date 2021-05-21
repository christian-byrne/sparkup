// Auto Resizer 
let height;
myCodeMirror.on('change', function() {
    resizeEditor();
});
function resizeEditor() {
    var rect = dialog.getBoundingClientRect();
    var lineCount = $('.CodeMirror-code div').length
    if ( parseInt($('#editorWrapper').css("height")) < (parseInt($('html').css("height"))* .82) ) {
      if (height !== rect.height &&  lineCount == 75) {
          height = rect.height;
          document.body.style.setProperty('--height', rect.height * 1.5);
      }
      if (height !== rect.height &&  lineCount == 100) {
          height = rect.height;
          document.body.style.setProperty('--height', rect.height * 1.5);
      }
      if (height !== rect.height &&  lineCount == 120) {
          height = rect.height;
          document.body.style.setProperty('--height', rect.height * 1.5);
      }
      if (height !== rect.height &&  lineCount == 150) {
          height = rect.height;
          document.body.style.setProperty('--height', rect.height * 1.5);
          $('#editorWrapper').css("width", "690px");
      }
    }
}