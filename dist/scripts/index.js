import { AvenueSlider } from "./avenue.js";
import { Carousel } from "./carousel.js";
import { EventsSlider } from "./events.js";
class App {
    constructor() {
        this.init();
    }
    init() {
        console.log("Application initialized");
        this.setupEventListeners();
    }
    setupEventListeners() {
        document.addEventListener("DOMContentLoaded", async () => {
            try {
                console.log("DOM Content Loaded");
                // Load header
                await this.loadHeader();
                console.log("Header loaded");
                // Load footer
                await this.loadFooter();
                console.log("Footer loaded");
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
    async loadHeader() {
        const headerResponse = await fetch("../libs/header.html");
        const headerHtml = await headerResponse.text();
        const headerDiv = document.createElement("div");
        headerDiv.innerHTML = headerHtml;
        document.body.insertBefore(headerDiv.firstElementChild, document.body.firstChild);
    }
    async loadFooter() {
        const footerResponse = await fetch("../libs/footer.html");
        const footerHtml = await footerResponse.text();
        const footerDiv = document.createElement("div");
        footerDiv.innerHTML = footerHtml;
        document.body.appendChild(footerDiv.firstElementChild);
    }
    scrollTopAction() {
        const scrollTopButton = document.getElementById("scroll_top");
        if (scrollTopButton) {
            scrollTopButton.addEventListener("click", () => {
                if (window.scrollY > window.innerHeight) {
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    });
                }
            });
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