
function download(url) {
    var a = document.createElement('a');
    a.download = 'screenshot.png';
    a.href = url;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

document.getElementById("screenshotButton").addEventListener('click', () => {
    DLscreenshot()
});

function DLscreenshot() {
    $('#editorWrapper').css("border-radius", "initial")
    $('#editorWrapper').css("opacity", "1")
    const node = document.querySelector(".wrapper");
    html2canvas(node, {
        scale: window.devicePixelRatio
    }).then(canvas => {
        var url = canvas.toDataURL("image/png");
        download(url);
    });
    $('#editorWrapper').css("border-radius", "6px")
    $('#editorWrapper').css("opacity", "unset")
}