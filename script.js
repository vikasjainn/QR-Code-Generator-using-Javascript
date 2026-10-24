
function genQR() {
    var myimg = document.getElementById("img");
    var mytext = document.getElementById("qrtext").value.trim();

    if (mytext !== "") {
        myimg.src = "https://quickchart.io/qr?size=200&text="
            + encodeURIComponent(mytext);
        myimg.style.display = "block";
    } else {
        alert("Please Enter Text");
    }
}
