function changeBoxAttributes(){
    // Border
    let borderR = document.getElementById("borderRed").value;
    let borderG = document.getElementById("borderGreen").value;
    let borderB = document.getElementById("borderBlue").value;

    if ( (borderR>=0 && borderR<=250 && borderG>=0 && borderG<=250 && borderB>=0 && borderB<=250)){
        let borderRGB = "rgb(" + borderR + ", " + borderG + ", " + borderB + ")";
        box.style.borderStyle = "solid";
        box.style.borderColor = borderRGB;
    }
    else {
        box.style.borderStyle = "none";
        document.getElementById("invalid-border").style.visibility="visible";
    }


    // Background
    let backR = document.getElementById("backgroundRed").value;
    let backG = document.getElementById("backgroundGreen").value;
    let backB = document.getElementById("backgroundBlue").value;

    if (backR>=0 && backR<=250 && backG>=0 && backG<=250 && backB>=0 && backB<=250){
        let backRGB = "rgb(" + backR + ", " + backG + ", " + backB + ")";
        box.style.backgroundColor = backRGB;
    }
    else {
        box.style.backgroundColor = "white";
        document.getElementById("invalid-background").style.visibility="visible";
    }

    // Width
    let bWidth = document.getElementById("borderWidth").value;
    if (bWidth>0 && bWidth !=null){
        let bw = "" + bWidth + "px";
        box.style.borderWidth = bw;
    }
    else {
        document.getElementById("invalid-width").style.visibility="visible";
    }

}
