
greenBox.onclick = moveGreen;
function moveGreen(event) {
    greenBox.className = "moveGreen"
}
greenBox.addEventListener("transitionend", function (event) {
    setTimeout(function () {
        greenBox.className = "moveGreenUp"
    }, 1000)
});



blackBox.onclick = moveBlackDown;
function moveBlackDown(event) {
    blackBox.className = "moveBlack";
}
blackBox.addEventListener("transitionend", function (event) {
    var blackBoxArr = document.getElementsByClassName("moveBlack")
    var blackB = blackBoxArr[0];
    if (blackBoxArr.length >= 1) {
        if (blackB.getBoundingClientRect().top >= 200) {
            blackBox.addEventListener('click', moveBlackUp);
        }
    }
});
function moveBlackUp(event) {
    blackBox.className = "moveGreenUp";
    blackBox.removeEventListener('click', moveBlackUp);

}

redBox.onclick = moveRedDown;
var ifRedMoved = false;
function moveRedDown(event) {
    redBox.className = "moveRed";
    redBox.addEventListener("transitionend", function (event) {
        setTimeout(function () {
            redBox.className = "moveRedLeft";
            ifRedMoved = true;
        }, 1000)
    });

if(ifRedMoved){
    redBox.onclick = moveRedDown;

}
}