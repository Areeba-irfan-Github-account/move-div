var main = document.querySelector("#main");
var desk = document.querySelector(".desk");
main.addEventListener('mousemove' , function(acc){
    desk.style.left = acc.x + "px"
    desk.style.top = acc.y + "px"
})