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
        await this.loadHeader();

        // Load footer
        await this.loadFooter();

        // handle scroll to top action
        this.scrollTopAction();
      } catch (error) {
        console.error("Error loading layout:", error);
      }
    });
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
}

// Initialize the application
new App();
