"use strict";
// Main TypeScript file
class App {
    constructor() {
        this.init();
    }
    init() {
        console.log("Application initialized");
        this.setupEventListeners();
    }
    setupEventListeners() {
        document.addEventListener("DOMContentLoaded", () => {
            const content = document.querySelector(".content");
            if (content) {
                content.addEventListener("click", () => {
                    this.handleContentClick();
                });
            }
        });
    }
    handleContentClick() {
        console.log("Content section clicked");
        // Add your custom functionality here
    }
}
// Initialize the application
new App();
//# sourceMappingURL=main.js.map