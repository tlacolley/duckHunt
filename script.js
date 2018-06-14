
var targets = document.getElementsByClassName("target");



function deplacement() {

    for (var i = 0; i < targets.length; i++) {

        var positionX = this.offsetTop;
        var positionY = this.offsetLeft;
        var newX = Math.random() * 1000;
        var newY = Math.random() * 1000;

        targets[i].style.top = newX + "px";

        targets[i].style.left = newY + "px";
        targets[i].style.transitionDuration = "3s";
    }
};

var move = window.setInterval(deplacement, 1000);

                 // Event Target distroys

for (var i = 0; i < targets.length; i++) {
targets[i].addEventListener("click", hitTarget);

function hitTarget() {

    this.style.display = "none";

}
}

var cpt = document.createElement("p");
var header = document.getElementById("header");
header.appendChild(cpt);
cpt.innerText = 0;
var clik = 0
var numeroClick = cpt.innerText

function numClick(){
        // numeroClick = click +1 ;
        console.log("plop");
}
document.addEventListener("click",numClick)
