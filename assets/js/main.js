/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav-link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header');
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50)
        header.classList.add('scroll-header');
    else
        header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*=============== CHANGE BACKGROUND HEADER ===============*/
let swiperTestimonals = new Swiper(".contact-container" , {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    
    breakpoints: {
        1024: {
            spaceBetween: 72,
        },
    },
});

/*=============== MODAL FUNCTIONALITY ===============*/
function openModal(imgPath) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modalImg");
  modalImg.classList.add('zoom-in');
  modal.style.display = "flex";
  modalImg.src = imgPath;

  // Close the modal when user clicks outside of it
  window.onclick = function(event) {
    if (event.target == modal) {
      closeModal();
    }
  }
}


let currentImage = 0;
const imagePath = ['./assets/images/bed-1.jpeg', './assets/images/bed-2.jpeg', './assets/images/bed-3.jpeg', './assets/images/bed-4.jpeg','./assets/images/bed-5.jpeg', './assets/images/bed-6.jpeg','./assets/images/dining-1.jpeg', './assets/images/dining-2.jpeg', './assets/images/dining-3.jpeg', './assets/images/sofa-1.jpeg','./assets/images/sofa-2.jpeg','./assets/images/sofa-3.jpeg','./assets/images/sofa-4.jpeg','./assets/images/sofa-5.jpeg','./assets/images/sofa-6.jpeg','./assets/images/sofa-7.jpeg','./assets/images/sofa-8.jpeg','./assets/images/sofa-9.jpeg'];
const modalImg = document.getElementById('modalImg');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

function updateImage(direction) {
  if (direction === 'prev') {
    currentImage = currentImage === 0 ? imagePath.length - 1 : currentImage - 1;
  } else if (direction === 'next') {
    currentImage = currentImage === imagePath.length - 1 ? 0 : currentImage + 1;
  }
  modalImg.src = imagePath[currentImage];
}

prevBtn.addEventListener('click', () => {
  updateImage('prev');
});

nextBtn.addEventListener('click', () => {
  updateImage('next');
});


function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

function scrollToDiv(id) {
  var div = document.getElementById(id);
  div.scrollIntoView({behavior: "smooth"});

  // Remove the active class from all buttons
  var buttons = document.querySelectorAll('.filter-options');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('active');
  }

  // Add the active class to the clicked button
  var button = document.querySelector(`.filter-options[onclick="scrollToDiv('${id}')"]`);
  button.classList.add('active');
}