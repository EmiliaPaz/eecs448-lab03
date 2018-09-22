function changeBoxAttributes(){
    // Border
    let borderR = document.getElementById("borderRed").value;
    let borderG = document.getElementById("borderGreen").value;
    let borderB = document.getElementById("borderBlue").value;

    let borderRGB = "rgb(" + borderR + ", " + borderG + ", " + borderB + ")";
    box.style.borderStyle = "solid";
    box.style.borderColor = borderRGB;

    // Background
    let backR = document.getElementById("backgroundRed").value;
    let backG = document.getElementById("backgroundGreen").value;
    let backB = document.getElementById("backgroundBlue").value;

    let backRGB = "rgb(" + backR + ", " + backG + ", " + backB + ")";
    box.style.backgroundColor = backRGB;

}
