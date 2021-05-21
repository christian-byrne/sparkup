function popHelpModal() {
    if (document.getElementsByClassName("formpop")[0].style.display == "none" ) {
      document.getElementsByClassName("formpop")[0].style.display = "flex"
    }
    else {
        document.getElementsByClassName("formpop")[0].style.display = "none"
    }
}

function nextPage(element) {
    document.getElementById("info_modal").style.display = "none";
}   