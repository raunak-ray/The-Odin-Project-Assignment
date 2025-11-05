import "./style.css";

const navLinks = document.querySelectorAll("nav > div > a");

navLinks.forEach((navChild) => {
  const dropdown = navChild.nextElementSibling;

  // Show dropdown when hovering on link
  navChild.addEventListener("mouseenter", () => {
    dropdown.classList.add("show");
  });

  // Keep dropdown visible if hovering over dropdown
  dropdown.addEventListener("mouseenter", () => {
    dropdown.classList.add("show");
  });

  // Hide when leaving both link and dropdown
  navChild.addEventListener("mouseleave", () => {
    setTimeout(() => {
      if (!dropdown.matches(":hover")) {
        dropdown.classList.remove("show");
      }
    }, 150);
  });

  dropdown.addEventListener("mouseleave", () => {
    dropdown.classList.remove("show");
  });

  // Optional: toggle on click (useful for mobile)
  navChild.addEventListener("click", (event) => {
    event.preventDefault();
    dropdown.classList.toggle("show");
  });
});
