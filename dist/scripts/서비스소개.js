import { Layout } from "./layout.js";
export class Introduction extends Layout {
    constructor() {
        super();
        this.init();
    }
    init() {
        console.log("initialized 서비스소개");
        this.setupEventListeners();
    }
    setupEventListeners() {
        document.addEventListener("DOMContentLoaded", async () => await this.initializeFeatures());
    }
    async initializeFeatures() {
        try {
            await this.loadHeader();
            await this.loadFooter();
            this.scrollTopAction();
            this.addDropdownActions();
        }
        catch (error) {
            console.error("Error loading layout:", error);
        }
    }
}
// Initialize the application
new Introduction();
//# sourceMappingURL=%EC%84%9C%EB%B9%84%EC%8A%A4%EC%86%8C%EA%B0%9C.js.map