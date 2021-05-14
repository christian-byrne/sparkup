function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var year = date.getFullYear()
    var session = "AM";
    var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
  "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    var month = monthNames[date.getMonth()];
    var day = date.getDay()


    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h; 
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time =  session + " " + h + ":" + m // + ":" + s + " " <- seconds
    var dayT =  month + ' ' + day + ' ' + year + " "
    document.getElementById("VHSclockTime").innerText = time;
    document.getElementById("VHSclockTime").textContent = time ;
    document.getElementById("VHSclockDay").innerText = dayT;
    document.getElementById("VHSclockDay").textContent = dayT ;
    document.getElementById("VHSclockGlow").innerText = time;
    document.getElementById("VHSclockGlow").textContent = time ;
    
    setTimeout(showTime, 1000);    
}