
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
    
}
document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');

}


let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{
     menu.classList.remove('fa-time');
     navbar.classList.remove('active');

     section.forEach(sec =>{
          let top = window.scrollY;
          let height = sec.offsetHeight;
          let offset = sec.offsetTop - 150;
          let id = sec.getAttribute('id');

          if(top => offset && top < offset + height){
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelectorAll('header .navbar a[href*='+id+']').classList.add('active');
            });
          };
     });

};


var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      
      
    },loop:true,
  });

  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
        0: {
            SliderPerView: 1,
        },
        640: {
            SliderPerView: 2,
        },
        768: {
            SliderPerView: 2,
        },
        1024: {
            SliderPerView: 3,
        },
    },
  });

