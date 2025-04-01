
const sidenav = document.getElementById("mySidenav");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const links = document.querySelectorAll('.nav-burger ul a');
console.log(links)

function openNav(){
    sidenav.classList.add("active");
}

function closeNav(){
    console.log(this);
    sidenav.classList.remove("active");
}


openBtn.addEventListener('click', openNav) 
closeBtn.addEventListener('click', closeNav) 

for (const element of links) {
    element.addEventListener("click", closeNav);
}



