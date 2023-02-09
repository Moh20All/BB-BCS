mypic1 = document.getElementById("img1");
mypic2 = document.getElementById("img2");
mypic3 = document.getElementById("img3");



mypic1.onmouseover = () => {

    setTimeout(function () {
        mypic1.src = "walter1.png"
    }, 500);
    setTimeout(function () {
        mypic1.src = "walter1.png"
    }, 500);
    setTimeout(function () {
        mypic1.src = "walter2.png"
    }, 500);


}

function openWin(gg) {
    myWindow = window.open(gg, "_blank");   // Opens a new window
}

document.querySelectorAll(".BB-sc .vid-container .vid video").forEach(vid => {
    vid.onclick = () => {
        document.querySelector(".popup").style.display = "block";
        document.querySelector(".popup video").src = vid.getAttribute("src");
    }
});
document.querySelector(".popup span").onclick, document.querySelector(".popup video").onblur = () => {
    document.querySelector(".popup").style.display = "none";
    document.querySelector(".popup video").src = "";
}
