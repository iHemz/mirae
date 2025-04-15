import { Slider } from "./slider.js";
export class AvenueSlider extends Slider {
    constructor(element) {
        super([], 0, null, null, 10000);
        this.wrapper = element;
        this.slides = Array.from(this.wrapper.querySelectorAll(".avenue_carousel__image"));
        this.gapValues = {
            default: -40,
            520: -20,
            768: 20,
            1024: 240,
        };
        this.init();
    }
    init() {
        // load slide
        this.showSlide(4);
        // Start automatic sliding
        this.startInterval();
    }
    getGapValue() {
        const screenWidth = window.innerWidth;
        const gapValues = this.gapValues;
        for (const [breakpoint, gap] of Object.entries(gapValues).reverse()) {
            if (screenWidth >= Number(breakpoint)) {
                return gap;
            }
        }
        return gapValues.default;
    }
    setPosition(index, currentIndex, totalSlides) {
        // Calculate the position relative to the current slide
        let position = index - currentIndex;
        // Adjust position to show slides on both sides
        if (position > totalSlides / 2) {
            position -= totalSlides;
        }
        else if (position < -totalSlides / 2) {
            position += totalSlides;
        }
        return position;
    }
    setOffset(pos, baseWidth, gap, scale) {
        // Calculate the offset considering the larger size of the active slide
        let offset = 0;
        if (pos > 0) {
            // Slides to the right: add extra gap to account for the larger active slide
            offset =
                (baseWidth * scale + gap) * (pos - 1) +
                    (baseWidth * (1 - scale)) / 2 +
                    baseWidth * scale +
                    gap;
        }
        else if (pos < 0) {
            // Slides to the left: mirror the right side calculation
            offset = (baseWidth * scale + gap) * pos - (baseWidth * (1 - scale)) / 2;
        }
        return offset;
    }
    showSlide(currentIndex) {
        const totalSlides = this.slides.length;
        const scale = 0.65; // Scale for non-active slides
        const baseWidth = 300; // Base width of each slide in pixels
        const gap = this.getGapValue();
        this.slides.forEach((slide, index) => {
            const position = this.setPosition(index, currentIndex, totalSlides);
            const isActive = index === currentIndex;
            const currentScale = isActive ? 1 : scale;
            const offset = this.setOffset(position, baseWidth, gap, scale);
            slide.style.transform = `translateX(${offset}px) translateX(-50%) scale(${currentScale})`;
            slide.style.zIndex = isActive ? "1" : "0";
            slide.style.opacity = isActive ? "1" : "0.5";
        });
        this.currentSlide = currentIndex;
    }
}
//# sourceMappingURL=avenue.js.map