export class Carousel {
    constructor(element) {
        this.carousel = element;
        this.slides = Array.from(this.carousel.querySelectorAll(".carousel_card"));
        this.dots = Array.from(this.carousel.querySelectorAll(".carousel_dash"));
        this.currentSlide = 0;
        this.slideInterval = null;
        this.intervalDuration = 5000; // 5 seconds per slide
        this.init();
    }
    init() {
        // Set initial state
        this.showSlide(0);
        // Add click handlers to dots
        this.dots.forEach((dot, index) => {
            dot.addEventListener("click", () => {
                this.showSlide(index);
                this.resetInterval();
            });
        });
        // Start automatic sliding
        this.startInterval();
        // Pause on hover
        this.carousel.addEventListener("mouseenter", () => this.stopInterval());
        this.carousel.addEventListener("mouseleave", () => this.startInterval());
    }
    showSlide(index) {
        // Remove active class from current slide and dot
        this.slides[this.currentSlide].classList.remove("active");
        this.dots[this.currentSlide].classList.remove("active");
        // Update current slide index
        this.currentSlide = index;
        // Add active class to new slide and dot
        this.slides[this.currentSlide].classList.add("active");
        this.dots[this.currentSlide].classList.add("active");
    }
    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.slides.length;
        this.showSlide(nextIndex);
    }
    startInterval() {
        if (!this.slideInterval) {
            this.slideInterval = window.setInterval(() => this.nextSlide(), this.intervalDuration);
        }
    }
    stopInterval() {
        if (this.slideInterval) {
            window.clearInterval(this.slideInterval);
            this.slideInterval = null;
        }
    }
    resetInterval() {
        this.stopInterval();
        this.startInterval();
    }
}
//# sourceMappingURL=carousel.js.map