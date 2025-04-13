export class Layout {
  constructor() {}

  async loadHeader() {
    const headerResponse = await fetch("../libs/header.html");
    const headerHtml = await headerResponse.text();
    const headerDiv = document.createElement("div");
    headerDiv.innerHTML = headerHtml;
    document.body.insertBefore(
      headerDiv.firstElementChild!,
      document.body.firstChild
    );
  }

  async loadFooter() {
    const footerResponse = await fetch("../libs/footer.html");
    const footerHtml = await footerResponse.text();
    const footerDiv = document.createElement("div");
    footerDiv.innerHTML = footerHtml;
    document.body.appendChild(footerDiv.firstElementChild!);
  }

  scrollTopAction(): void {
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

  private openDropDown(): void {
    const dropdownButton = document.querySelector(".header_dropdown_menu");

    if (dropdownButton) {
      dropdownButton.addEventListener("click", () => {
        const el = document.querySelector("nav");
        if (el) {
          el.classList.replace("inactive", "active");
        }
      });
    }
  }

  private closeDropDown(): void {
    const dropdownButton = document.querySelector(".close_dropdown");

    if (dropdownButton) {
      dropdownButton.addEventListener("click", () => {
        const el = document.querySelector("nav");
        if (el) {
          el.classList.replace("active", "inactive");
        }
      });
    }
  }

  addDropdownActions() {
    this.openDropDown();
    this.closeDropDown();
  }
}
