// ===== LeRay_script.js (Main Site Logic) =====
document.addEventListener("DOMContentLoaded", function () {

  // ===== Dropdown toggle for "Services" =====
  const dropdownToggle = document.querySelector(".dropdown-toggle");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  if (dropdownToggle && dropdownMenu) {
    dropdownToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdownMenu.style.display =
        dropdownMenu.style.display === "flex" ? "none" : "flex";
    });

    document.addEventListener("click", () => {
      dropdownMenu.style.display = "none";
    });
  }

  // ===== Chat bubble click action =====
  const chatBubble = document.querySelector(".chat-bubble");
  if (chatBubble) {
    chatBubble.addEventListener("click", () => {
      alert("Chat support feature coming soon!");
    });
  }

  // ===== HERO CAROUSEL FUNCTIONALITY =====
  const slides = document.querySelectorAll(".carousel-slide");
  const prevBtn = document.querySelector(".carousel-control.prev");
  const nextBtn = document.querySelector(".carousel-control.next");
  const dotsContainer = document.querySelector(".dots");

  if (slides.length > 0 && dotsContainer) {
    let currentIndex = 0;
    let autoSlideInterval;

    // Create dots dynamically
    slides.forEach((_, index) => {
      const dot = document.createElement("span");
      dot.addEventListener("click", () => goToSlide(index));
      dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll("span");

    function updateSlides() {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === currentIndex);
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentIndex);
      });
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlides();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlides();
    }

    function goToSlide(index) {
      currentIndex = index;
      updateSlides();
      resetAutoSlide();
    }

    if (nextBtn) nextBtn.addEventListener("click", () => { nextSlide(); resetAutoSlide(); });
    if (prevBtn) prevBtn.addEventListener("click", () => { prevSlide(); resetAutoSlide(); });

    function startAutoSlide() {
      autoSlideInterval = setInterval(nextSlide, 5000);
    }

    function resetAutoSlide() {
      clearInterval(autoSlideInterval);
      startAutoSlide();
    }

    updateSlides();
    startAutoSlide();
  }
    // ===== Login & Signup Modal Logic =====
    const signupModal = document.getElementById("signupModal");
    const loginModal = document.getElementById("loginModal");
    const openLoginLink = document.getElementById("openLogin");
    const openSignupLink = document.getElementById("openSignup");
    const backToSignup = document.getElementById("backToSignup");
  
    const closeSignup = signupModal ? signupModal.querySelector(".close") : null;
    const closeLogin = loginModal ? loginModal.querySelector(".close-login") : null;
  
    // ===== Switch Between Modals =====
    if (openLoginLink && signupModal && loginModal) {
      openLoginLink.addEventListener("click", (e) => {
        e.preventDefault();
        signupModal.style.display = "none";
        loginModal.style.display = "flex";
      });
    }
  
    if (openSignupLink && signupModal && loginModal) {
      openSignupLink.addEventListener("click", (e) => {
        e.preventDefault();
        loginModal.style.display = "none";
        signupModal.style.display = "flex";
      });
    }
  
    if (backToSignup && signupModal && loginModal) {
      backToSignup.addEventListener("click", () => {
        loginModal.style.display = "none";
        signupModal.style.display = "flex";
      });
    }
  
    // ===== Close Modals =====
    if (closeSignup) {
      closeSignup.addEventListener("click", () => {
        signupModal.style.display = "none";
      });
    }
  
    if (closeLogin) {
      closeLogin.addEventListener("click", () => {
        loginModal.style.display = "none";
      });
    }


});
