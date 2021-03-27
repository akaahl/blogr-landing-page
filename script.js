const hamburgerBtn = document.getElementById("hamburger-btn");
const closeBtn = document.getElementById("close-btn");
const desktopNavLinks = document.querySelectorAll(".desktop-a-links");
const mobileNavbarContainer = document.getElementById(
  "mobile-navbar-container"
);

const mobileNavLinks = document.querySelectorAll(".mobile-a-links");

hamburgerBtn.addEventListener("click", () => {
  mobileNavbarContainer.classList.toggle("show");
  hamburgerBtn.classList.toggle("hide");
  closeBtn.classList.toggle("show");
});

closeBtn.addEventListener("click", () => {
  mobileNavbarContainer.classList.toggle("show");
  hamburgerBtn.classList.toggle("hide");
  closeBtn.classList.toggle("show");
});

mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    link.nextElementSibling.classList.toggle("show");
  });
});

// desktopNavLinks.forEach((link) => {
//   link.addEventListener("click", () => {
//     console.log("true");
//     link.nextElementSibling.classList.toggle("show");
//   });
// });
