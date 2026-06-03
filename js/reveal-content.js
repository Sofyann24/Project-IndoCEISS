document.addEventListener("DOMContentLoaded", () => {
  // --- SCROLL REVEAL ANIMATION SYSTEM ---
  const revealElements = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    const triggerBottom = (window.innerHeight / 5) * 4.5; // Batas deteksi elemen masuk viewport

    revealElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < triggerBottom) {
        element.classList.add("active");
      }
    });
  };

  // Jalankan sekali saat halaman selesai dimuat agar komponen atas langsung muncul
  setTimeout(revealOnScroll, 150);

  // Jalankan fungsi setiap kali user melakukan scroll layar
  window.addEventListener("scroll", revealOnScroll);
});
