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
        // Load header
        const headerResponse = await fetch("../libs/header.html");
        const headerHtml = await headerResponse.text();
        const headerDiv = document.createElement("div");
        headerDiv.innerHTML = headerHtml;
        document.body.insertBefore(
          headerDiv.firstElementChild!,
          document.body.firstChild
        );

        // Load footer
        const footerResponse = await fetch("../libs/footer.html");
        const footerHtml = await footerResponse.text();
        const footerDiv = document.createElement("div");
        footerDiv.innerHTML = footerHtml;
        document.body.appendChild(footerDiv.firstElementChild!);
      } catch (error) {
        console.error("Error loading layout:", error);
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
