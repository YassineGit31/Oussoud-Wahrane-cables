const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const navLinks = document.querySelector(".nav-links");
const overlay = document.querySelector(".overlay");

// Open menu
menuIcon.addEventListener("click", () => {
  navLinks.classList.add("show");
  overlay.classList.add("show");
  menuIcon.style.display = "none"; // Hide menu icon
  closeIcon.style.display = "block"; // Show close icon
});

// Close menu
closeIcon.addEventListener("click", () => {
  navLinks.classList.remove("show");
  overlay.classList.remove("show");
  menuIcon.style.display = "block"; // Show menu icon
  closeIcon.style.display = "none"; // Hide close icon
});

// Close menu when clicking outside
overlay.addEventListener("click", () => {
  navLinks.classList.remove("show");
  overlay.classList.remove("show");
  menuIcon.style.display = "block"; // Show menu icon
  closeIcon.style.display = "none"; // Hide close icon
});


function toggleSubList() {
    var subList = document.getElementById("subList");
    const products = document.getElementById("produits-item");
    products.classList.toggle("open");

    if (subList.style.display === "none" || subList.style.display === "") {
        subList.style.display = "block";
        
        setTimeout(() => {
            subList.style.opacity = "1";
        }, 10); // Small delay for animation
    } else {
        subList.style.opacity = "0";
        setTimeout(() => {
            subList.style.display = "none";
        }, 300); // Wait for animation before hiding
    }
}
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll('blockquote');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(element => observer.observe(element));
});

let currentSlide = 0; // Track the current slide
const carousel = document.getElementById("carousel");
const slides = document.querySelectorAll("#carousel > div"); // All slides

// Update the carousel position
function updateCarousel() {
  const slideWidth = slides[0].offsetWidth; // Width of one slide
  carousel.style.transform = `translateX(-${currentSlide * slideWidth}px)`; // Move to the current slide
}

// Move to the previous slide
function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--; // Decrement the slide index
    updateCarousel();
  }
}

// Move to the next slide
function nextSlide() {
  if (currentSlide < slides.length - 1) {
    currentSlide++; // Increment the slide index
    updateCarousel();
  }
}

// Recalculate the slide width on window resize
window.addEventListener("resize", updateCarousel);





