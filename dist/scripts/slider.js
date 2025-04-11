export class Slider {
    constructor(slides, currentSlide, prevButton, nextButton, slideInterval) {
        this.slides = slides;
        this.currentSlide = currentSlide;
        this.intervalDuration = slideInterval || 5000; // 5 seconds per slide
        this.prevButton = prevButton;
        this.nextButton = nextButton;
        this.slideInterval = null;
    }
    showSlide(index) {
        // Remove active class from current slide and dot
        this.slides[this.currentSlide].classList.remove("active");
        // Update current slide index
        this.currentSlide = index;
        // Add active class to new slide and dot
        this.slides[this.currentSlide].classList.add("active");
    }
    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.slides.length;
        this.showSlide(nextIndex);
    }
    prevSlide() {
        const prevIndex = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.showSlide(prevIndex);
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
//# sourceMappingURL=slider.js.map