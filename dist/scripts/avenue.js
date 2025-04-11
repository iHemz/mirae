import { Slider } from "./slider.js";
export class AvenueSlider extends Slider {
    constructor(element) {
        super([], 0, null, null, 10000);
        this.wrapper = element;
        this.slides = Array.from(this.wrapper.querySelectorAll(".avenue_carousel__image"));
        this.prevIndex =
            (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.nextIndex = (this.currentSlide + 1) % this.slides.length;
        this.init();
    }
    init() {
        // load slide
        this.showSlide(0);
        // Start automatic sliding
        this.startInterval();
        // Pause on hover
        this.wrapper.addEventListener("mouseenter", () => this.stopInterval());
        this.wrapper.addEventListener("mouseleave", () => this.startInterval());
    }
    showSlide(index) {
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
//# sourceMappingURL=avenue.js.map