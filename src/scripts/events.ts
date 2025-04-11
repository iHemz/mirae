import { Slider } from "./slider.js";

export class EventsSlider extends Slider {
  private wrapper: HTMLElement;
  constructor(element: HTMLElement) {
    super([], 0, null, null, null);
    this.wrapper = element;
    this.slides = Array.from(
      this.wrapper.querySelectorAll(".events_top__carousel_image")
    );
    this.prevButton = this.wrapper.querySelector(".events_chevron__left");
    this.nextButton = this.wrapper.querySelector(".events_chevron__right");

    this.init();
  }

  init() {
    // add listeners to buttons
    this.prevButton?.addEventListener("click", () => this.prevSlide());
    this.nextButton?.addEventListener("click", () => this.nextSlide());

    // load slide
    this.showSlide(0);

    // Start automatic sliding
    this.startInterval();

    // Pause on hover
    this.wrapper.addEventListener("mouseenter", () => this.stopInterval());
    this.wrapper.addEventListener("mouseleave", () => this.startInterval());
  }
}
