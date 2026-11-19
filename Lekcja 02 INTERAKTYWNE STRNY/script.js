"use strict";
let avatar = document.getElementById("avatar");
let name = document.getElementById("name");
let description = document.getElementById("description");
let toggleBtn = document.getElementById("toggle-btn");

toggleBtn.addEventListener("click", function() {

    let isHero = document.body.classList.contains("hero");
    
    if (isHero) {
        document.body.classList.replace("hero","villain");
        name.textContent = "Maniek";
        description.textContent = "Glut Developer";
        avatar.src = "https://api.dicebear.com/10.x/clay/svg?seed=1";
    }
    else{
        document.body.classList.replace("villain", "hero");
        name.textContent = "Bob";
        description.textContent = "Glut ";
        avatar.src = "https://api.dicebear.com/10.x/clay/svg?seed=plswork"; 
    }

});