

$(document).ready(function(){
  var teamOwl = $('#team-owl');
  var clientsOwl = $('#clients-owl');
  

    teamOwl.owlCarousel({ 
    items: 3, 
    dots: false,
    nav: true,
    navText: ["<i class='fas fa-caret-left'></i>","<i class='fas fa-caret-right'></i>"],
    });
    clientsOwl.owlCarousel({ 
      items: 1, 
      nav: false,
      });
  });
  
  var owl = $('.owl-carousel');
 

  const burger= document.querySelector(".burger");
  const desktopNav =document.querySelector(".nav-items");
  const mobileNav= document.querySelector(".nav-items-mobile");
  

  function activeBurger() {
    burger.classList.toggle("active");
    mobileNav.classList.toggle("active");
  }
  function darkNav() {
    const scrollSize = window.scrollY;
     if(scrollSize >= 100){
    desktopNav.classList.add("active");
    }
    else{
      desktopNav.classList.remove("active");
    }
  }
burger.addEventListener("click", activeBurger);
window.addEventListener("scroll", darkNav);
