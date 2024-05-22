import { LitElement, html } from "../../assets/js/lit.js";

export class LogoBlock extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="logo__block">
        <a class="footer__brand mb-1" href="index.html"
          ><img
            src="assets/images/logo/Woodland-Hills-logo-white.svg"
            alt="logo"
            class="footer-logo"
        /></a>
      </div>
    `;
  }
}
customElements.define("logo-block", LogoBlock);
