import { AvenueSlider } from "./avenue.js";
import { Carousel } from "./carousel.js";
import { EventsSlider } from "./events.js";
import { Layout } from "./layout.js";
export class App extends Layout {
    constructor() {
        super();
        this.init();
    }
    init() {
        console.log("Application initialized");
        this.setupEventListeners();
    }
    setupEventListeners() {
        document.addEventListener("DOMContentLoaded", async () => {
            try {
                // Load header
                await this.loadHeader();
                // Load footer
                await this.loadFooter();
                // Initialize features
                this.initializeFeatures();
            }
            catch (error) {
                console.error("Error loading layout:", error);
            }
        });
    }
    initializeFeatures() {
        // Initialize carousel
        this.startSlider();
        // Initialize events slider
        this.startEvents();
        // Initialize avenue slider
        this.startAvenueSlider();
        // Initialize nav dropdown
        this.addDropdownActions();
        // Initialize scroll to top
        this.scrollTopAction();
    }
    startAvenueSlider() {
        const avenueElement = document.querySelector(".avenue_carousel");
        if (avenueElement) {
            new AvenueSlider(avenueElement);
            console.log("Avenue slider started");
        }
    }
    startSlider() {
        const carouselElement = document.querySelector(".carousel");
        if (carouselElement) {
            new Carousel(carouselElement);
        }
    }
    startEvents() {
        const eventsElement = document.querySelector(".events_top__carousel");
        if (eventsElement) {
            new EventsSlider(eventsElement);
        }
    }
}
// Initialize the application
new App();
//# sourceMappingURL=index.js.map