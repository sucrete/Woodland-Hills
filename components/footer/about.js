import { LitElement, html } from "../../assets/js/lit.js";

export class About extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="footer__about">
      <div class="footer__block-title">
          <h3>Info</h3>
        </div>
        <div class="hours pb-4 ">
          <span><i class="fa-solid fa-clock"></i></span>
          <span
            >Mon-Fri 09:00-6:00 <br /><span class="subheading"
              >(holiday hours may differ)</span
            >
          </span>
        </div>

        <div class="social__block">
          <div>Follow Us:</div>
          <ul class="social">
            <li class="social__item">
              <a
                href="https://www.facebook.com/shirkeygolf/"
                class="social__link"
                target="_blank"
                ><i class="fab fa-facebook"></i
              ></a>
            </li>
            <li class="social__item">
              <a
                href="https://www.instagram.com/shirkeygolfcourse/"
                class="social__link"
                target="_blank"
                ><i class="fab fa-instagram"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
    `;
  }
}
customElements.define("footer-about", About);
