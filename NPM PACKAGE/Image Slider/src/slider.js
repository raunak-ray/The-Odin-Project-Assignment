// slider.js
import { imageUrls } from "./data.js";

export class Slider {
  constructor({ container, navigationDots, forwardBtn, backwardBtn }) {
    this.container = container;
    this.navigationDots = navigationDots;
    this.forwardBtn = forwardBtn;
    this.backwardBtn = backwardBtn;
    this.image = document.createElement("img");
    this.container.append(this.image);

    this.currentIndex = 0;
    this.stop = false;

    this.initEvents();
    this.renderImage();
    this.startAutoSlide();
  }

  renderImage() {
    this.image.src = imageUrls[this.currentIndex];

    // Update active dot
    this.navigationDots.forEach((dot) => dot.classList.remove("active"));
    this.navigationDots[this.currentIndex].classList.add("active");
  }

  handleBounds() {
    if (this.currentIndex < 0) {
      this.currentIndex = imageUrls.length - 1;
    } else if (this.currentIndex >= imageUrls.length) {
      this.currentIndex = 0;
    }
  }

  nextImage() {
    this.currentIndex++;
    this.handleBounds();
    this.renderImage();
  }

  prevImage() {
    this.currentIndex--;
    this.handleBounds();
    this.renderImage();
  }

  startAutoSlide() {
    if (!this.stop) {
      setTimeout(() => {
        this.nextImage();
        this.startAutoSlide(); // recursive loop
      }, 5000);
    }
  }

  toggleAutoSlide() {
    this.stop = !this.stop;
    if (!this.stop) this.startAutoSlide();
  }

  initEvents() {
    // Toggle play/pause on container click
    this.container.addEventListener("click", () => this.toggleAutoSlide());

    // Navigation buttons
    this.forwardBtn.addEventListener("click", () => this.nextImage());
    this.backwardBtn.addEventListener("click", () => this.prevImage());

    // Navigation dots click
    this.navigationDots.forEach((dot) => {
      dot.addEventListener("click", () => {
        this.currentIndex = Number(dot.dataset.index);
        this.renderImage();
      });
    });
  }
}
