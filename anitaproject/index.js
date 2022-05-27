let menu = document.querySelector("#menu-btn");
let navBar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navBar.classList.toggle("active");
    document.querySelector(".search-form").classList.remove("active");
}

document.querySelector("#search-btn").onclick = () => {
    document.querySelector(".search-form").classList.toggle("active");
    navBar.classList.remove("active");
}

window.onscroll = () => {
    navBar.classList.remove("active");
    document.querySelector(".search-form").classList.remove("active");
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
});

var swiper = new Swiper(".menu-slider", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });