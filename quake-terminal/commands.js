

// help screen dialogues
var colorHelp = ["[scheme]  [colorbg]  [colortext]",  "[colorheader]  [colorborder]",  "[colordialog]  [colorwindow]", "[bg] to customize page background", "[hpic] or [wpic] for inline pics"]
function colorHint() {
    this.clear();
    for (const x of colorHelp) { this.echo(x) }
}

// input forgiveness
function hasWord(command, word) {
    word = word.toString(); 
    command = command.toString();
    substrLength = Math.round(command.length * .85);
    subStr = command.substring(1, substrLength);
    if ( word.includes(subStr) == true ) {
        return true
    }
    return false
}

String.prototype.strip = function (char) {
    return this.replace(new RegExp("^" + char + "*"), '').
      replace(new RegExp(char + "*$"), '');
}

$.extend_if_has = function (desc, source, array) {
    for (var i = array.length; i--;) {
        if (typeof source[array[i]] != 'undefined') {
        desc[array[i]] = source[array[i]];
        }
    }
    return desc;
}