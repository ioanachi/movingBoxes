greenBox.onclick = moveGreen;

function moveGreen(event) {
    var greenStay = document.getElementsByClassName("greenStay")[0];
    var greenMoved = document.getElementsByClassName("greenMove")[0];
    if (greenStay) {
        greenBox.classList.remove("greenStay");
        greenBox.className = 'greenMove';
        greenBox.addEventListener("transitionend", function (event) {
            setTimeout(moveGreenBack, 1000);

            function moveGreenBack() {
                greenBox.classList.remove("greenMove");
                greenBox.className = 'greenStay';

            }
        })
    }
}


blackBox.onclick = moveBlack;

function moveBlack(event) {
    var blackStay = document.getElementsByClassName("blackStay")[0];
    var blackMove = document.getElementsByClassName("blackMove")[0];
    if (blackStay) {
        blackBox.classList.remove("blackStay");
        blackBox.className = 'blackMove';
    } else {
        blackBox.classList.remove("blackMove");
        blackBox.className = 'blackStay';
    }
}



redBox.onclick = moveRed;

function moveRed(event) {
    var redStayUp = document.getElementsByClassName("redStayUp")[0];
    var redStayDown = document.getElementsByClassName("redStayDown")[0];
    var redStayLeft = document.getElementsByClassName("redStayLeft")[0];

    if (redStayUp) {
        redBox.classList.remove("redStayUp");

        redBox.className = 'redStayDown';
        redBox.addEventListener("transitionend", moveLeftTimer)
        function moveLeftTimer(event) {
            setTimeout(moveRedRight, 1000);

            function moveRedRight() {
                redBox.classList.remove("redStayDown");
                redBox.className = 'redStayLeft';
            }
        }
    } else if (redStayLeft) {
        redBox.removeEventListener("transitionend", moveLeftTimer);
        redBox.classList.remove("redStayLeft");
        redBox.className = 'redStayRight';

        redBox.addEventListener("transitionend", moveRightTimer)

        function moveRightTimer(event) {
            setTimeout(moveRedRight, 1000);

            function moveRedRight() {
                redBox.classList.remove("redStayDown");
                redBox.className = 'redStayUp';
            }
        }
    }
}