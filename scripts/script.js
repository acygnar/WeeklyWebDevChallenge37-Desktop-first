$(document).ready(function(){
    $(".owl-carousel").owlCarousel({ 
    items: 3, 
    dots: false,
    nav: true,
    navText: ["<i class='fas fa-caret-left'></i>","<i class='fas fa-caret-right'></i>"],
    });
    $(".owl-carousel-clients").owlCarousel({ 
      items: 1, 
      nav: false,
      });
  });
  var owl = $('.owl-carousel');
  var owlClients = $('.owl-carousel-clients');
 

  const burger= document.querySelector(".burger");
  const mobileNav= document.querySelector(".nav-items-mobile");

  function activeBurger() {
    burger.classList.toggle("active");
    mobileNav.classList.toggle("active");
  }
burger.addEventListener("click", activeBurger);
