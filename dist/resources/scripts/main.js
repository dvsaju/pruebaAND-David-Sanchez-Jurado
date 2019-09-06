window.onload = scrollFunction();
window.onscroll = function() {scrollFunction()};



function scrollFunction() {
    let navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.classList.add("navigation-scrolled");
      } else {
        navbar.classList.remove("navigation-scrolled");
      }
}


let navicono = document.getElementById("navicon");
let navbar = document.getElementById("navbar");
navicono.addEventListener('click', function(){
    if(navbar.classList.contains('open')){
        navbar.classList.remove('open');
    }else{
        navbar.classList.add('open');
    }
});

let linksNav = document.getElementsByClassName("nav__list__item__link");
for(i=0; i<linksNav.length; i++){
    linksNav[i].addEventListener('click', function(){
        if(navbar.classList.contains('open')){
            navbar.classList.remove('open');
        }
    });
}

