let slideIndex = 0;

function moveSlide(direction) {
  const slides = document.querySelectorAll(".slider img");
  const totalSlides = slides.length;
  const slideWidth = slides[0].offsetWidth; // Get the width of a single slide

  // Update the slideIndex based on direction
  slideIndex = (slideIndex + direction + totalSlides) % totalSlides;

  // Move the slider by the calculated amount
  document.querySelector(".slider").style.transform = `translateX(-${
    slideIndex * slideWidth
  }px)`;
}

// Optional: Automatically change slides every 3 seconds
setInterval(() => moveSlide(1), 3000);
