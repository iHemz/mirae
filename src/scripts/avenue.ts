import { Slider } from "./slider.js";

export class AvenueSlider extends Slider {
  private wrapper: HTMLElement;
  private prevIndex: number;
  private nextIndex: number;

  constructor(element: HTMLElement) {
    super([], 0, null, null, 10000);
    this.wrapper = element;
    this.slides = Array.from(
      this.wrapper.querySelectorAll(".avenue_carousel__image")
    ) as HTMLElement[];
    this.prevIndex =
      (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.nextIndex = (this.currentSlide + 1) % this.slides.length;

    this.init();
  }

  init(): void {
    // load slide
    this.showSlide(0);

    // Start automatic sliding
    this.startInterval();

    // Pause on hover
    this.wrapper.addEventListener("mouseenter", () => this.stopInterval());
    this.wrapper.addEventListener("mouseleave", () => this.startInterval());
  }

  showSlide(index: number): void {
    // remove added classes
    this.slides.forEach((slide) => {
      slide.classList.remove("previous", "active", "next");
    });

    // set new indexes
    this.prevIndex = (index - 1 + this.slides.length) % this.slides.length;
    this.currentSlide = index;
    this.nextIndex = (index + 1) % this.slides.length;

    // add classes to new indexed elements
    this.slides[this.currentSlide].classList.add("active");
    this.slides[this.nextIndex].classList.add("next");
    this.slides[this.prevIndex].classList.add("previous");
  }
}
