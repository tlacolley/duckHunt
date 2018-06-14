

console.log("positionX");
var targets = document.getElementsByClassName("target");
console.log(targets);


function deplacement () {

    for (var i = 0; i < targets.length; i++) {

    var positionX = this.offsetTop;
    var positionY = this.offsetLeft;
    var newX = Math.random()*1000;
    var newY = Math.random()*1000;

    targets[i].style.top = newX + "px";
    console.log(newX);
    targets[i].style.left = newY + "px";
    targets[i].style.transitionDuration = "3s";
    }
};
var move = window.setInterval(deplacement, 1000);
