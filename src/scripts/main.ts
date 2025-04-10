// Main TypeScript file
class App {
  constructor() {
    this.init();
  }

  private init(): void {
    console.log("Application initialized");
    this.setupEventListeners();
  }

  private setupEventListeners(): void {
    document.addEventListener("DOMContentLoaded", () => {
      const content = document.querySelector(".content");
      if (content) {
        content.addEventListener("click", () => {
          this.handleContentClick();
        });
      }
    });
  }

  private handleContentClick(): void {
    console.log("Content section clicked");
    // Add your custom functionality here
  }
}

// Initialize the application
new App();
