// Navigation --------------------------------
// const nav = document.getElementById('nav')
// const menuIcon = document.querySelector('.menu-icon')

// function toggleMenu() {
//     nav.classList.toggle('active')
//     menuIcon.classList.toggle('active')
// }

// function hideMenu() {
//     nav.classList.remove('active')
//     menuIcon.classList.remove('active')
// }

// Slideshow ----------------------------------
let currentImageIndex = 0;
const images = document.querySelectorAll('.slide');

function switchImage() {
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add('active');
}

setInterval(switchImage, 5000);