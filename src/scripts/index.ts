import { AvenueSlider } from "./avenue.js";
import { Carousel } from "./carousel.js";
import { EventsSlider } from "./events.js";
import { Layout } from "./layout.js";

export class App extends Layout {
  constructor() {
    super();
    this.init();
  }

  protected init(): void {
    console.log("Application initialized");
    this.setupEventListeners();
  }

  private setupEventListeners(): void {
    document.addEventListener("DOMContentLoaded", async () => {
      try {
        // Load header
        await this.loadHeader();

        // Load footer
        await this.loadFooter();

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

    // Initialize nav dropdown
    this.addDropdownActions();

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
