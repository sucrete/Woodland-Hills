import { LitElement, html } from '../../assets/js/lit.js';


export class Contact extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
    
      
    <div class="footer__block">
              <div class="footer__block-title">
                <h3>Contact info</h3>
              </div>
              <div class="footer__block-body">
                <ul class="footer__info">
                  <li class="footer__info-item">
                    <span><i class="fa-solid fa-phone"></i></span>
                    <a href="tel:8164702582" target="_blank"> <span>(816) 470-2582</span></a>
                  </li>
                  <li class="footer__info-item">
                    <span><i class="fa-solid fa-location-dot"></i></span>
                    <a href="https://maps.app.goo.gl/gU6kEd5yXvKLAApL7"
                      target="_blank"> 901 Wollard Blvd<br>
                      Richmond, MO 64085</a>
                  </li>
                  <li class="footer__info-item">
                    <span><i class="fa-solid fa-envelope"></i></span>
                    <a href="mailto:info@shirkeygolfcourse.com">info@shirkeygolfcourse.com</a>
                  </li>
                </ul>
              </div>
            </div>
    `;
  }
}
customElements.define('footer-contact', Contact);