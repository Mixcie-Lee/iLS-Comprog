let slideIndex = 0;

function moveSlide(direction) {
  const slides = document.querySelectorAll(".slider img");
  const totalSlides = slides.length;
  const slideWidth = slides[0].offsetWidth; 

 
  slideIndex = (slideIndex + direction + totalSlides) % totalSlides;
 
  document.querySelector(".slider").style.transform = `translateX(-${
    slideIndex * slideWidth
  }px)`;
}

 
setInterval(() => moveSlide(1), 3000);
