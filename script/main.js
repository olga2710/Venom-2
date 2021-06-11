const burgerMune = document.querySelector(".menu-button");
const navMenu = document.querySelector(".nav-menu");
const navMenuBtn = document.querySelector(".menu-close");
const menuLink = document.querySelectorAll(".nav-menu-link");


burgerMune.addEventListener('click', () =>{
    navMenu.classList.add("is-active");
    navMenuBtn.classList.add("is-active");
})

navMenuBtn.addEventListener('click', () =>{
    navMenu.classList.remove("is-active");
    navMenuBtn.classList.remove("is-active");
    
})

menuLink.forEach(ev => {
    ev.addEventListener('click',() =>{
        navMenu.classList.remove("is-active");
        navMenuBtn.classList.remove("is-active");
    })
})
    
