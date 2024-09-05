// ScrollReveal animations
ScrollReveal().reveal(".contact-section", {
  delay: 400,
  distance: "50px",
  origin: "bottom",
  duration: 1000,
  reset: true,
});

ScrollReveal().reveal(".experience-section", {
  delay: 300,
  origin: "left",
  distance: "50px",
});

ScrollReveal().reveal(".education-section", {
  delay: 300,
  origin: "right",
  distance: "50px",
});

ScrollReveal().reveal(".soft-skills-section", {
  delay: 300,
  origin: "bottom",
  distance: "50px",
});

// Smooth scroll with offset for navbar
document.querySelectorAll("a.nav-link").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    const navbarHeight = document.querySelector(".navbar").offsetHeight;

    window.scrollTo({
      top: targetElement.offsetTop - navbarHeight,
      behavior: "smooth",
    });
  });
});
