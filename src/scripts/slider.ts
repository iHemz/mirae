export class Slider {
  slides: HTMLElement[];
  currentSlide: number;
  intervalDuration: number;
  prevButton: HTMLElement | null;
  nextButton: HTMLElement | null;
  slideInterval: number | null;

  constructor(
    slides: HTMLElement[],
    currentSlide: number,
    prevButton: HTMLElement | null,
    nextButton: HTMLElement | null,
    slideInterval: number | null
  ) {
    this.slides = slides;
    this.currentSlide = currentSlide;
    this.intervalDuration = slideInterval || 5000; // 5 seconds per slide
    this.prevButton = prevButton;
    this.nextButton = nextButton;
    this.slideInterval = null;
  }

  showSlide(index: number): void {
    // Remove active class from current slide and dot
    this.slides[this.currentSlide].classList.remove("active");

    // Update current slide index
    this.currentSlide = index;

    // Add active class to new slide and dot
    this.slides[this.currentSlide].classList.add("active");
  }

  nextSlide(): void {
    const nextIndex = (this.currentSlide + 1) % this.slides.length;
    this.showSlide(nextIndex);
  }

  prevSlide(): void {
    const prevIndex =
      (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.showSlide(prevIndex);
  }

  startInterval(): void {
    if (!this.slideInterval) {
      this.slideInterval = window.setInterval(
        () => this.nextSlide(),
        this.intervalDuration
      );
    }
  }

  stopInterval(): void {
    if (this.slideInterval) {
      window.clearInterval(this.slideInterval);
      this.slideInterval = null;
    }
  }

  resetInterval(): void {
    this.stopInterval();
    this.startInterval();
  }
}
