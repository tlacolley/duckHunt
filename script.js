// var target = document.getElementById("red");
// var positionX = target.offsetTop;
// var positionY = target.offsetLeft;

console.log("positionX");
var target = document.getElementById("red");
console.log(target);
target.style.transitionDuration = "3s"
function deplacement () {

    var positionX = target.offsetBottom;
    var positionY = target.offsetLeft;
    var newX = Math.random()*1000;
    var newY = Math.random()*1000;

    target.style.top = newX + "px";
    console.log(newX);
    target.style.left = newY + "px";
};
// var z = target.offsetTop;
// console.log(target.offsetTop);



var move = window.setInterval(deplacement, 3000);
