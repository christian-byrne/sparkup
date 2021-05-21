

// editor bg
function editorColor(input) {
    if (input == undefined || input == "color" || input == "change" || input == "transparency") {
        $('#editorWrapper').css("background-color", rColor(.9)) 
    }
    else {
        $('#editorWrapper').css("background-color", input)
    }
}

// editor random scheme
function randomEditorScheme(input) {
    if (input == undefined || input == "color" || input == "change" ) {
        var triadPal = tinycolor(rColor()).triad() }
    else { 
        var triadPal = tinycolor(input).triad()
    }
    setBg = triadPal[1].toHexString()
    monochromaticArray = tinycolor(setBg).monochromatic()
    $('#editorWrapper').css("background-color", triadPal[0].toHexString())
    $('.cm-dialog .CodeMirror').css("background", triadPal[0].toHexString())
    $('.CodeMirror-gutters').css("border-right-color", triadPal[2].spin(30).toHexString())
    $('.CodeMirror-gutters').css("background-color", triadPal[2].spin(30).toHexString())
    $('.CodeMirror-gutter').css("background-color", triadPal[2].spin(30).toHexString())
    $('.CodeMirror-gutter-elt').css("background-color", triadPal[2].spin(30).toHexString())
    $('.cm-bracket').css("color", randomReadable(setBg))
    $('.cm-comment').css("color", randomReadable(setBg))
    $('.cm-builtin').css("color", randomReadable(setBg))
    $('.cm-number').css("color", randomReadable(setBg))
    $('.cm-variable').css("color", randomReadable(setBg))
    $('.cm-s-twilight .CodeMirror').css("color", randomReadable(setBg))
    $('.CodeMirror-linenumber').css("background-color", monochromaticArray[0].toHexString())
    $('.CodeMirror-linenumbers').css("background-color", monochromaticArray[0].toHexString())
    $('.download:hover').css("background-color", monochromaticArray[2].toHexString())       
    $('.download').css("background-color", monochromaticArray[3].toHexString())      
    $('.download').css("box-shadow", "unset")            
    $('.download').css("color", randomReadable(monochromaticArray[3]))            
    $('.download').css("border", monochromaticArray[4].toHexString())    
    $('.cm-icons').css("background-color", rColor(1))
    $('#theHeader').css("background-color", $('.cm-icons').css("background-color"))
}

// editor dialog
function editorDialog(input) {
    if (input == undefined || input == "color" || input == "change" ) {
        var triadPal = tinycolor(rColor()).triad() }
    else { var triadPal = tinycolor(input).triad() }
    setBg = triadPal[1].toHexString()
    monochromaticArray = tinycolor(setBg).monochromatic()
    $('.CodeMirror-gutters').css("border-right-color", triadPal[2].spin(30).toHexString())
    $('.CodeMirror-gutters').css("background-color", triadPal[2].spin(30).toHexString())
    $('.CodeMirror-gutter').css("background-color", triadPal[2].spin(30).toHexString())
    $('.CodeMirror-gutter-elt').css("background-color", triadPal[2].spin(30).toHexString())
    $('.CodeMirror-linenumber').css("background-color", monochromaticArray[0].toHexString())
    $('.CodeMirror-linenumbers').css("background-color", monochromaticArray[0].toHexString())
    $('.download:hover').css("background-color", monochromaticArray[2].toHexString())       
    $('.download').css("background-color", monochromaticArray[3].toHexString())      
    $('.download').css("box-shadow", "unset")            
    $('.download').css("color", randomReadable(monochromaticArray[3]))            
    $('.download').css("border", monochromaticArray[4].toHexString())    
    $('.cm-icons').css("background-color", monochromaticArray[1].spin(180).toHexString())
    $('#theHeader').css("background-color", $('.cm-icons').css("background-color")) 
}

