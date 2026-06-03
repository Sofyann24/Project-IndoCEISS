document.addEventListener("DOMContentLoaded", () => {
  // 1. ANIMASI TEXT REVEAL DI HERO (SAAT REFRESH)
  const heroTitle = document.querySelector(".hero-title");
  if (heroTitle) {
    setTimeout(() => {
      heroTitle.classList.add("appear");
    }, 300); // Tunda dikit biar efek kerasa pas load
  }

  // --- LOGIC HERO SLIDER/CAROUSEL ---
  const slides = document.querySelectorAll(".carousel-slide");
  const nextBtn = document.getElementById("next-slide");
  const prevBtn = document.getElementById("prev-slide");

  if (slides.length > 0) {
    let currentSlideIndex = 0;
    const slideIntervalTime = 5000;
    let slideTimer;

    function changeSlide(nextIndex) {
      slides[currentSlideIndex].classList.remove("active");
      currentSlideIndex = nextIndex;
      slides[currentSlideIndex].classList.add("active");
      resetSlideTimer();
    }

    function nextSlide() {
      let newIndex = currentSlideIndex + 1;
      if (newIndex >= slides.length) newIndex = 0;
      changeSlide(newIndex);
    }

    function prevSlide() {
      let newIndex = currentSlideIndex - 1;
      if (newIndex < 0) newIndex = slides.length - 1;
      changeSlide(newIndex);
    }

    function resetSlideTimer() {
      clearInterval(slideTimer);
      slideTimer = setInterval(nextSlide, slideIntervalTime);
    }

    if (nextBtn && prevBtn) {
      nextBtn.addEventListener("click", nextSlide);
      prevBtn.addEventListener("click", prevSlide);
    }
    resetSlideTimer();
  }

  // 2. HAMBURGER MENU RESPONSIVE TOGGLE
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = document.querySelector(".nav-links");

  mobileMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  // Close menu pas nge-klik link (khusus mobile)
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });

  // 3. SCROLL REVEAL ANIMATION USING INTERSECTION OBSERVER
  // Animasi muncul berurutan pas elemen masuk ke viewport layar monitor
  const revealElements = document.querySelectorAll(".reveal");

  const revealOptions = {
    threshold: 0.1, // Element terpicu pas 10% bagian masuk layar
    rootMargin: "0px 0px -50px 0px", // Terpicu sedikit sebelum menyentuh batas bawah
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("active");
      observer.unobserve(entry.target); // Cukup eksekusi sekali aja pas di-scroll
    });
  }, revealOptions);

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
});
