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

  // ===== Learn More & Book Now Buttons =====
  const learnMoreBtn = document.getElementById("learnMoreBtn");
  const bookNowBtn = document.getElementById("bookNowBtn");

  if (learnMoreBtn) {
    learnMoreBtn.addEventListener("click", () => {
      alert("Thank you for your interest! Visit our Services page to explore more treatments.");
      window.location.href = "../ServicesBooking/facial.html";
    });
  }

  if (bookNowBtn) {
    bookNowBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const signupModal = document.getElementById("signupModal");
      if (signupModal) {
        signupModal.style.display = "flex";
      } else {
        // Fallback redirect if modal doesn't exist
        window.location.href = "../Booking/Booking.html";
      }
    });
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

  // ===== Close When Clicking Outside =====
  window.addEventListener("click", (event) => {
    if (event.target === signupModal) signupModal.style.display = "none";
    if (event.target === loginModal) loginModal.style.display = "none";
  });

});
