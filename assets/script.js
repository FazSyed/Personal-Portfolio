// NavBar Menu
var navLinks = document.getElementById("navLinks");

function showMenu() {
  navLinks.style.right = "0"; // to show the side menu
}

function hideMenu() {
  navLinks.style.right = "-200px"; // to hide the side menu
}

// Rotating text animation
let text = document.querySelector(".home-img-text p");

text.innerHTML = text.innerText
  .split("")
  .map(
    (char, i) => `<span style="transform:rotate(${i * 8}deg)">${char}</span>`
  )
  .join("");

// Projects link
function goToPage(page) {
  window.open(page, "_blank");
}

// Skills Carousel
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  loop: true,
});
