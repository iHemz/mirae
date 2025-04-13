import { Layout } from "./layout.js";

export class Introduction extends Layout {
  constructor() {
    super();
    this.init();
  }

  init(): void {
    console.log("initialized 서비스소개");
    this.setupEventListeners();
  }

  private setupEventListeners(): void {
    document.addEventListener(
      "DOMContentLoaded",
      async () => await this.initializeFeatures()
    );
  }

  private async initializeFeatures() {
    try {
      await this.loadHeader();
      await this.loadFooter();
      this.scrollTopAction();
      this.addDropdownActions();
    } catch (error) {
      console.error("Error loading layout:", error);
    }
  }
}

// Initialize the application
new Introduction();
