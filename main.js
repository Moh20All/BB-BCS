mypic1 = document.getElementById("img1");
mypic2 = document.getElementById("img2");
mypic3 = document.getElementById("img3");

console.log(mypic1)
console.log(mypic2)
console.log(mypic3)

mypic1.onmouseover = () => {

    setTimeout(function () {
        mypic1.src = "walter1.png"
    }, 1000);
    setTimeout(function () {
        mypic1.src = "walter2.png"
    }, 1000);


}