cmThemes = ['rubyblue', 'ayu-mirage', 'icecoder', 'material-palenight', 'vibrant-ink', '3024-night', 'liquibyte', 'elegant', 'tomorrow-night-bright', 'idea', 'material', 'ambiance', 'eclipse', 'midnight', 'paraiso-dark', 'blackboard', 'moxer', 'ayu-dark', 'shadowfox', 'gruvbox-dark', 'abbott', 'duotone-light', 'ssms', 'xq-light', 'colorforth', 'base16-light', 'paraiso-light', 'xq-dark', '3024-day', 'nord', 'isotope', 'monokai', 'seti', 'tomorrow-night-eighties', 'solarized', 'darcula', 'night', 'mdn-like', 'material-ocean', 'twilight', 'zenburn', 'material-darker', 'dracula', 'neo', 'duotone-dark', 'neat', 'base16-dark', 'the-matrix', 'erlang-dark', 'bespin', 'oceanic-next', 'hopscotch', 'cobalt', 'mbo', 'railscasts', 'lesser-dark', 'yonce', 'lucario', 'yeti', 'ttcn', 'panda-syntax', 'ambiance-mobile', 'pastel-on-dark', 'abcdef']

function newCMtheme(theme) {
    if ( theme == "random" ) 
    { randomCMtheme() }
    else { myCodeMirror.setOption("theme", theme) }
}

function randomCMtheme() {
    let rindex = Math.floor( Math.random() * (cmThemes.length -1 ) );
    newCMtheme(cmThemes[rindex]);
}