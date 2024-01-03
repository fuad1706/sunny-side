let hamburger = document.getElementById("hamburger");
let nav = document.querySelector("nav"); 
hamburger.onclick = function(){
nav.classList.toggle("open-nav");

if(nav.classList.contains("open-nav")){
    hamburger.src = "./assets/icon-close.svg";
}

else{
    hamburger.src = "./assets/icon-hamburger.svg";
}
}