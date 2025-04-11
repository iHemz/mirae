import { AvenueSlider } from "./avenue.js";
import { Carousel } from "./carousel.js";
import { EventsSlider } from "./events.js";

class App {
  constructor() {
    this.init();
  }

  private init(): void {
    console.log("Application initialized");
    this.setupEventListeners();
  }

  private setupEventListeners(): void {
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
      } catch (error) {
        console.error("Error loading layout:", error);
      }
    });
  }

  private initializeFeatures(): void {
    // Initialize carousel
    this.startSlider();

    // Initialize events slider
    this.startEvents();

    // Initialize avenue slider
    this.startAvenueSlider();

    // Initialize scroll to top
    this.scrollTopAction();
  }

  private startAvenueSlider(): void {
    const avenueElement = document.querySelector(
      ".avenue_carousel"
    ) as HTMLElement | null;
    if (avenueElement) {
      new AvenueSlider(avenueElement);
      console.log("Avenue slider started");
    }
  }

  private async loadHeader() {
    const headerResponse = await fetch("../libs/header.html");
    const headerHtml = await headerResponse.text();
    const headerDiv = document.createElement("div");
    headerDiv.innerHTML = headerHtml;
    document.body.insertBefore(
      headerDiv.firstElementChild!,
      document.body.firstChild
    );
  }

  private async loadFooter() {
    const footerResponse = await fetch("../libs/footer.html");
    const footerHtml = await footerResponse.text();
    const footerDiv = document.createElement("div");
    footerDiv.innerHTML = footerHtml;
    document.body.appendChild(footerDiv.firstElementChild!);
  }

  private scrollTopAction(): void {
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

  private startSlider() {
    const carouselElement = document.querySelector(
      ".carousel"
    ) as HTMLElement | null;
    if (carouselElement) {
      new Carousel(carouselElement);
    }
  }

  private startEvents() {
    const eventsElement = document.querySelector(
      ".events_top__carousel"
    ) as HTMLElement | null;
    if (eventsElement) {
      new EventsSlider(eventsElement);
    }
  }
}

// Initialize the application
new App();
