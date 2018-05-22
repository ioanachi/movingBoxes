// var myHeightToMove = window.innerHeight - 210;
// var myWidthToMove = window.innerWidth - 210;

greenBox.onclick = moveGreen;

function moveGreen(event) {
    greenBox.className = "moveGreen";

    // greenBox.style.transform = "translate(0px," + myHeightToMove + "px)";
    // greenBox.style.transitionDuration = "2s";
}
greenBox.addEventListener("transitionend", function (event) {
    setTimeout(function () {
        greenBox.className = "moveGreenUp";
        // greenBox.style.transform = "translate(0px,0px)";
        // greenBox.style.transitionDuration = "2s";

    }, 500)
});


var ifMovedBlack = false;
blackBox.onclick = moveBlackDown;

function moveBlackDown(event) {
    blackBox.className = "moveBlack";
    blackBox.style.transform = "translate(0px," + myHeightToMove + "px)";
    blackBox.style.transitionDuration = "2s";
    ifMovedBlack = true;
}
blackBox.addEventListener("transitionend", function (event) {
    var blackBoxArr = document.getElementsByClassName("moveBlack")
    var blackB = blackBoxArr[0];
    if (ifMovedBlack) {
        if (blackBox.getBoundingClientRect().top >= 200) {
            blackBox.addEventListener('click', moveBlackUp);
        }
    }
});

function moveBlackUp(event) {
    blackBox.style.transform = "translate(0px,0px)";
    blackBox.style.transitionDuration = "2s";
    blackBox.removeEventListener('click', moveBlackUp);

}







redBox.addEventListener('click', moveRedDown);
var ifRedMoved = false;
var startAgain = false;

function moveRedDown(event) {
    redBox.style.transform = "translate(0px," + myHeightToMove + "px)";
    redBox.style.transitionDuration = "2s";
    if (!ifRedMoved) {
        redBox.addEventListener("transitionend", moveLeft);
        console.log(ifRedMoved);
        
    } else if (ifRedMoved) {
        // redBox.removeEventListener('click',moveRedDown);
        // redBox.removeEventListener('transitionend', moveLeft);
        // redBox.addEventListener("transitionend", moveUp);
        console.log(true);

    }
}
moveLeft = (event) => {
    setTimeout(function () {
        redBox.style.transform = "translate(-" + myWidthToMove + 'px, ' + myHeightToMove + "px)";
        redBox.style.transitionDuration = "2s";
        ifRedMoved = true;
    }, 1000);
}
moveLeft = (event) => {
    setTimeout(function () {
        redBox.style.transform = "translate(0px, 0px)";
        redBox.style.transitionDuration = "2s";
        ifRedMoved = false;

    }, 1000);
}