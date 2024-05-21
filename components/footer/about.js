import { LitElement, html } from '../../assets/js/lit.js';


export class About extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
        <div class="footer__about">
          <a class="footer__brand mb-1" href="home.html"><img src="assets/images/logo/shirkey-white.png"
              alt="logo"></a>
          <div class="hours pb-4 pt-5">
            <h6>Hours:</h6>
            <span><i class="fa-solid fa-clock"></i></span>
            <span>Mon-Fri 09:00-6:00 <br><span class="subheading">(holiday hours may differ)</span>
            </span>
          </div>

          <div class="social__block">
            <h6>Follow Us:</h6>
            <ul class="social">
              <li class="social__item">
                <a href="https://www.facebook.com/shirkeygolf/" class="social__link" target="_blank"><i class="fab fa-facebook"></i></a>
              </li>
              <li class="social__item">
                <a href="https://www.instagram.com/shirkeygolfcourse/" class="social__link" target="_blank"><i class="fab fa-instagram"></i></a>
              </li>
            </ul>
          </div>
        </div>
    `;
  }
}
customElements.define('footer-about', About);