// editor window 
function editorWindow(input) {
    if (input == undefined || input == "color" || input == "change" ) {
        var triadPal = tinycolor(rColor()).triad() }
    else { var triadPal = tinycolor(input).triad() }
    setBg = triadPal[1].toHexString()
    monochromaticArray = tinycolor(setBg).monochromatic()
    $('.cm-dialog .CodeMirror').css("background", triadPal[1].toHexString())
    $('.cm-bracket').css("color", randomReadable(setBg))
    $('.cm-comment').css("color", randomReadable(setBg))
    $('.cm-builtin').css("color", randomReadable(setBg))
    $('.cm-number').css("color", randomReadable(setBg))
    $('.cm-variable').css("color", randomReadable(setBg))
    $('.cm-s-twilight .CodeMirror').css("color", triadPal[2].spin(30).toHexString())
    $('.CodeMirror-line').css("color", randomReadable(setBg))
    $('.CodeMirror-linenumber').css("background-color", monochromaticArray[0].toHexString())
    $('.CodeMirror-linenumbers').css("background-color", monochromaticArray[0].toHexString())
    $('.download:hover').css("background-color", monochromaticArray[2].toHexString())       
    $('.download').css("background-color", monochromaticArray[3].toHexString())      
    $('.download').css("box-shadow", "unset")            
    $('.download').css("color", randomReadable(monochromaticArray[3]))            
    $('.download').css("border", monochromaticArray[4].toHexString())    
    $('.cm-icons').css("background-color", monochromaticArray[1].spin(180).toHexString())
    $('#theHeader').css("background-color", $('.cm-icons').css("background-color"))
}

// editor text
function editorText(input) {
    if ( $('.cm-dialog .CodeMirror').css("background-image") == "none" ) {
      var bgColor = $(".cm-dialog .CodeMirror").css("background")
          $('.cm-bracket').css("color", randomReadable(bgColor))
          $('.cm-comment').css("color", randomReadable(bgColor))
          $('.cm-builtin').css("color", randomReadable(bgColor))
      if (input == undefined || input == "change" || input == "random") {
          $('.cm-number').css("color", randomReadable(bgColor))
          $('.cm-variable').css("color", randomReadable(bgColor))
          $('.cm-s-twilight.CodeMirror').css("color", randomReadable(bgColor))}
      else {
          $('.cm-s-twilight.CodeMirror').css("color", input)
          let rc = randomComplement(bgColor, input); 
          $('.cm-variable').css("color", rc)
          $('.cm-number').css("color", randomComplement(rc, bgColor)) }
        }
    else {
      // random color tetrad if wpic is set and bg of codemirror doesn't matter
      var colorTriad = tinycolor(rColor(1)).tetrad()
          $('.cm-bracket').css("color", randomReadable(tinycolor(colorTriad[0]).complement().toHexString()))
          $('.cm-comment').css("color", randomReadable(colorTriad[1].toHexString))
          $('.cm-builtin').css("color", randomReadable(tinycolor(colorTriad[1]).complement().toHexString()))
          $('.cm-number').css("color", randomReadable(colorTriad[2].toHexString))
          $('.cm-variable').css("color", randomReadable(colorTriad[3].toHexString))
          $('.cm-s-twilight.CodeMirror').css("color", randomReadable(colorTriad[0].toHexString)) }
}

// page body bg
function pageColor(input) {
    $("video").css("display", "none");
    $('.stretchedvidWrapper').css("background-image", "unset");
    if ( input == undefined ) {
        $(document.body).css("background-color", rColor(1)) }
    else {
        $(document.body).css("background-color", input)
    }
}

// quake terminal bg
function termColor(input) {
    if ( input == undefined ) { bgC = rColor(1) }
    else { bgC = input };
    $('.terminal').css("--background", bgC)
    $('.cmd div').css("--color", tinycolor(bgC).spin(180).toHexString()) 
}

// quake terminal text
function termTextColor(input) {
    if ( input == undefined ) {
        bgC = rColor(1)
    }
    else {
        bgC = input
    };
    $('.cmd div').css("--color", bgC) 
}